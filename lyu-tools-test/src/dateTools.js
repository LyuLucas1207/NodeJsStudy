/*
    Will Export: dateFormat_Lyu
    dateFormat_Lyu(): This function takes a date string and returns a formatted date string.
    @param {string} dataString：The date string to be formatted.
    @return {string}：The formatted date string.
    >>How to use:
    const TIME = require('lyu-tools-test');
    const dt = TIME.dateFormat_Lyu(new Date()); //output: 2021-08-02 15:00:00
    >>Note:
    if dataString is not a Date object, it will be converted to a Date object.
*/
function dateFormat_Lyu(dataString) {
    const date = dataString instanceof Date ? dataString : new Date(dataString);

    const year = date.getFullYear();
    const month = addZero_Lyu(date.getMonth() + 1);
    const day = addZero_Lyu(date.getDate());
    const hour = addZero_Lyu(date.getHours());
    const minute = addZero_Lyu(date.getMinutes());
    const second = addZero_Lyu(date.getSeconds());

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
/*
    NOT Export: addZero_Lyu
    addZero_Lyu(): This function takes a number if it is less than 10, add a '0' before it.
    @param {number} num：The number to be formatted.
    @return {string}：The formatted number.
    >>Note:
    This function is not exported, so it cannot be called directly.
*/
function addZero_Lyu(num) {
    return num > 9 ? num : '0' + num;
}

module.exports = {
    dateFormat_Lyu
}