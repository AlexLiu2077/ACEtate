const fs = require('fs');
let css = fs.readFileSync('src/components/tabs/UserStatusTab.module.css', 'utf8');

const modalCSS = `
/* About Modal */
.modalOverlay {
  position: fixed;
  inset: 0;
  background: rgba(30, 27, 75, 0.4);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  animation: overlayIn 0.25s ease-out;
}

.modalContent {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(24px) saturate(1.8);
  -webkit-backdrop-filter: blur(24px) saturate(1.8);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  width: 85%;
  max-width: 320px;
  text-align: center;
  box-shadow: var(--shadow-ambient);
  animation: modalScale 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes overlayIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes modalScale {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.modalTitle {
  font-size: 20px;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 16px;
}

.modalText {
  font-size: 15px;
  color: var(--color-text);
  margin-bottom: 8px;
}

.modalBtn {
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  background: var(--gradient-btn);
  color: #fff;
  border: none;
  border-radius: var(--radius-full);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: var(--shadow-btn);
}

.modalBtn:active {
  transform: scale(0.98);
}
`;

if (!css.includes('.modalOverlay')) {
  fs.writeFileSync('src/components/tabs/UserStatusTab.module.css', css + '\n' + modalCSS);
}
