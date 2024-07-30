"use strict";
var sex;
(function (sex) {
    sex[sex["male"] = 1] = "male";
    sex[sex["female"] = 2] = "female";
})(sex || (sex = {}));
sex.female; // 2

/*
    不使用立即执行函数；立即执行函数原本的样子是这样的：
    (function 
        // code
    })();
    第一个括号是为了将函数变成表达式，第二个括号是为了立即执行这个表达式。
    类比于函数声明和函数表达式，函数声明是以 function 开头的，函数表达式是以 function 结尾的。
    函数声明：function fn() {}
    函数表达式：var fn = function() {};
*/
