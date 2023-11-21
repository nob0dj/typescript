// type Rectangle = {
//   color : string,
//   width : number,
//   height : number
//}
const rect = {
    color: 'red',
    width: 100,
    height: 50
};
const stdt = { name: '홍길동', age: 17 };
const tchr = { name: '세종대왕', age: 17, major: '국어' };
let prod = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
console.log(prod);
;
let cart = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
console.log(cart);
const someObj = {
    plus(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    },
};
