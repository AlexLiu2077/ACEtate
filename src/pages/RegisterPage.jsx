import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import styles from './RegisterPage.module.css';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { setEmail, setUsername } = useUser();
  const [step, setStep] = useState(1);
  const [emailVal, setEmailVal] = useState('');
  const [usernameVal, setUsernameVal] = useState('');

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!isEmailValid) return;
    setEmail(emailVal);
    setStep(2);
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (!usernameVal.trim()) return;
    setUsername(usernameVal.trim());
    navigate('/welcome');
  };

  return (
    <div className={`${styles.container} fade-enter`}>
      <img src="/assets/icon.png" alt="ACEtate" className={styles.logoSmall} />

      {step === 1 && (
        <form className={styles.stepWrapper} onSubmit={handleEmailSubmit}>
          <h2 className={styles.heading}>请输入你的邮箱</h2>
          <input
            type="email"
            className={styles.input}
            placeholder="your@email.com"
            value={emailVal}
            onChange={(e) => setEmailVal(e.target.value)}
            autoFocus
          />
          <button type="submit" className={styles.button} disabled={!isEmailValid}>
            下一步
          </button>
        </form>
      )}

      {step === 2 && (
        <form className={`${styles.stepWrapper} fade-enter`} onSubmit={handleUsernameSubmit}>
          <h2 className={styles.heading}>请输入你的用户名</h2>
          <input
            type="text"
            className={styles.input}
            placeholder="你的名字"
            maxLength={20}
            value={usernameVal}
            onChange={(e) => setUsernameVal(e.target.value)}
            autoFocus
          />
          <button type="submit" className={styles.button} disabled={!usernameVal.trim()}>
            完成
          </button>
        </form>
      )}
    </div>
  );
}
