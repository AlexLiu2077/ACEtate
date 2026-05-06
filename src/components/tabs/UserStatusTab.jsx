import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import cats from '../../data/cats';
import ConfirmDialog from '../ConfirmDialog';
import styles from './UserStatusTab.module.css';

export default function UserStatusTab() {
  const navigate = useNavigate();
  const { username, catNickname, selectedCatId, catFood, resetAll } = useUser();
  const [showConfirm, setShowConfirm] = useState(false);
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

      <button className={styles.logoutBtn} onClick={() => setShowConfirm(true)}>
        账号注销
      </button>

      <ConfirmDialog
        open={showConfirm}
        message="注销账号后，单词收藏和小猫状态将无法找回，是否继续？"
        cancelText="再想想"
        confirmText="继续注销"
        onCancel={() => setShowConfirm(false)}
        onConfirm={handleReset}
      />
    </div>
  );
}
