"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sex;
(function (sex) {
    sex[sex["male"] = 1] = "male";
    sex[sex["female"] = 2] = "female";
})(sex || (sex = {}));
sex.female; // 2
