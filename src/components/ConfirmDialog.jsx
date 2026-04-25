import styles from './ConfirmDialog.module.css';

export default function ConfirmDialog({ open, message, onConfirm, onCancel }) {
  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onCancel}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <p className={styles.message}>{message}</p>
        <div className={styles.actions}>
          <button className={styles.btnCancel} onClick={onCancel}>再看看</button>
          <button className={styles.btnConfirm} onClick={onConfirm}>确定</button>
        </div>
      </div>
    </div>
  );
}
