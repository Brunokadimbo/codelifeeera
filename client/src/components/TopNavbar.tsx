import { useState } from 'react';
import ProfileDropdown from './ProfileDropdown';
import ThemeToggle from './ThemeToggle';
import styles from './TopNavbar.module.css';

/**
 * TopNavbar Component
 * Main navigation bar with logo, search input, system switcher button, notifications icon, and profile dropdown.
 * Props: None
 */
export default function TopNavbar() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <img
            src="/assets/logo.jpg"
            alt="CodeLifeEra Logo"
            className={styles.logo}
          />
          <span className={styles.brandName}>CodeLifeEra</span>
          <span className={styles.version}>CodeLifera 0.1</span>
        </div>

        {/* Search Section */}
        <div className={styles.searchSection}>
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={styles.searchInput}
            aria-label="Search"
          />
          <svg
            className={styles.searchIcon}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* System Switcher Button */}
          <button
            className={styles.switchButton}
            title="Switch to ZionEraX (Coming Soon)"
            disabled
          >
            <img
              src="/assets/zionera-logo.jpg"
              alt="ZionEraX Logo"
              className={styles.switchLogo}
            />
            <span>Switch to ZionEraX</span>
          </button>

          {/* Notifications Icon */}
          <button
            className={styles.iconButton}
            title="Notifications"
            aria-label="Notifications"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>

          {/* Profile Dropdown */}
          <ProfileDropdown />
        </div>
      </div>
    </nav>
  );
}
