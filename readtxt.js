const fs = require('fs');

fs.readFile('./files/1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('读取文件失败' + err.message)
        return
    }
    console.log('读取文件成功' + data)
});

const writein = 'Hello, Node.js';

fs.writeFile('./files/2.txt', writein, 'utf8', function (err) {
    if (err) {
        console.error('写入文件失败' + err.message)
    } else {
        console.log('写入文件成功')
    }
});

//继续写入不覆盖，注意换行

fs.appendFile('./files/2.txt', '\n' + writein + '\n', 'utf8', function (err) {
    if (err) {
        console.error('写入文件失败' + err.message)
    } else {
        console.log('写入文件成功')
    }
});


//读取用户输入然后写入,当输入<exit>时退出

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
        if (chunk.trim() === '<exit>') {
            console.log('退出');
            process.exit(); // 结束整个进程
            break;
        }
        fs.appendFile('./files/2.txt', chunk, 'utf8', function (err) {
            if (err) {
                console.error('写入文件失败' + err.message);
            } else {
                console.log('写入文件成功');
            }
        });
    }
});