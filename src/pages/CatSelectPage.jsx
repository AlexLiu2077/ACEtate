import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import cats from '../data/cats';
import CatCard from '../components/CatCard';
import ConfirmDialog from '../components/ConfirmDialog';
import styles from './CatSelectPage.module.css';

export default function CatSelectPage() {
  const navigate = useNavigate();
  const { selectCat } = useUser();
  const [activeIndex, setActiveIndex] = useState(0);
  const [pendingCat, setPendingCat] = useState(null);
  const carouselRef = useRef(null);

  const handleScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const cards = el.children;
    const scrollCenter = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    for (let i = 0; i < cards.length; i++) {
      const cardCenter = cards[i].offsetLeft + cards[i].offsetWidth / 2;
      const dist = Math.abs(scrollCenter - cardCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    }
    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToIndex = (index) => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.children[index];
    if (!card) return;
    const scrollLeft = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
    el.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  };

  const handleSelect = (cat) => {
    setPendingCat(cat);
  };

  const handleConfirm = () => {
    if (!pendingCat) return;
    selectCat(pendingCat.id);
    navigate('/name-cat');
  };

  return (
    <div className={`${styles.container} fade-enter`}>
      <h2 className={styles.heading}>选择你的学习伙伴</h2>
      <p className={styles.subheading}>左右滑动浏览，找到与你最契合的小猫</p>

      <div className={styles.carousel} ref={carouselRef}>
        {cats.map((cat) => (
          <CatCard key={cat.id} cat={cat} onSelect={handleSelect} />
        ))}
      </div>

      <div className={styles.dots}>
        {cats.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
            onClick={() => scrollToIndex(i)}
            aria-label={`查看第${i + 1}只猫`}
          />
        ))}
      </div>

      <ConfirmDialog
        open={!!pendingCat}
        message={`是否确定选择 ${pendingCat?.name} ？`}
        onConfirm={handleConfirm}
        onCancel={() => setPendingCat(null)}
      />
    </div>
  );
}
