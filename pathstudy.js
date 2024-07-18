const path = require('path');
const fs = require('fs');

const dst = path.join(__dirname, 'files', '1.txt'); // /Users/xxx/Nodejs_study/files/1.txt

console.log('dst', dst);

fs.readFile(dst, 'utf8', (err, data) => {
    if (err) {
        console.error('读取文件失败' + err.message)
        return
    }
    console.log('读取文件成功' + data)
});

//or

console.log('or');

fs.readFile(path.join(__dirname, 'files', '1.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error('读取文件失败' + err.message)
        return
    }
    console.log('读取文件成功' + data)
});

let fullName = path.basename(path.join(__dirname, 'files', '1.txt'));
console.log('fullName', fullName); // 1.txt