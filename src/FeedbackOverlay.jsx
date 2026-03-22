import React, { useState, useEffect, useRef } from 'react';
import { Toolbar } from './Toolbar.jsx';
import { useAnnotationCanvas } from './useAnnotationCanvas.js';

const INK = '#1C1C22';
const BLUE = '#2B4FC7';
const TERRA = '#B54A2A';
const CREAM = '#EEEAE3';

export function FeedbackOverlay({ enabled }) {
  if (!enabled) return null;

  const [feedbackMode, setFeedbackMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [flashMsg, setFlashMsg] = useState('');

  const triggerRef = useRef(null);
  const saveRef = useRef(null);
  const toolbarRef = useRef(null);
  const canvasWrapRef = useRef(null);

  const { canvasElRef, activeTool, setTool, undo, redo, clearAll, saveImage, selectedBounds, deleteSelected } =
    useAnnotationCanvas();

  // Esc to exit
  useEffect(() => {
    if (!feedbackMode) return;
    const handler = (e) => {
      if (e.key === 'Escape') exitFeedback();
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

    const result = await saveImage([
      triggerRef.current,
      saveRef.current,
      toolbarRef.current,
      canvasWrapRef.current,
    ]);

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

  const canvasWrapStyle = {
    position: 'fixed',
    inset: 0,
    zIndex: 900,
    pointerEvents: feedbackMode ? 'all' : 'none',
  };

  const canvasStyle = {
    position: 'absolute',
    inset: 0,
  };

  return (
    <>
      {/* Canvas — always rendered so fabric initializes once */}
      <div ref={canvasWrapRef} style={canvasWrapStyle}>
        <canvas ref={canvasElRef} style={canvasStyle} />
      </div>

      {/* Toolbar */}
      {feedbackMode && (
        <div ref={toolbarRef}>
          <Toolbar
            activeTool={activeTool}
            onToolChange={setTool}
            onUndo={() => undo()}
            onRedo={() => redo()}
            onClear={() => clearAll()}
          />
        </div>
      )}

      {/* Save button */}
      {feedbackMode && (
        <button
          ref={saveRef}
          onClick={handleSave}
          disabled={isSaving}
          style={{
            position: 'fixed',
            bottom: 28,
            right: 152,
            zIndex: 1000,
            background: BLUE,
            color: '#F7F4EF',
            border: 'none',
            cursor: isSaving ? 'default' : 'pointer',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: 'monospace',
            fontSize: 10,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            boxShadow: '0 2px 16px rgba(43,79,199,0.3)',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width={14}
            height={14}
            stroke="currentColor"
            fill="none"
            strokeWidth={1.8}
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          Save Image
        </button>
      )}

      {/* Trigger button */}
      <button
        ref={triggerRef}
        onClick={feedbackMode ? exitFeedback : enterFeedback}
        style={{
          position: 'fixed',
          bottom: 28,
          right: 28,
          zIndex: 1000,
          background: feedbackMode ? TERRA : INK,
          color: CREAM,
          border: 'none',
          cursor: 'pointer',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontFamily: 'monospace',
          fontSize: 10,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          boxShadow: '0 2px 16px rgba(0,0,0,0.18)',
        }}
      >
        {feedbackMode ? (
          <>
            <svg
              viewBox="0 0 24 24"
              width={14}
              height={14}
              stroke="currentColor"
              fill="none"
              strokeWidth={1.8}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            Exit
          </>
        ) : (
          <>
            <svg
              viewBox="0 0 24 24"
              width={14}
              height={14}
              stroke="currentColor"
              fill="none"
              strokeWidth={1.8}
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Feedback
          </>
        )}
      </button>

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
