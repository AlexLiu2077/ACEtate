import { useNavigate } from 'react-router-dom';
import styles from './SplashPage.module.css';

export default function SplashPage() {
  const navigate = useNavigate();

  return (
    <div className={`${styles.container} fade-enter`} onClick={() => navigate('/register')}>
      <p className={styles.title}>欢迎使用ACEtate，打开化学学习新天地。</p>
      <p className={styles.hint}>点击任意位置继续</p>
    </div>
  );
}
