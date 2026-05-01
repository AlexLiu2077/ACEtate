import { useState } from 'react';
import BottomNav from '../components/BottomNav';
import WordMemoryTab from '../components/tabs/WordMemoryTab';
import MyCatTab from '../components/tabs/MyCatTab';
import UserStatusTab from '../components/tabs/UserStatusTab';
import styles from './MainPage.module.css';

export default function MainPage() {
  const [activeTab, setActiveTab] = useState('words');
  const [isQuizActive, setIsQuizActive] = useState(false);
  const pageClassName = `${styles.page} ${activeTab === 'cat' ? styles.catPage : ''}`;

  return (
    <div className={pageClassName}>
      {activeTab === 'words' && <WordMemoryTab onQuizActiveChange={setIsQuizActive} />}
      {activeTab === 'cat' && <MyCatTab />}
      {activeTab === 'profile' && <UserStatusTab />}
      {!isQuizActive && <BottomNav active={activeTab} onChange={setActiveTab} />}
    </div>
  );
}
