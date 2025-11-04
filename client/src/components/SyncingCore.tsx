import styles from './SyncingCore.module.css';

/**
 * SyncingCore Component
 * Displays an animated "Syncing Core..." loading animation
 * Props:
 *   - visible: boolean - Whether to show the animation
 *   - message: string - Custom message (default: "Syncing Core...")
 */
interface SyncingCoreProps {
  visible?: boolean;
  message?: string;
}

export default function SyncingCore({
  visible = true,
  message = 'Syncing Core...',
}: SyncingCoreProps) {
  if (!visible) return null;

  return (
    <div className={styles.syncingContainer}>
      <div className={styles.syncingCore}>
        {/* Outer rotating ring */}
        <div className={styles.ring} />
        
        {/* Middle pulsing ring */}
        <div className={styles.pulseRing} />
        
        {/* Inner core */}
        <div className={styles.core} />
        
        {/* Glow effect */}
        <div className={styles.glow} />
      </div>
      
      <p className={styles.message}>{message}</p>
      
      {/* Animated dots */}
      <div className={styles.dots}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
    </div>
  );
}
