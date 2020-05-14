const fs = require('fs');

// 載入./extensions路徑下所有模組
fs.readdirSync('./extensions').forEach(fileName => {
  fileName = fileName.replace('.js','');
  exports[fileName] = require('./' + fileName + '.js');  
});