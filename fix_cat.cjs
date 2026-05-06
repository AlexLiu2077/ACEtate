const fs = require('fs');

let c = fs.readFileSync('src/components/tabs/MyCatTab.jsx', 'utf8');

c = c.replace('<StatusBar label="🍚 饱食度" value={satiety} max={100} />', '<StatusBar label="🍚 饱食度" value={satiety} max={100} color="var(--color-success)" />');
c = c.replace('<StatusBar label="💗 亲密度" value={intimacy} max={100} />', '<StatusBar label="💗 亲密度" value={intimacy} max={100} color="var(--color-secondary)" />');
c = c.replace('function StatusBar({ label, value, max }) {', 'function StatusBar({ label, value, max, color }) {');
c = c.replace('style={{ width: `${percent}%` }}', 'style={{ width: `${percent}%`, background: color || \'var(--gradient-primary)\' }}');

fs.writeFileSync('src/components/tabs/MyCatTab.jsx', c);

let appCss = fs.readFileSync('src/App.css', 'utf8');
if (!appCss.includes('--gradient-primary:')) {
  appCss = appCss.replace('--gradient-bg:', '--gradient-primary: linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%);\n  --gradient-bg:');
  fs.writeFileSync('src/App.css', appCss);
}
