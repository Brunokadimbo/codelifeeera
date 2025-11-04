import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import SyncingCore from '@/components/SyncingCore';
import styles from './ZionEra.module.css';
import '../styles/zionera-theme.css';

/**
 * ZionEra Page
 * Alternative dashboard for ZionEraX with heart-themed neon design
 * Features heart-centered branding and pink/magenta color scheme
 */
export default function ZionEra() {
  const [dateTime, setDateTime] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
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
    <div className={`${styles.zioneraDashboard} zionera-theme`}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoSection}>
            <img
              src="/assets/zionera-logo.jpg"
              alt="ZionEraX Logo"
              className={styles.headerLogo}
            />
            <div className={styles.brandInfo}>
              <h1 className={styles.brandName}>ZionEraX</h1>
              <p className={styles.tagline}>The Heart of Connection</p>
            </div>
          </div>

          <div className={styles.headerRight}>
            <ThemeToggle />
            <button
              className={styles.backButton}
              onClick={() => (window.location.href = '/')}
              title="Back to CodeLifeEra"
            >
              ← Back to CodeLifeEra
            </button>
            <span className={styles.dateTime}>{dateTime}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          {/* Welcome Section */}
          <section className={styles.welcomeSection}>
            <div className={styles.heartIcon}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h2 className={styles.welcomeTitle}>Welcome to ZionEraX</h2>
            <p className={styles.welcomeSubtitle}>
              Experience the future of connected consciousness through the power of the heart
            </p>
          </section>

          {/* Features Grid */}
          <section className={styles.featuresSection}>
            <h3 className={styles.sectionTitle}>Core Features</h3>
            <div className={styles.featureGrid}>
              {[
                {
                  title: 'Heart Connection',
                  description: 'Connect with the pulse of the network',
                  icon: '💓',
                  color: 'pink',
                },
                {
                  title: 'Love Protocol',
                  description: 'Advanced encryption with emotional intelligence',
                  icon: '🔐',
                  color: 'magenta',
                },
                {
                  title: 'Soul Sync',
                  description: 'Real-time synchronization across dimensions',
                  icon: '✨',
                  color: 'blue',
                },
                {
                  title: 'Aura Analytics',
                  description: 'Visualize your digital presence and impact',
                  icon: '📊',
                  color: 'pink',
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className={`${styles.featureCard} ${styles[`color-${feature.color}`]}`}
                >
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureDesc}>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Syncing Core Demo */}
          <section className={styles.syncingSection}>
            <h3 className={styles.sectionTitle}>System Synchronization</h3>
            <SyncingCore visible={true} message="Syncing Core..." />
          </section>

          {/* Heart Activity Chart */}
          <section className={styles.activitySection}>
            <h3 className={styles.sectionTitle}>Heart Activity</h3>
            <div className={styles.chartContainer}>
              <svg
                className={styles.heartChart}
                viewBox="0 0 900 250"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient
                    id="heartGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#FF1493" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#FF00FF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0099FF" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="heartGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Grid */}
                <g opacity="0.1">
                  <line x1="20" y1="50" x2="880" y2="50" stroke="#FF1493" />
                  <line x1="20" y1="100" x2="880" y2="100" stroke="#FF1493" />
                  <line x1="20" y1="150" x2="880" y2="150" stroke="#FF1493" />
                  <line x1="20" y1="200" x2="880" y2="200" stroke="#FF1493" />
                </g>

                {/* Heartbeat Line */}
                <path
                  d="M 20 125 L 100 125 L 120 100 L 140 150 L 160 125 L 300 125 L 350 50 L 400 200 L 450 75 L 500 150 L 550 100 L 600 125 L 700 125 L 750 90 L 800 160 L 880 125"
                  fill="none"
                  stroke="url(#heartGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#heartGlow)"
                  className={styles.heartbeatLine}
                />

                {/* Pulse Points */}
                {[100, 350, 450, 550, 750].map((x, idx) => (
                  <circle
                    key={idx}
                    cx={x}
                    cy="125"
                    r="5"
                    fill="#FF1493"
                    stroke="#FF00FF"
                    strokeWidth="2"
                    opacity="0.8"
                  />
                ))}
              </svg>
            </div>
          </section>

          {/* Status Cards */}
          <section className={styles.statusSection}>
            <h3 className={styles.sectionTitle}>System Status</h3>
            <div className={styles.statusGrid}>
              <div className={`${styles.statusCard} ${styles['status-active']}`}>
                <div className={styles.statusValue}>99.9%</div>
                <div className={styles.statusLabel}>Heart Rate</div>
              </div>
              <div className={`${styles.statusCard} ${styles['status-active']}`}>
                <div className={styles.statusValue}>∞</div>
                <div className={styles.statusLabel}>Connection Strength</div>
              </div>
              <div className={`${styles.statusCard} ${styles['status-active']}`}>
                <div className={styles.statusValue}>24/7</div>
                <div className={styles.statusLabel}>Uptime</div>
              </div>
              <div className={`${styles.statusCard} ${styles['status-active']}`}>
                <div className={styles.statusValue}>💖</div>
                <div className={styles.statusLabel}>Love Protocol</div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span className={styles.footerText}>
            ZionEraX v1.0 – The Heart of Connection
          </span>
          <span className={styles.footerDate}>{dateTime}</span>
        </div>
      </footer>
    </div>
  );
}
