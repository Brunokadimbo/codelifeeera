import styles from './EngineSlots.module.css';

/**
 * EngineSlots Component
 * Placeholder for engine slots feature - "Coming soon"
 * Props: None
 */
export default function EngineSlots() {
  return (
    <div className={styles.engineSlots}>
      <h2 className={styles.title}>Engine Slots</h2>
      <div className={styles.placeholder}>
        <div className={styles.loadingAnimation}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
        <p className={styles.comingSoon}>Coming soon</p>
      </div>
    </div>
  );
}
