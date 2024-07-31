function dateFormate(date) {
    const dt = new Date(date);
    const year = dt.getFullYear();
    const month = padZero(dt.getMonth() + 1);
    const day = padZero(dt.getDate());

    const hour = padZero(dt.getHours());
    const minute = padZero(dt.getMinutes());
    const second = padZero(dt.getSeconds());

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

function padZero(num) {
    return num > 9 ? num : '0' + num;
}

module.exports = {
    dateFormate
}

