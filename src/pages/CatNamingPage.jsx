import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import cats from '../data/cats';
import styles from './CatNamingPage.module.css';

export default function CatNamingPage() {
  const navigate = useNavigate();
  const { selectedCatId, nameCat } = useUser();
  const [nickname, setNickname] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const cat = cats.find((c) => c.id === selectedCatId);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname.trim()) return;
    nameCat(nickname.trim());
    setShowMessage(true);
    setTimeout(() => navigate('/main'), 2000);
  };

  return (
    <div className={`${styles.container} fade-enter`}>
      {cat && (
        <div className={styles.imageFrame}>
          <img src={cat.image} alt={cat.name} className={styles.catImage} />
        </div>
      )}

      {!showMessage ? (
        <form className={styles.formCard} onSubmit={handleSubmit}>
          <p className={styles.prompt}>给你的小猫取个名字吧！</p>
          <input
            type="text"
            className={styles.input}
            placeholder={cat?.name || '输入名字'}
            maxLength={20}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            autoFocus
          />
          <button type="submit" className={styles.button} disabled={!nickname.trim()}>
            确定
          </button>
        </form>
      ) : (
        <p className={styles.journeyMessage}>开启你的学习之旅</p>
      )}
    </div>
  );
}
