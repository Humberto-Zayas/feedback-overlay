import { useRef, useState, useEffect } from 'react';
import { fabric } from 'fabric';

function sizeCanvas(canvas) {
  const W = document.documentElement.scrollWidth;
  const H = document.documentElement.scrollHeight;
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

  const [activeTool, setActiveTool] = useState('draw');

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

    canvas.on('path:created', (e) => {
      e.path.set({ selectable: true, evented: true });
      historyRef.current.push(canvas.toJSON());
    });

    canvas.on('text:editing:exited', () => {
      historyRef.current.push(canvas.toJSON());
    });

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
        canvas.getObjects().forEach(obj => obj.set({ selectable: true, evented: true }));
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
            drawingRef.current.obj.set({ selectable: true, evented: true });
            if (drawingRef.current.arrowHead) {
              drawingRef.current.arrowHead.set({ selectable: true, evented: true });
            }
            drawingRef.current = null;
          }
          historyRef.current.push(canvas.toJSON());
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
            drawingRef.current = null;
          }
          historyRef.current.push(canvas.toJSON());
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
            drawingRef.current = null;
          }
          historyRef.current.push(canvas.toJSON());
        });
        break;
      }

      case 'text': {
        canvas.on('mouse:down', (opt) => {
          if (currentToolRef.current !== 'text') return;
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
          canvas.renderAll();
        });
        break;
      }

      default:
        break;
    }
  }

  function undo() {
    const canvas = fabricRef.current;
    if (!canvas) return;
    if (historyRef.current.length <= 1) return;
    historyRef.current.pop();
    const prev = historyRef.current[historyRef.current.length - 1];
    canvas.loadFromJSON(prev, () => canvas.renderAll());
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

      const pageShot = await toCanvas(document.body, {
        useCORS: true,
        pixelRatio: window.devicePixelRatio || 1,
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
      });

      const fabricDataUrl = canvas.toDataURL({
        format: 'png',
        multiplier: window.devicePixelRatio || 1,
      });

      const merged = document.createElement('canvas');
      merged.width = pageShot.width;
      merged.height = pageShot.height;
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
    clearAll,
    saveImage,
  };
}
