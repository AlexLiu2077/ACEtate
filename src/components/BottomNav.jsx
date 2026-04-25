import styles from './BottomNav.module.css';

const tabs = [
  { key: 'words', label: '单词记忆', icon: '\uD83D\uDCD6' },
  { key: 'cat', label: '我的小猫', icon: '\uD83D\uDC31' },
  { key: 'profile', label: '用户状态', icon: '\uD83D\uDC64' },
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
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
