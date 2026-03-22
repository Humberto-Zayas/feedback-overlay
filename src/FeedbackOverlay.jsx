import React, { useState, useEffect, useRef } from 'react';
import { Toolbar } from './Toolbar.jsx';
import { useAnnotationCanvas } from './useAnnotationCanvas.js';

const INK = '#1C1C22';
const TERRA = '#B54A2A';
const CREAM = '#EEEAE3';

export function FeedbackOverlay({ enabled }) {
  if (!enabled) return null;

  const [feedbackMode, setFeedbackMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [flashMsg, setFlashMsg] = useState('');

  const toolbarRef = useRef(null);
  const canvasWrapRef = useRef(null);

  const { canvasElRef, activeTool, setTool, undo, redo, clearAll, saveImage, selectedBounds, deleteSelected } =
    useAnnotationCanvas();

  // Keyboard shortcuts: ⌘K/Ctrl+K to open, Esc to close
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape' && feedbackMode) {
        exitFeedback();
      } else if (e.key === 'k' && (e.metaKey || e.ctrlKey) && !feedbackMode) {
        e.preventDefault();
        enterFeedback();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [feedbackMode]);

  function enterFeedback() {
    document.body.style.overflow = 'hidden';
    setFeedbackMode(true);
    setTool('draw');
  }

  function exitFeedback() {
    document.body.style.overflow = '';
    clearAll();
    setFeedbackMode(false);
  }

  async function handleSave() {
    if (isSaving) return;
    setIsSaving(true);

    const result = await saveImage([toolbarRef.current, canvasWrapRef.current]);

    if (result.success) {
      setFlashMsg('Saved ✓');
    } else {
      setFlashMsg('Error — try again');
    }

    setTimeout(() => {
      setFlashMsg('');
      setIsSaving(false);
    }, 1200);
  }

  return (
    <>
      {/* Canvas — always rendered so fabric initializes once */}
      <div
        ref={canvasWrapRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 900,
          pointerEvents: feedbackMode ? 'all' : 'none',
        }}
      >
        <canvas ref={canvasElRef} style={{ position: 'absolute', inset: 0 }} />
      </div>

      {/* Toolbar — always rendered, animates between collapsed/expanded */}
      <Toolbar
        containerRef={toolbarRef}
        feedbackMode={feedbackMode}
        onEnter={enterFeedback}
        onExit={exitFeedback}
        activeTool={activeTool}
        onToolChange={setTool}
        onUndo={undo}
        onRedo={redo}
        onClear={clearAll}
        onSave={handleSave}
        isSaving={isSaving}
      />

      {/* Delete selected button */}
      {feedbackMode && selectedBounds && (
        <button
          onClick={deleteSelected}
          style={{
            position: 'fixed',
            left: selectedBounds.left + selectedBounds.width + 6,
            top: selectedBounds.top - 6,
            zIndex: 1001,
            background: TERRA,
            color: CREAM,
            border: 'none',
            cursor: 'pointer',
            width: 20,
            height: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'monospace',
            fontSize: 13,
            lineHeight: 1,
            padding: 0,
          }}
        >
          ×
        </button>
      )}

      {/* Flash message */}
      {flashMsg && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: INK,
            color: CREAM,
            fontFamily: 'monospace',
            fontSize: 11,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            padding: '14px 28px',
            zIndex: 2000,
            pointerEvents: 'none',
          }}
        >
          {flashMsg}
        </div>
      )}
    </>
  );
}
