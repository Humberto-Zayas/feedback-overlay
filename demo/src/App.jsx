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
        Pharmaceutical · Consumer Health · Medical Devices · Biotech · OTC Brands · Clinical Trials
      </div>

      {/* Hero */}
      <div style={styles.hero}>
        <div>
          <div style={styles.heroLabel}>Ad Copy — Selected Work</div>
          <h1 style={styles.heroTitle}>
            Words that<br />Move Product.
          </h1>
        </div>
        <div>
          <p style={styles.heroBody}>
            Regulatory-compliant copy that doesn't read like it was written by
            a compliance department. Across pharma, OTC, and consumer health.
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
            Client Campaign Asset
          </div>
        </div>
      </div>

      {/* Featured brands */}
      <div style={styles.section}>
        <div style={styles.sectionLabel}>Featured Brands</div>
        {[
          ['01', 'Meridian Health', 'OTC / Consumer'],
          ['02', 'Vantrel Biomedical', 'Rx / Clinical'],
          ['03', 'Crestline Therapeutics', 'Specialty Pharma'],
          ['04', 'Solara Wellness', 'Consumer Health'],
          ['05', 'Norvik Diagnostics', 'Medical Devices'],
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
        <div style={styles.sectionLabel}>About the Work</div>
        <p style={styles.paragraph}>
          Fifteen years writing for brands that can't afford to get it wrong.
          Every word earns its place — especially when the FDA is reading too.
          Copy that moves product without moving the goalposts on compliance.
        </p>
        <p style={styles.paragraph}>
          From DTC television to patient brochures, from physician detailers to
          digital banner campaigns. The full spectrum of pharmaceutical
          communication, handled with the precision the category demands.
        </p>
        <p style={styles.paragraph}>
          OTC isn't easier — it just has different rules. Consumer-facing
          language that has to work hard in a crowded aisle while staying
          honest about what the product actually does. That's the challenge.
          That's the craft.
        </p>
        <p style={styles.paragraph}>
          Available for project-based freelance engagements. Based in New York,
          open to remote. Turnaround that respects your launch windows.
        </p>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <div>
          <div style={styles.footerHeading}>Brian Kumpf</div>
          <div style={styles.footerBody}>
            Copywriter · Content Strategist<br />
            Available for Freelance<br />
            New York / Remote<br />
            <br />
            briankumpfwrites.com
          </div>
        </div>
        <div style={styles.footerNote}>
          Fifteen years writing for brands that can't afford to get it wrong.
        </div>
      </div>

      <FeedbackOverlay enabled={true} />
    </div>
  );
}
