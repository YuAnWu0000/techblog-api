const fs = require('fs');

// 深度遍歷/models/validate路徑下所有模組
function readFileRecursively(path, fileName) {
  fs.stat(path, (err, statObj) => {
    if (statObj.isDirectory()) {
      fs.readdir(path, (err, files) => {
        files.forEach(file => {
          readFileRecursively(path + '/' + file, file.replace('.js', ''));
        });
      })
    } else {
      exports[fileName] = require(path.replace(basePath, ''));
    }
  });
}
const basePath = 'models/validate';
readFileRecursively('./' + basePath, '');