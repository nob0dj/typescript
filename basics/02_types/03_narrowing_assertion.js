// type narrowing
// 타입확인 typeof, 속성확인 in, 자식여부확인 instanceof 
// function bar(x : number | string) {
//   return x + 1;  // Operator '+' cannot be applied to types 'string | number' and 'number'
// }
// narrowing
const bar = (x) => {
    if (typeof x === 'number')
        return x + 1;
    else
        return x + '1';
};
console.log(bar(10)); // 11
console.log(bar("abc")); // abc1
const car = (x) => {
    const arr = [];
    // arr[0] = x; // Type 'string | number' is not assignable to type 'number'. Type 'string' is not assignable to type 'number'.
    if (typeof x === 'number')
        arr[0] = x;
};
// type assertion
// 타입 덮어씌우기. 타입쉴드가 임시 해제된다.
// 즉 100% 타입을 확신하는 상황에서 사용. 
// 결과적으로 비추한다. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용으로 사용하거나 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때
const dar = (x) => {
    const arr = [];
    arr[0] = x; // x를 number타입이라 단언함.
    console.log(arr[0]);
};
dar(1); // 1
dar("abc"); // abc
function convert(data) {
    return JSON.parse(data);
}
const kim = convert('{"name":"kim"}');
console.log(kim);
// @실습문제 
// 1. 숫자배열에 섞여있는 문자타입숫자를 정리해주는 함수 생성
// ['1', 2, '3']을 전달하면 [1,2,3]이 반환되어야 한다.
const cleaning = (arr) => {
    const newArr = [];
    arr.forEach((n) => newArr.push(typeof n === 'string' ? parseInt(n) : n));
    return newArr;
};
console.log(cleaning(['1', 2, '3']));
// 2. 다음과 같은 함수를 만들어보십시오.
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 
// getMainSubject(teacher객체)를 만들고, 마지막 과목 하나를 반환하는 함수를 작성
// teacher객체가 아니면 오류가 나야 함.
let 철수T = { subject: 'math' }; // math 반환
let 영희T = { subject: ['science', 'english'] }; // english 반환
let 민수T = { subject: ['science', 'art', 'korean'] }; // korean 반환
const getMainSubject = (teacher) => {
    if (typeof teacher.subject === 'string')
        return teacher.subject;
    else if (Array.isArray(teacher.subject))
        return teacher.subject[teacher.subject.length - 1];
};
console.log(getMainSubject(철수T));
console.log(getMainSubject(영희T));
console.log(getMainSubject(민수T));
console.log(getMainSubject({ subject: ['english', 'art'] }));
let 민트T = { name: '민트T' };
// console.log(getMainSubject(민트T)); // Argument of type '{ name: string; }' is not assignable to parameter of type '{ subject: string | string[]; }'. Property 'subject' is missing in type '{ name: string; }' but required in type '{ subject: string | string[]; }'.
