import './Waveform.css';

interface WaveformProps {
  variant?: 'hero' | 'divider';
  flagAnomaly?: boolean;
}

/**
 * The page's signature element: a signal trace with a flagged anomaly spike,
 * a direct nod to Shreyas's ICS anomaly-detection work (97% accuracy,
 * sub-millisecond inference). Used in the hero as a live readout and as a
 * quiet section divider elsewhere.
 */
export default function Waveform({ variant = 'divider', flagAnomaly = true }: WaveformProps) {
  const height = variant === 'hero' ? 160 : 64;
  return (
    <svg
      className={`waveform waveform--${variant}`}
      viewBox={`0 0 1000 ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1={height / 2} x2="1000" y2={height / 2} className="waveform__baseline" />
      <path
        className="waveform__trace"
        d={
          variant === 'hero'
            ? `M0,${height / 2} L60,${height / 2} 
               C90,${height / 2} 100,${height * 0.2} 120,${height * 0.2}
               C140,${height * 0.2} 150,${height * 0.85} 170,${height * 0.85}
               C190,${height * 0.85} 200,${height / 2} 230,${height / 2}
               L330,${height / 2}
               C350,${height / 2} 355,${height * 0.35} 365,${height * 0.35}
               C375,${height * 0.35} 380,${height * 0.65} 390,${height * 0.65}
               C400,${height * 0.65} 405,${height / 2} 420,${height / 2}
               L520,${height / 2}
               L528,${height * 0.06} L536,${height * 0.94} L544,${height / 2}
               L620,${height / 2}
               C645,${height / 2} 650,${height * 0.3} 668,${height * 0.3}
               C686,${height * 0.3} 690,${height * 0.7} 710,${height * 0.7}
               C725,${height * 0.7} 730,${height / 2} 750,${height / 2}
               L1000,${height / 2}`
            : `M0,${height / 2} L${1000 * 0.42},${height / 2}
               L${1000 * 0.44},${height * 0.15} L${1000 * 0.46},${height * 0.85} L${1000 * 0.48},${height / 2}
               L1000,${height / 2}`
        }
      />
      {flagAnomaly && (
        <g className="waveform__flag" transform={variant === 'hero' ? 'translate(532, 6)' : 'translate(460, 6)'}>
          <line x1="0" y1="0" x2="0" y2={height - 12} className="waveform__flag-line" />
          <rect x="-34" y="-18" width="68" height="18" rx="2" className="waveform__flag-tag" />
          <text x="0" y="-5" textAnchor="middle" className="waveform__flag-text">ANOMALY</text>
        </g>
      )}
    </svg>
  );
}
