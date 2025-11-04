import { useState, useEffect } from 'react';
import styles from './Footer.module.css';

/**
 * Footer Component
 * Displays left text "CodeLifeEra Machine v0.1 – The Brain of the Future"
 * and right side shows client-side date/time updated every second.
 * Props: None
 */
export default function Footer() {
  const [dateTime, setDateTime] = useState<string>('');

  useEffect(() => {
    // Set initial date/time
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
      const formattedTime = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setDateTime(`${formattedDate}  ${formattedTime}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.leftSection}>
          <span className={styles.footerText}>
            CodeLifeEra Machine v0.1 – The Brain of the Future
          </span>
        </div>
        <div className={styles.rightSection}>
          <span className={styles.dateTime}>{dateTime}</span>
        </div>
      </div>
    </footer>
  );
}
