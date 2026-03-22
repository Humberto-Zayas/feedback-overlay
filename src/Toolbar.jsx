import React, { useState } from 'react';

const INK = '#1C1C22';
const ACTIVE_BG = 'rgba(238,234,227,0.12)';
const ACTIVE_COLOR = '#F7F4EF';
const INACTIVE_COLOR = 'rgba(238,234,227,0.5)';

function ToolBtn({ name, active, onClick, title, children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      {hovered && (
        <div
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 8px)',
            left: '50%',
            transform: 'translateX(-50%)',
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
          }}
        >
          {title}
        </div>
      )}
      <button
        onClick={() => onClick(name)}
        onMouseEnter={() => setHovered(true)}
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

function Svg({ children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
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
      }}
    />
  );
}

export function Toolbar({ activeTool, onToolChange, onUndo, onRedo, onClear }) {
  const tools = [
    {
      name: 'select',
      title: 'Select',
      icon: (
        <Svg>
          <path d="M5 3l14 9-7 1-4 7z" />
        </Svg>
      ),
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
      icon: (
        <Svg>
          <rect x="3" y="3" width="18" height="18" rx="1" />
        </Svg>
      ),
    },
    {
      name: 'circle',
      title: 'Circle',
      icon: (
        <Svg>
          <ellipse cx="12" cy="12" rx="9" ry="9" />
        </Svg>
      ),
    },
    {
      name: 'text',
      title: 'Text',
      icon: (
        <Svg>
          <path d="M4 6h16M12 6v12M8 18h8" strokeLinecap="round" />
        </Svg>
      ),
    },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 28,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        background: INK,
        padding: '6px 8px',
        borderRadius: 2,
        boxShadow: '0 4px 24px rgba(0,0,0,0.22)',
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

      <span
        style={{
          fontFamily: 'monospace',
          fontSize: 8,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(238,234,227,0.22)',
          padding: '0 6px',
          whiteSpace: 'nowrap',
        }}
      >
        Esc to exit
      </span>
    </div>
  );
}
