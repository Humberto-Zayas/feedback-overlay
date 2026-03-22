import React, { useState, useRef } from 'react';

const INK = '#1C1C22';
const BLUE = '#2B4FC7';
const TERRA = '#B54A2A';
const CREAM = '#EEEAE3';
const ACTIVE_BG = 'rgba(238,234,227,0.12)';
const ACTIVE_COLOR = '#F7F4EF';
const INACTIVE_COLOR = 'rgba(238,234,227,0.5)';

function ToolBtn({ name, active, onClick, title, children }) {
  const [hovered, setHovered] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const btnRef = useRef(null);

  const handleMouseEnter = () => {
    if (btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setTooltipPos({ x: r.left + r.width / 2, y: r.top });
    }
    setHovered(true);
  };

  return (
    <div style={{ flexShrink: 0 }}>
      {hovered && (
        <div
          style={{
            position: 'fixed',
            left: tooltipPos.x,
            top: tooltipPos.y - 8,
            transform: 'translate(-50%, -100%)',
            background: 'rgba(28,28,34,0.95)',
            color: 'rgba(238,234,227,0.85)',
            fontFamily: 'monospace',
            fontSize: 9,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '4px 7px',
            borderRadius: 2,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            border: '1px solid rgba(238,234,227,0.08)',
            zIndex: 1100,
          }}
        >
          {title}
        </div>
      )}
      <button
        ref={btnRef}
        onClick={() => onClick(name)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 34,
          height: 34,
          background: active ? ACTIVE_BG : 'transparent',
          border: 'none',
          cursor: 'pointer',
          borderRadius: 2,
          color: active ? ACTIVE_COLOR : INACTIVE_COLOR,
          transition: 'background 0.15s, color 0.15s',
        }}
      >
        {children}
      </button>
    </div>
  );
}

function Svg({ children, size = 16, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      fill="none"
      strokeWidth={1.8}
      {...props}
    >
      {children}
    </svg>
  );
}

function Sep() {
  return (
    <div
      style={{
        width: 1,
        height: 22,
        background: 'rgba(238,234,227,0.1)',
        margin: '0 4px',
        flexShrink: 0,
      }}
    />
  );
}

export function Toolbar({
  activeTool,
  onToolChange,
  onUndo,
  onRedo,
  onClear,
  onSave,
  isSaving,
  feedbackMode,
  onEnter,
  onExit,
  containerRef,
}) {
  const tools = [
    {
      name: 'select',
      title: 'Select',
      icon: <Svg><path d="M5 3l14 9-7 1-4 7z" /></Svg>,
    },
    {
      name: 'draw',
      title: 'Freehand',
      icon: (
        <Svg>
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" />
          <path d="M20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </Svg>
      ),
    },
    {
      name: 'arrow',
      title: 'Arrow',
      icon: (
        <Svg>
          <line x1="5" y1="19" x2="19" y2="5" />
          <polyline points="9 5 19 5 19 15" />
        </Svg>
      ),
    },
    {
      name: 'box',
      title: 'Box',
      icon: <Svg><rect x="3" y="3" width="18" height="18" rx="1" /></Svg>,
    },
    {
      name: 'circle',
      title: 'Circle',
      icon: <Svg><ellipse cx="12" cy="12" rx="9" ry="9" /></Svg>,
    },
    {
      name: 'text',
      title: 'Text',
      icon: <Svg><path d="M4 6h16M12 6v12M8 18h8" strokeLinecap="round" /></Svg>,
    },
  ];

  // On expand: width opens first, then items fade in.
  // On collapse: items fade out first, then width closes.
  const expandingStyle = feedbackMode
    ? {
        maxWidth: '520px',
        opacity: 1,
        transition: 'max-width 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.22s ease 0.2s',
        pointerEvents: 'auto',
      }
    : {
        maxWidth: '0px',
        opacity: 0,
        transition: 'opacity 0.14s ease, max-width 0.32s cubic-bezier(0.4,0,0.2,1) 0.08s',
        pointerEvents: 'none',
      };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        bottom: 28,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        background: INK,
        padding: '6px 8px',
        borderRadius: 2,
        boxShadow: '0 4px 24px rgba(0,0,0,0.22)',
      }}
    >
      {/* Expanding section — tools + actions + save */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          overflow: 'hidden',
          flexShrink: 0,
          ...expandingStyle,
        }}
      >
        {tools.map((t) => (
          <ToolBtn
            key={t.name}
            name={t.name}
            title={t.title}
            active={activeTool === t.name}
            onClick={onToolChange}
          >
            {t.icon}
          </ToolBtn>
        ))}

        <Sep />

        <ToolBtn name="undo" title="Undo" active={false} onClick={onUndo}>
          <Svg>
            <polyline points="9 14 4 9 9 4" />
            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
          </Svg>
        </ToolBtn>

        <ToolBtn name="redo" title="Redo" active={false} onClick={onRedo}>
          <Svg>
            <polyline points="15 14 20 9 15 4" />
            <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
          </Svg>
        </ToolBtn>

        <ToolBtn name="clear" title="Clear all" active={false} onClick={onClear}>
          <Svg>
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14H6L5 6" />
            <path d="M10 11v6M14 11v6" />
          </Svg>
        </ToolBtn>

        <Sep />

        {/* Save */}
        <button
          onClick={onSave}
          disabled={isSaving}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            height: 34,
            padding: '0 12px',
            background: BLUE,
            color: '#F7F4EF',
            border: 'none',
            cursor: isSaving ? 'default' : 'pointer',
            borderRadius: 2,
            fontFamily: 'monospace',
            fontSize: 9,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            opacity: isSaving ? 0.6 : 1,
            transition: 'opacity 0.15s',
          }}
        >
          <Svg size={12}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="12" cy="12" r="3" />
          </Svg>
          Save
        </button>

        {/* Small gap before trigger */}
        <div style={{ width: 6, flexShrink: 0 }} />
      </div>

      {/* Trigger — always visible, morphs between Feedback and Exit */}
      <button
        onClick={feedbackMode ? onExit : onEnter}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          height: 34,
          padding: '0 12px',
          background: feedbackMode ? TERRA : 'transparent',
          color: feedbackMode ? CREAM : INACTIVE_COLOR,
          border: 'none',
          cursor: 'pointer',
          borderRadius: 2,
          fontFamily: 'monospace',
          fontSize: 9,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          transition: 'background 0.22s ease, color 0.22s ease',
        }}
      >
        {feedbackMode ? (
          <>
            <Svg size={12}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </Svg>
            Exit
          </>
        ) : (
          <>
            <Svg size={12}>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </Svg>
            Feedback
            <span
              style={{
                color: 'rgba(238,234,227,0.28)',
                fontSize: 16,
                letterSpacing: '0.06em',
                marginLeft: 2,
              }}
            >
              ⌘K
            </span>
          </>
        )}
      </button>
    </div>
  );
}
