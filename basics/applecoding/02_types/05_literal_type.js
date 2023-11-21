// Literal Type
let familyName;
familyName = '김';
// familyName = '최'; // Type '"최"' is not assignable to type '"김" | "이"'.
console.log(familyName);
const kee = (str) => {
    if (str === 'hello')
        return 1;
    else if (str === 'bye')
        return 0;
};
console.log(kee('hello')); // 1
console.log(kee('bye')); // 0
// 아래는 변환된 js에서는 정상작동
// console.log(kee('good morning')); // undefined Argument of type '"good morning"' is not assignable to parameter of type '"hello" | "bye"'.
// @실습문제
// 1. '가위', '바위', '보'만 입력가능하고, '가위', '바위', '보' 요소만 가지는 배열을 반환하는 함수 작성
const rcp = (user) => {
    const rnd = Math.floor(Math.random() * 3 + 1);
    const com = rnd == 1 ? '가위' : (rnd == 2 ? '바위' : '보');
    return [com];
};
console.log(rcp('가위'));
console.log(rcp('바위'));
console.log(rcp('보'));
const MY_CATEGORY = 'a';
// const MY_CATEGORY : SomeCategory = 'd'; // Type '"d"' is not assignable to type 'SomeCategory'.
// #issue - literal type과 기존타입과 불일치
// const data = {
//   name : 'abcdefg'
// };
// #solution1 - name속성에 literal type지정
// const data : {name : 'abcdefg'}= {
//   name : 'abcdefg'
// };
// #solution2 - as const
const data = {
    name: 'abcdefg'
}; // object 속성값을 그대로 타입으로 사용하도록 지정. 모든 속성을 read only
// p는 'abcdefg' 타입만 가능. 
const koo = (p) => {
    console.log(p);
};
koo(data.name); // Argument of type 'string' is not assignable to parameter of type '"abcdefg"'
