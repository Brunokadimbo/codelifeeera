import { activeEngines, systemHealth } from '../data/mock';
import styles from './OverviewCards.module.css';

/**
 * OverviewCards Component
 * 4 cards laid out horizontally (wrap on small screens):
 * - Active Engines (with count)
 * - System Health (with status)
 * - Developer Log (with view entries CTA)
 * - AI Assistant (placeholder, coming soon)
 * Props: None
 */
export default function OverviewCards() {
  const cards = [
    {
      id: 'engines',
      title: 'Active Engines',
      icon: 'brain',
      value: activeEngines.toString(),
      color: 'purple',
    },
    {
      id: 'health',
      title: 'System Health',
      icon: 'gear',
      value: systemHealth,
      color: 'pink',
    },
    {
      id: 'log',
      title: 'Developer Log',
      icon: 'document',
      value: 'View entries',
      cta: true,
      color: 'orange',
    },
    {
      id: 'ai',
      title: 'AI Assistant',
      icon: 'smile',
      value: 'Coming soon',
      color: 'purple',
    },
  ];

  const getIcon = (iconType: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      brain: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 3a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3M9 3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M9 3h6M9 9h6M9 15h6" />
        </svg>
      ),
      gear: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m2.12 2.12l4.24 4.24M1 12h6m6 0h6m-16.78 7.78l4.24-4.24m2.12-2.12l4.24-4.24" />
        </svg>
      ),
      document: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <polyline points="13 2 13 9 20 9" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
      ),
      smile: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
    };
    return iconMap[iconType] || null;
  };

  return (
    <div className={styles.overviewCards}>
      {cards.map((card) => (
        <div
          key={card.id}
          className={`${styles.card} ${styles[`color-${card.color}`]}`}
        >
          <div className={styles.iconContainer}>
            {getIcon(card.icon)}
          </div>
          <h3 className={styles.title}>{card.title}</h3>
          {card.cta ? (
            <button className={styles.ctaButton}>{card.value}</button>
          ) : (
            <p className={styles.value}>{card.value}</p>
          )}
        </div>
      ))}
    </div>
  );
}
