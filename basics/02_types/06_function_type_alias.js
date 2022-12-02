// # Function Type
// 함수표현식으로만 작성
const zoo = (p) => p.length;
// const zoo : FunctionType = (p) => p + ""; // Type 'string' is not assignable to type 'number'
console.log(zoo("abc")); // 3
const member = {
    name: 'kim',
    reviewCnt: 0,
    review(n) {
        return this.reviewCnt += 1;
    },
    changeName(name) {
        this.name = name;
    }
};
console.log(member.review(5)); // 1
console.log(member.review(2)); // 2
member.changeName('changsik');
console.log(member.name);
const cutZero = (str) => str.replace(/^0+/g, "");
console.log(cutZero("00010230"));
const removeDash = (str) => parseInt(str.replace(/-/g, ""));
console.log(removeDash("1-2-3-4-5-6-7-8-9"));
const execute = (str, f1, f2) => f2(f1(str));
console.log(execute('00012-123-456', cutZero, removeDash)); // 12123456
// 4. 함수 반환값의 적절한 타입을 지정해보세요.
// function setStyle(el:HTMLElement, prop:string, value:any) {
//   el.style[prop] = value;
// }
// function getStyle(el:HTMLElement, prop:string) {
//   return el.style[prop];
// }
// setStyle(document.body, 'background', '#9c1e04');
// console.log(getStyle(document.body, 'background-color'));
function setStyle(el, prop, value) {
    el.style[prop] = value;
}
function getStyle(el, prop) {
    return el.style[prop];
}
setStyle(document.body, 'background', '#9c1e04');
console.log(getStyle(document.body, 'background-color'));
let setStyle2 = function (el, prop, value) {
    el.style[prop] = value;
};
let getStyle2 = (el, prop) => el.style[prop];
