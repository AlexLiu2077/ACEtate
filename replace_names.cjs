const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/pages/RegisterPage.jsx',
  'src/pages/SplashPage.jsx',
  'src/pages/WelcomePage.jsx',
  'src/context/UserContext.jsx',
  'README.md',
  'src/components/tabs/UserStatusTab.jsx',
  'package.json',
  'index.html'
];

filesToUpdate.forEach((file) => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace icon
    content = content.replace(/icon\.png/g, 'newicon.png');
    
    // Replace names
    content = content.replace(/ACEtate/g, 'Chemicat');
    content = content.replace(/"name": "acetate"/g, '"name": "chemicat"');
    content = content.replace(/acetate_user/g, 'chemicat_user');
    
    fs.writeFileSync(filePath, content);
    console.log('Updated:', file);
  }
});
