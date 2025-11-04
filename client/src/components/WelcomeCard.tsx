import styles from './WelcomeCard.module.css';

/**
 * WelcomeCard Component
 * Large greeting card: "Welcome to the Brain of the Future"
 * Props: None
 */
export default function WelcomeCard() {
  return (
    <div className={styles.welcomeCard}>
      <h1 className={styles.heading}>Welcome to<br />the Brain of the Future</h1>
      <p className={styles.subtitle}>
        CodeLifeEra Machine v0.1 - Advanced AI-powered system monitoring and control
      </p>
    </div>
  );
}
