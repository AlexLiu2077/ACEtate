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
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.logoGroup}>
          <span className={styles.logoIcon}>🧪</span>
          <span className={styles.logoText}>ACEtate</span>
        </div>
        <div className={styles.foodBadge}>
          <span className={styles.foodAmount}>{catFood}</span>
          <span className={styles.foodIcon}>🍘</span>
        </div>
      </div>

      {/* User Info */}
      <div className={styles.userInfo}>
        <div className={styles.avatarWrap}>
          <div className={styles.avatarInner}>
            <span className={styles.avatarLetter}>{username ? username[0].toUpperCase() : 'U'}</span>
            <span className={styles.avatarSub}>CHEMICAT</span>
          </div>
        </div>
        <h2 className={styles.userName}>{username || 'User Name'}</h2>
        <p className={styles.userTitle}>Lifelong Learner</p>
      </div>

      {/* Companion Card */}
      <div className={styles.companionCard}>
        <div className={styles.cardHeader}>
          <span className={styles.pawIcon}>🐾</span>
          <span className={styles.cardTitle}>My Companion</span>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.catAvatar}>
            {cat ? <img src={cat.image} alt={catNickname} className={styles.catImg} /> : <span className={styles.defaultCatIcon}>🐱</span>}
          </div>
          <div className={styles.catInfo}>
            <div className={styles.catName}>{catNickname || 'Professor Whiskers'}</div>
            <div className={styles.totalFood}>
              <span className={styles.tagIcon}>🏷️</span>
              TOTAL FOOD: {catFood}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionList}>
        <button className={styles.actionBtn}>
          <span className={styles.btnIcon}>⚙️</span>
          <span className={styles.btnText}>Account Settings</span>
          <span className={styles.btnArrow}>›</span>
        </button>
        <button className={styles.actionBtn}>
          <span className={styles.btnIcon}>❔</span>
          <span className={styles.btnText}>Help & Support</span>
          <span className={styles.btnArrow}>›</span>
        </button>
      </div>

      <button className={styles.logoutBtn} onClick={() => setShowConfirm(true)}>
        <span className={styles.logoutIcon}>🗑️</span>
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
