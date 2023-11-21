"use strict";
let config = {
    type: 'number',
    path: './a/b/c',
    module: 'commonjs',
    allowJs: true,
    checkJs: false
};
let nums = {
    1: '대지위의 나무',
    2: '태어난 생명',
    3: '굴곡',
    4: '선택지가 있는 인간'
};
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);
console.log(nums[4]);
let obj3 = {
    title: {
        title: {
            title: 'semicolon'
        }
    }
};
let obj = {
    model: 'k5',
    brand: 'kia',
    price: 6000,
    year: 2030,
    date: '6월',
    percent: '5%',
    dealer: '김차장',
};
let obj2 = {
    'font-size': 10,
    'secondary': {
        'font-size': 12,
        'third': {
            'font-size': 14
        }
    }
};
