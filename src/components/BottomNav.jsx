import styles from './BottomNav.module.css';

const PawIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 8.5C13.5 8.5 14.5 7.5 14.5 6C14.5 4.5 13.5 3.5 12 3.5C10.5 3.5 9.5 4.5 9.5 6C9.5 7.5 10.5 8.5 12 8.5ZM7.5 10C8.5 10 9.5 9 9.5 7.5C9.5 6 8.5 5 7.5 5C6.5 5 5.5 6 5.5 7.5C5.5 9 6.5 10 7.5 10ZM16.5 10C17.5 10 18.5 9 18.5 7.5C18.5 6 17.5 5 16.5 5C15.5 5 14.5 6 14.5 7.5C14.5 9 15.5 10 16.5 10ZM12 11C9.5 11 7 12 6.5 14.5C6 17 8 19 12 19C16 19 18 17 17.5 14.5C17 12 14.5 11 12 11Z" />
  </svg>
);

const CapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const tabs = [
  { key: 'cat', label: '我的猫', icon: <PawIcon /> },
  { key: 'words', label: '单词记忆', icon: <CapIcon /> },
  { key: 'profile', label: '我的', icon: <UserIcon /> },
];

export default function BottomNav({ active, onChange }) {
  return (
    <nav className={styles.nav}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`${styles.tab} ${active === tab.key ? styles.tabActive : ''}`}
          onClick={() => onChange(tab.key)}
        >
          <span className={styles.icon}>{tab.icon}</span>
          <span className={styles.label}>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
