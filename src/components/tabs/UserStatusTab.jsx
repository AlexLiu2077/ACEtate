import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import cats from '../../data/cats';
import styles from './UserStatusTab.module.css';

export default function UserStatusTab() {
  const navigate = useNavigate();
  const { username, catNickname, selectedCatId, catFood, resetAll } = useUser();
  const cat = cats.find((c) => c.id === selectedCatId);

  const handleReset = () => {
    resetAll();
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        {username ? username[0].toUpperCase() : '?'}
      </div>

      <div className={styles.card}>
        <div className={styles.row}>
          <span className={styles.label}>用户名</span>
          <span className={styles.value}>{username}</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.row}>
          <span className={styles.label}>学习伙伴</span>
          <span className={styles.value}>
            {cat && (
              <img src={cat.image} alt={catNickname} className={styles.catThumb} />
            )}
            {catNickname}
          </span>
        </div>
        <div className={styles.divider} />
        <div className={styles.row}>
          <span className={styles.label}>🍘 猫粮</span>
          <span className={styles.value}>{catFood}</span>
        </div>
      </div>

      <button className={styles.logoutBtn} onClick={handleReset}>
        重置数据
      </button>
    </div>
  );
}
