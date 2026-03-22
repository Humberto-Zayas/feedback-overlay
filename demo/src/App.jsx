import React from 'react';
import { FeedbackOverlay } from 'feedback-overlay';

const styles = {
  body: {
    fontFamily: 'Georgia, serif',
    color: '#1C1C22',
    background: '#EEEAE3',
    margin: 0,
    padding: 0,
  },
  marquee: {
    background: '#F7F4EF',
    borderBottom: '1px solid rgba(28,28,34,0.08)',
    padding: '12px 48px',
    fontSize: 11,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'rgba(28,28,34,0.4)',
  },
  hero: {
    padding: '72px 48px 64px',
    borderBottom: '1px solid rgba(28,28,34,0.07)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 48,
    alignItems: 'end',
  },
  heroLabel: {
    fontFamily: 'monospace',
    fontSize: 9,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: '#B54A2A',
    marginBottom: 14,
  },
  heroTitle: {
    fontFamily: 'sans-serif',
    fontSize: 'clamp(48px, 7vw, 84px)',
    fontWeight: 700,
    lineHeight: 0.92,
    letterSpacing: '-0.01em',
    color: '#1C1C22',
    margin: 0,
  },
  heroBody: {
    fontFamily: 'Georgia, serif',
    fontStyle: 'italic',
    fontSize: 15,
    lineHeight: 1.8,
    color: 'rgba(28,28,34,0.65)',
    marginBottom: 24,
  },
  section: {
    padding: '64px 48px',
    borderBottom: '1px solid rgba(28,28,34,0.07)',
  },
  sectionLabel: {
    fontFamily: 'monospace',
    fontSize: 9,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: '#2B4FC7',
    marginBottom: 36,
  },
  row: {
    display: 'flex',
    alignItems: 'baseline',
    gap: 20,
    padding: '16px 0',
    borderTop: '1px solid rgba(28,28,34,0.07)',
  },
  rowNum: {
    fontFamily: 'monospace',
    fontSize: 10,
    color: '#2B4FC7',
    opacity: 0.5,
    width: 22,
  },
  rowName: {
    fontFamily: 'sans-serif',
    fontSize: 22,
    fontWeight: 600,
    color: '#1C1C22',
    flex: 1,
  },
  rowCat: {
    fontFamily: 'monospace',
    fontSize: 9,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'rgba(28,28,34,0.35)',
  },
  longText: {
    padding: '64px 48px',
    borderBottom: '1px solid rgba(28,28,34,0.07)',
    maxWidth: 680,
  },
  paragraph: {
    fontFamily: 'Georgia, serif',
    fontSize: 16,
    lineHeight: 1.9,
    color: 'rgba(28,28,34,0.75)',
    marginBottom: 24,
  },
  footer: {
    background: '#1C1C22',
    padding: '56px 48px 48px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 48,
  },
  footerHeading: {
    fontFamily: 'Georgia, serif',
    fontSize: 28,
    fontWeight: 700,
    color: '#F7F4EF',
    marginBottom: 20,
  },
  footerBody: {
    fontFamily: 'monospace',
    fontSize: 11,
    lineHeight: 1.9,
    color: 'rgba(238,234,227,0.45)',
  },
  footerNote: {
    fontFamily: 'Georgia, serif',
    fontStyle: 'italic',
    fontSize: 14,
    lineHeight: 1.75,
    color: 'rgba(238,234,227,0.55)',
    alignSelf: 'flex-end',
  },
};

export default function App() {
  return (
    <div style={styles.body}>
      {/* Marquee bar */}
      <div style={styles.marquee}>
        Branding · Editorial · Digital · Print · Motion · Campaigns
      </div>

      {/* Hero */}
      <div style={styles.hero}>
        <div>
          <div style={styles.heroLabel}>Portfolio — Selected Work</div>
          <h1 style={styles.heroTitle}>
            Design that<br />Gets Noticed.
          </h1>
        </div>
        <div>
          <p style={styles.heroBody}>
            Placeholder content for a staging environment. Use the feedback
            tool below to annotate, mark up, and capture notes directly on
            the page.
          </p>
          <div
            style={{
              background: '#E4DFD7',
              border: '1px solid rgba(28,28,34,0.1)',
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'monospace',
              fontSize: 8,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(28,28,34,0.25)',
            }}
          >
            Image Placeholder
          </div>
        </div>
      </div>

      {/* Featured projects */}
      <div style={styles.section}>
        <div style={styles.sectionLabel}>Featured Projects</div>
        {[
          ['01', 'Project Alpha', 'Brand Identity'],
          ['02', 'Project Beta', 'Web / Digital'],
          ['03', 'Project Gamma', 'Editorial'],
          ['04', 'Project Delta', 'Packaging'],
          ['05', 'Project Epsilon', 'Campaign'],
        ].map(([num, name, cat]) => (
          <div key={num} style={styles.row}>
            <span style={styles.rowNum}>{num}</span>
            <span style={styles.rowName}>{name}</span>
            <span style={styles.rowCat}>{cat}</span>
          </div>
        ))}
      </div>

      {/* Long text section for scroll testing */}
      <div style={styles.longText}>
        <div style={styles.sectionLabel}>About</div>
        <p style={styles.paragraph}>
          This is a placeholder page used to demonstrate the feedback overlay
          tool. It includes enough layout variety — headlines, lists, body
          copy, a footer — to test annotations across different page elements.
        </p>
        <p style={styles.paragraph}>
          Press <strong>Cmd+K</strong> (or click the Feedback button at the
          bottom of the screen) to enter feedback mode. Draw, add arrows,
          drop text, or highlight areas with boxes and circles.
        </p>
        <p style={styles.paragraph}>
          When you're done, hit <strong>Save</strong> to download a merged
          screenshot with your annotations baked in. Share it with your team
          however you like — no account or upload required.
        </p>
        <p style={styles.paragraph}>
          Press <strong>Esc</strong> to exit feedback mode without saving.
          All annotations are cleared when you exit.
        </p>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <div>
          <div style={styles.footerHeading}>Your Name Here</div>
          <div style={styles.footerBody}>
            Designer · Developer · Strategist<br />
            Available for Projects<br />
            Location / Remote<br />
            <br />
            yourwebsite.com
          </div>
        </div>
        <div style={styles.footerNote}>
          Placeholder footer content for layout and annotation testing.
        </div>
      </div>

      <FeedbackOverlay enabled={true} />
    </div>
  );
}
