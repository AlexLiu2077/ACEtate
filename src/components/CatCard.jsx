import styles from './CatCard.module.css';

export default function CatCard({ cat, onSelect }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={cat.image} alt={cat.name} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{cat.name}</h3>
        <div className={styles.nameAccent} />
        <p className={styles.desc}>{cat.description}</p>
        <button className={styles.selectBtn} onClick={() => onSelect(cat)}>
          选择这只
        </button>
      </div>
    </div>
  );
}
