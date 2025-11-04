import { useEffect, useRef } from 'react';
import { brainActivity } from '../data/mock';
import styles from './BrainActivityChart.module.css';

/**
 * BrainActivityChart Component
 * Renders a stylized SVG line chart with mock brain activity data points.
 * Includes animation on mount (line draw animation using stroke-dasharray).
 * Props:
 *   - data: Array of numerical values for the chart (defaults to brainActivity from mock.ts)
 */
interface BrainActivityChartProps {
  data?: number[];
}

export default function BrainActivityChart({ data = brainActivity }: BrainActivityChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    // Trigger animation on mount
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;
      
      // Trigger animation
      setTimeout(() => {
        if (pathRef.current) {
          pathRef.current.style.transition = 'stroke-dashoffset 2s ease-in-out';
          pathRef.current.style.strokeDashoffset = '0';
        }
      }, 100);
    }
  }, []);

  // Calculate SVG path from data points
  const generatePath = () => {
    const width = 900;
    const height = 250;
    const padding = 20;
    const plotWidth = width - padding * 2;
    const plotHeight = height - padding * 2;

    const minValue = Math.min(...data);
    const maxValue = Math.max(...data);
    const range = maxValue - minValue || 1;

    const points = data.map((value, index) => {
      const x = padding + (index / (data.length - 1)) * plotWidth;
      const y = padding + plotHeight - ((value - minValue) / range) * plotHeight;
      return `${x},${y}`;
    });

    return `M ${points.join(' L ')}`;
  };

  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.title}>Brain Activity</h2>
      <div className={styles.chartWrapper}>
        <svg
          ref={svgRef}
          className={styles.chart}
          viewBox="0 0 900 250"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Brain activity chart"
        >
          {/* Grid lines */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C800FF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#9000FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF007F" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background grid */}
          <g className={styles.grid} opacity="0.1">
            <line x1="20" y1="50" x2="880" y2="50" stroke="#C800FF" />
            <line x1="20" y1="100" x2="880" y2="100" stroke="#C800FF" />
            <line x1="20" y1="150" x2="880" y2="150" stroke="#C800FF" />
            <line x1="20" y1="200" x2="880" y2="200" stroke="#C800FF" />
          </g>

          {/* Main line path */}
          <path
            ref={pathRef}
            d={generatePath()}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            className={styles.line}
          />

          {/* Data points */}
          {data.map((value, index) => {
            const width = 900;
            const height = 250;
            const padding = 20;
            const plotWidth = width - padding * 2;
            const plotHeight = height - padding * 2;
            const minValue = Math.min(...data);
            const maxValue = Math.max(...data);
            const range = maxValue - minValue || 1;

            const x = padding + (index / (data.length - 1)) * plotWidth;
            const y = padding + plotHeight - ((value - minValue) / range) * plotHeight;

            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill="#C800FF"
                stroke="#FF007F"
                strokeWidth="2"
                opacity="0.8"
                className={styles.dataPoint}
              />
            );
          })}
        </svg>
      </div>
      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={styles.legendColor} style={{ background: '#C800FF' }} />
          Activity Level
        </span>
        <span className={styles.legendItem}>
          <span className={styles.legendColor} style={{ background: '#FF007F' }} />
          Peak Activity
        </span>
      </div>
    </div>
  );
}
