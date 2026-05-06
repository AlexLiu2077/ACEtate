import styles from './ConfirmDialog.module.css';

export default function ConfirmDialog({ open, message, cancelText = '再看看', confirmText = '确定', onConfirm, onCancel }) {
  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onCancel}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
        <p className={styles.message}>{message}</p>
        <div className={styles.actions}>
          <button className={styles.btnCancel} onClick={onCancel}>{cancelText}</button>
          <button className={styles.btnConfirm} onClick={onConfirm}>{confirmText}</button>
        </div>
      </div>
    </div>
  );
}
