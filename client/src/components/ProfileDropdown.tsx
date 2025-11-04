import { useState, useRef, useEffect } from 'react';
import styles from './ProfileDropdown.module.css';

/**
 * ProfileDropdown Component
 * Displays a user profile icon with a dropdown menu containing Profile, Settings, and Logout options.
 * Props: None (UI-only, no functionality required)
 */
export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.profileDropdown} ref={dropdownRef}>
      <button
        className={styles.profileButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        title="User Profile"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu} role="menu" onKeyDown={handleKeyDown}>
          <button className={styles.menuItem} role="menuitem">
            Profile
          </button>
          <button className={styles.menuItem} role="menuitem">
            Settings
          </button>
          <div className={styles.divider} />
          <button className={styles.menuItem} role="menuitem">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
