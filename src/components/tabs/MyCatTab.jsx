import { useMemo, useState } from 'react';
import { useUser } from '../../context/UserContext';
import cats from '../../data/cats';
import styles from './MyCatTab.module.css';

export default function MyCatTab() {
  const {
    selectedCatId,
    catNickname,
    catFood,
    satiety,
    intimacy,
    feedCat,
    petCat,
  } = useUser();
  const [message, setMessage] = useState('');
  const [interaction, setInteraction] = useState(null);
  const cat = cats.find((c) => c.id === selectedCatId);

  const videoState = useMemo(() => {
    if (interaction === 'eat') return 'eat';
    if (interaction === 'pet') return 'pet';
    if (satiety < 40) return 'hungry';
    if (intimacy >= 80) return 'close';
    return 'happy';
  }, [interaction, intimacy, satiety]);

  const videoSrc = cat ? `/assets/videos/${cat.id}_${videoState}.mp4` : '';

  if (!cat) return null;

  const handleFeed = () => {
    if (catFood < 3) {
      setMessage('猫粮不足，需要 3 份猫粮');
      return;
    }

    if (satiety >= 100) {
      setMessage('已经吃饱啦');
      return;
    }

    feedCat();
    setInteraction('eat');
    setMessage('投喂成功，饱食度 +1');
  };

  const handlePet = () => {
    const success = petCat();
    setInteraction('pet');
    setMessage(success ? '它很开心，亲密度 +1' : '它蹭了蹭你，但这次亲密度没有变化');
  };

  return (
    <div className={styles.container}>
      <div className={styles.videoFrame}>
        <video
          key={videoSrc}
          className={styles.catVideo}
          src={videoSrc}
          poster={cat.image}
          autoPlay
          muted
          playsInline
          loop={!interaction}
          onEnded={() => setInteraction(null)}
        />
      </div>
      <h2 className={styles.nickname}>{catNickname}</h2>
      <div className={styles.statusCard}>
        <StatusBar label="🍚 饱食度" value={satiety} max={100} />
        <StatusBar label="💗 亲密度" value={intimacy} max={100} />
        <div className={styles.foodPill}>🍘 猫粮 {catFood}</div>
      </div>
      <div className={styles.actionRow}>
        <button className={styles.actionBtn} onClick={handleFeed}>
          🍽️ 投喂
        </button>
        <button className={styles.actionBtn} onClick={handlePet}>
          🤚 抚摸
        </button>
      </div>
      {message && <p className={styles.message}>{message}</p>}
      <div className={styles.infoCard}>
        <p className={styles.originalName}>原名：{cat.name}</p>
        <p className={styles.desc}>{cat.description}</p>
      </div>
    </div>
  );
}

function StatusBar({ label, value, max }) {
  const percent = Math.min(100, Math.round((value / max) * 100));

  return (
    <div className={styles.statusRow}>
      <div className={styles.statusLabelRow}>
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className={styles.statusTrack}>
        <div className={styles.statusFill} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
