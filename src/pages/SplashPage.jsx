import { useNavigate } from 'react-router-dom';
import styles from './SplashPage.module.css';

export default function SplashPage() {
  const navigate = useNavigate();

  return (
    <div className={`${styles.container} fade-enter`} onClick={() => navigate('/register')}>
      <img src="/assets/icon.png" alt="ACEtate" className={styles.logo} />
      <p className={styles.title}>欢迎来到ACEtate，让你的化学学习更有趣</p>
      <p className={styles.hint}>点击任意位置继续</p>
    </div>
  );
}
