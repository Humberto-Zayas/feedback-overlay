import { useRef, useState, useEffect } from 'react';
import { fabric } from 'fabric';

function sizeCanvas(canvas) {
  const W = window.innerWidth;
  const H = window.innerHeight;
  canvas.setWidth(W);
  canvas.setHeight(H);
  canvas.renderAll();
}

export function useAnnotationCanvas() {
  const canvasElRef = useRef(null);
  const fabricRef = useRef(null);
  const currentToolRef = useRef('draw');
  const historyRef = useRef([]);
  const drawingRef = useRef(null); // { start, obj, arrowHead }
  const justExitedTextRef = useRef(false);
  const redoRef = useRef([]);

  const [activeTool, setActiveTool] = useState('draw');
  const [selectedBounds, setSelectedBounds] = useState(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasElRef.current, {
      isDrawingMode: true,
      selection: false,
      backgroundColor: 'transparent',
    });
    fabricRef.current = canvas;
    sizeCanvas(canvas);
    canvas.freeDrawingBrush.color = '#FF2020';
    canvas.freeDrawingBrush.width = 2;

    historyRef.current = [canvas.toJSON()];

    const pushHistory = () => {
      historyRef.current.push(canvas.toJSON());
      redoRef.current = [];
    };

    canvas.on('path:created', (e) => {
      e.path.set({ selectable: true, evented: true });
      pushHistory();
    });

    canvas.on('text:editing:exited', () => {
      pushHistory();
      justExitedTextRef.current = true;
    });

    const updateBounds = () => {
      const obj = canvas.getActiveObject();
      setSelectedBounds(obj ? obj.getBoundingRect() : null);
    };
    canvas.on('selection:created', updateBounds);
    canvas.on('selection:updated', updateBounds);
    canvas.on('selection:cleared', () => setSelectedBounds(null));
    canvas.on('object:moving', updateBounds);
    canvas.on('object:modified', updateBounds);

    const onResize = () => sizeCanvas(canvas);
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      canvas.dispose();
    };
  }, []);

  function off() {
    const canvas = fabricRef.current;
    if (!canvas) return;
    canvas.off('mouse:down');
    canvas.off('mouse:move');
    canvas.off('mouse:up');
    canvas.isDrawingMode = false;
    canvas.selection = false;
    canvas.discardActiveObject();
    setSelectedBounds(null);
    canvas.renderAll();
  }

  function setTool(name) {
    const canvas = fabricRef.current;
    if (!canvas) return;

    off();
    currentToolRef.current = name;
    setActiveTool(name);

    switch (name) {
      case 'draw':
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush.color = '#FF2020';
        canvas.freeDrawingBrush.width = 2;
        break;

      case 'select':
        canvas.selection = true;
        canvas.getObjects().forEach(obj => {
          obj.set({ selectable: true, evented: true });
          obj.setCoords();
        });
        canvas.renderAll();
        break;

      case 'arrow': {
        canvas.on('mouse:down', (opt) => {
          if (currentToolRef.current !== 'arrow') return;
          const p = canvas.getPointer(opt.e);
          const line = new fabric.Line([p.x, p.y, p.x, p.y], {
            stroke: '#FF2020',
            strokeWidth: 2,
            selectable: false,
            evented: false,
          });
          canvas.add(line);
          drawingRef.current = { start: p, obj: line, arrowHead: null };
        });

        canvas.on('mouse:move', (opt) => {
          if (!drawingRef.current || currentToolRef.current !== 'arrow') return;
          const p = canvas.getPointer(opt.e);
          const { start, obj, arrowHead } = drawingRef.current;
          obj.set({ x2: p.x, y2: p.y });

          if (arrowHead) canvas.remove(arrowHead);
          const dx = p.x - start.x;
          const dy = p.y - start.y;
          const angle = Math.atan2(dy, dx) * 180 / Math.PI;
          const head = new fabric.Triangle({
            left: p.x,
            top: p.y,
            width: 12,
            height: 14,
            fill: '#FF2020',
            angle: angle + 90,
            originX: 'center',
            originY: 'center',
            selectable: false,
            evented: false,
          });
          canvas.add(head);
          drawingRef.current.arrowHead = head;
          canvas.renderAll();
        });

        canvas.on('mouse:up', () => {
          if (currentToolRef.current !== 'arrow') return;
          if (drawingRef.current) {
            const { obj: line, arrowHead } = drawingRef.current;
            canvas.remove(line);
            const members = [line];
            if (arrowHead) {
              canvas.remove(arrowHead);
              members.push(arrowHead);
            }
            const group = new fabric.Group(members, {
              selectable: true,
              evented: true,
            });
            canvas.add(group);
            group.setCoords();
            drawingRef.current = null;
          }
          historyRef.current.push(canvas.toJSON());
          redoRef.current = [];
        });
        break;
      }

      case 'box': {
        canvas.on('mouse:down', (opt) => {
          if (currentToolRef.current !== 'box') return;
          const p = canvas.getPointer(opt.e);
          const rect = new fabric.Rect({
            left: p.x,
            top: p.y,
            width: 0,
            height: 0,
            fill: 'transparent',
            stroke: '#FF2020',
            strokeWidth: 2,
            selectable: false,
            evented: false,
          });
          canvas.add(rect);
          drawingRef.current = { start: p, obj: rect };
        });

        canvas.on('mouse:move', (opt) => {
          if (!drawingRef.current || currentToolRef.current !== 'box') return;
          const p = canvas.getPointer(opt.e);
          const { start, obj } = drawingRef.current;
          const w = p.x - start.x;
          const h = p.y - start.y;
          obj.set({
            width: Math.abs(w),
            height: Math.abs(h),
            left: w < 0 ? p.x : start.x,
            top: h < 0 ? p.y : start.y,
          });
          canvas.renderAll();
        });

        canvas.on('mouse:up', () => {
          if (currentToolRef.current !== 'box') return;
          if (drawingRef.current) {
            drawingRef.current.obj.set({ selectable: true, evented: true });
            drawingRef.current.obj.setCoords();
            drawingRef.current = null;
          }
          historyRef.current.push(canvas.toJSON());
          redoRef.current = [];
        });
        break;
      }

      case 'circle': {
        canvas.on('mouse:down', (opt) => {
          if (currentToolRef.current !== 'circle') return;
          const p = canvas.getPointer(opt.e);
          const ellipse = new fabric.Ellipse({
            left: p.x,
            top: p.y,
            rx: 0,
            ry: 0,
            fill: 'transparent',
            stroke: '#FF2020',
            strokeWidth: 2,
            selectable: false,
            evented: false,
          });
          canvas.add(ellipse);
          drawingRef.current = { start: p, obj: ellipse };
        });

        canvas.on('mouse:move', (opt) => {
          if (!drawingRef.current || currentToolRef.current !== 'circle') return;
          const p = canvas.getPointer(opt.e);
          const { start, obj } = drawingRef.current;
          const w = p.x - start.x;
          const h = p.y - start.y;
          obj.set({
            rx: Math.abs(w) / 2,
            ry: Math.abs(h) / 2,
            left: w < 0 ? p.x : start.x,
            top: h < 0 ? p.y : start.y,
          });
          canvas.renderAll();
        });

        canvas.on('mouse:up', () => {
          if (currentToolRef.current !== 'circle') return;
          if (drawingRef.current) {
            drawingRef.current.obj.set({ selectable: true, evented: true });
            drawingRef.current.obj.setCoords();
            drawingRef.current = null;
          }
          historyRef.current.push(canvas.toJSON());
          redoRef.current = [];
        });
        break;
      }

      case 'text': {
        canvas.on('mouse:down', (opt) => {
          if (currentToolRef.current !== 'text') return;
          if (justExitedTextRef.current) {
            justExitedTextRef.current = false;
            return;
          }
          if (opt.target) return;
          const p = canvas.getPointer(opt.e);
          const txt = new fabric.IText('Type here', {
            left: p.x,
            top: p.y,
            fontFamily: 'monospace',
            fontSize: 14,
            fill: '#FF2020',
            editable: true,
            selectable: true,
          });
          canvas.add(txt);
          canvas.setActiveObject(txt);
          txt.enterEditing();
          txt.selectAll();
          canvas.renderAll();
        });
        break;
      }

      default:
        break;
    }
  }

  function deleteSelected() {
    const canvas = fabricRef.current;
    if (!canvas) return;
    const obj = canvas.getActiveObject();
    if (!obj) return;
    canvas.remove(obj);
    canvas.discardActiveObject();
    setSelectedBounds(null);
    historyRef.current.push(canvas.toJSON());
    canvas.renderAll();
  }

  function undo() {
    const canvas = fabricRef.current;
    if (!canvas) return;
    if (historyRef.current.length <= 1) return;
    redoRef.current.push(historyRef.current.pop());
    const prev = historyRef.current[historyRef.current.length - 1];
    canvas.loadFromJSON(prev, () => canvas.renderAll());
  }

  function redo() {
    const canvas = fabricRef.current;
    if (!canvas) return;
    if (redoRef.current.length === 0) return;
    const next = redoRef.current.pop();
    historyRef.current.push(next);
    canvas.loadFromJSON(next, () => canvas.renderAll());
  }

  function clearAll() {
    const canvas = fabricRef.current;
    if (!canvas) return;
    canvas.clear();
    canvas.backgroundColor = 'transparent';
    historyRef.current = [canvas.toJSON()];
    canvas.renderAll();
  }

  async function saveImage(elementsToHide) {
    const canvas = fabricRef.current;
    if (!canvas) return { success: false };

    elementsToHide.forEach(el => el && (el.style.visibility = 'hidden'));

    try {
      const { toCanvas } = await import('html-to-image');
      const ratio = window.devicePixelRatio || 1;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const sx = window.scrollX;
      const sy = window.scrollY;

      const fullShot = await toCanvas(document.body, {
        useCORS: true,
        pixelRatio: ratio,
      });

      // Crop full-page capture to the visible viewport
      const pageShot = document.createElement('canvas');
      pageShot.width = vw * ratio;
      pageShot.height = vh * ratio;
      const pCtx = pageShot.getContext('2d');
      pCtx.drawImage(fullShot, sx * ratio, sy * ratio, vw * ratio, vh * ratio, 0, 0, vw * ratio, vh * ratio);

      const fabricDataUrl = canvas.toDataURL({
        format: 'png',
        multiplier: ratio,
      });

      const merged = document.createElement('canvas');
      merged.width = vw * ratio;
      merged.height = vh * ratio;
      const ctx = merged.getContext('2d');
      ctx.drawImage(pageShot, 0, 0);

      await new Promise((resolve) => {
        const fabImg = new Image();
        fabImg.onload = () => {
          ctx.drawImage(fabImg, 0, 0, merged.width, merged.height);
          resolve();
        };
        fabImg.src = fabricDataUrl;
      });

      const link = document.createElement('a');
      const now = new Date();
      const ts = now.toISOString().slice(0, 16).replace('T', '-').replace(':', '');
      link.download = `feedback-${ts}.png`;
      link.href = merged.toDataURL('image/png');
      link.click();

      return { success: true };
    } catch (err) {
      console.error('[feedback-overlay] saveImage error:', err);
      return { success: false };
    } finally {
      elementsToHide.forEach(el => el && (el.style.visibility = ''));
    }
  }

  return {
    canvasElRef,
    fabricRef,
    activeTool,
    setTool,
    undo,
    redo,
    clearAll,
    saveImage,
    selectedBounds,
    deleteSelected,
  };
}
