import { useState } from 'react';
import styles from './Sidebar.module.css';

/**
 * Sidebar Component
 * Expandable/collapsible navigation sidebar with menu items: Home, Dashboard, Settings, Help Center, Logout.
 * Collapses to hamburger on small screens.
 * Props: None
 */
export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'dashboard', label: 'Dashboard', icon: 'grid' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
    { id: 'help', label: 'Help Center', icon: 'help' },
  ];

  const getIcon = (iconType: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      home: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      grid: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
      settings: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m2.12 2.12l4.24 4.24M1 12h6m6 0h6m-16.78 7.78l4.24-4.24m2.12-2.12l4.24-4.24" />
        </svg>
      ),
      help: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      ),
    };
    return iconMap[iconType] || null;
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className={styles.hamburger}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle sidebar"
        aria-expanded={isMobileOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Sidebar */}
      <aside
        className={`${styles.sidebar} ${isExpanded ? styles.expanded : styles.collapsed} ${
          isMobileOpen ? styles.mobileOpen : ''
        }`}
      >
        {/* Collapse Toggle Button */}
        <button
          className={styles.toggleButton}
          onClick={() => setIsExpanded(!isExpanded)}
          title={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
          aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav className={styles.nav} role="navigation">
          <ul className={styles.menuList}>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={styles.menuItem}
                  title={item.label}
                  aria-label={item.label}
                >
                  <span className={styles.icon}>{getIcon(item.icon)}</span>
                  {isExpanded && <span className={styles.label}>{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <button className={styles.logoutButton} title="Logout" aria-label="Logout">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          {isExpanded && <span>Logout</span>}
        </button>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
