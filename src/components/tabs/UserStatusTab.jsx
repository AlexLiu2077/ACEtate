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
  const [showCredits, setShowCredits] = useState(false);
  const [showContact, setShowContact] = useState(false);
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
          <span className={styles.logoText}>Chemicat</span>
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
          </div>
        </div>
        <h2 className={styles.userName}>{username || '用户名'}</h2>
      </div>

      {/* Companion Card */}
      <div className={styles.companionCard}>
        <div className={styles.cardHeader}>
          <span className={styles.pawIcon}>🐾</span>
          <span className={styles.cardTitle}>我的伙伴</span>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.catAvatar}>
            {cat ? <img src={cat.image} alt={catNickname} className={styles.catImg} /> : <span className={styles.defaultCatIcon}>🐱</span>}
          </div>
          <div className={styles.catInfo}>
            <div className={styles.catName}>{catNickname || '猫咪教授'}</div>
            <div className={styles.totalFood}>
              <span className={styles.tagIcon}>🏷️</span>
              总猫粮: {catFood}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={styles.actionList}>
        <button className={styles.actionBtn} onClick={() => setShowCredits(true)}>
          <span className={styles.btnIcon}>🙏</span>
          <span className={styles.btnText}>致谢</span>
          <span className={styles.btnArrow}>›</span>
        </button>
        <button className={styles.actionBtn} onClick={() => setShowContact(true)}>
          <span className={styles.btnIcon}>📧</span>
          <span className={styles.btnText}>联系</span>
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

      {showCredits && (
        <div className={styles.modalOverlay} onClick={() => setShowCredits(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h3 className={styles.modalTitle}>致谢</h3>
            <p className={styles.modalText}>感谢你们参与内测并提供了宝贵的反馈与意见，排名不分先后：</p>
            <div style={{ marginTop: '12px' }}>
              {['Sherlock Zeng', 'Justin Fan', 'Grase Guo', 'Joshua Huang', 'Akira Xu', 'Arvin Yu', 'YC Zhao', 'YM Zhang'].map(name => (
                <p key={name} className={styles.modalText}>{name}</p>
              ))}
            </div>
            <button className={styles.modalBtn} onClick={() => setShowCredits(false)}>确定</button>
          </div>
        </div>
      )}

      {showContact && (
        <div className={styles.modalOverlay} onClick={() => setShowContact(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <h3 className={styles.modalTitle}>联系</h3>
            <p className={styles.modalText}>12412625@mail.sustech.edu.cn</p>
            <button className={styles.modalBtn} onClick={() => setShowContact(false)}>确定</button>
          </div>
        </div>
      )}
    </div>
  );
}
