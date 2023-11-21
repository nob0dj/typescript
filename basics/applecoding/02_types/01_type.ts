// sting
let username : string = 'honggd';
// username = 123; // Type 'number' is not assignable to type 'string'.
username = 'sinsa';

let code : string | number; // union 타입 (2개 이상을 합친 타입)
code = "abc";
code = 1234;

let married : boolean = true;

// null 또는 undefined
let none : null = null;
let never : undefined = undefined;

none = undefined;
never = null;

console.log(none, never);

// 배열
let nums : number[] = [1, 2, 3];
let strs : string[] = ['a', 'bc', 'def'];
console.log(nums, strs);
// 여러 자료형을 요소로 사용하려면 Union Type을 사용해야 한다.
let arr : (string | number)[] = [1, 'abc'] // 소괄호 필수

// 객체 object
// let obj : object = { name : '홍길동', age : 33};

// 각 속성별로 타입 지정 가능
let obj : {name : string, age : number} = { name : '홍길동', age : 33};
console.log(obj);

// 이 타입을 직접 지정할 필요없이, typescript에서 자동으로 타입을 지정해준다. 
let str = 'ㅋㅋㅋ'; // typescript에 의해 string 타입 지정
// str = 123; // Type 'number' is not assignable to type 'string'

// @실습문제
// 1. 별명, 생일, 주소 변수 지정
const nickname : string = '홍길동';
// 1999-09-09 node는 기본적으로 UTC시각을 사용.
// 지역대 적용된 시각을 위해 Z 접미사 추가
const birthday : Date = new Date(Date.parse('1999-09-09T00:00:00.000Z')); 
const address : string = '서울시 강남구 역삼동';
console.log(nickname, birthday, address);

// 2. 좋아하는 음악(곡명, 가수 모두 문자열)을 객체타입으로 지정
const song : {title : string, singer : string} = {title : '소주한잔', singer : '임창정'};
console.log(song);

// 3. 다음 객체의 타입지정
// let project = {
//   member : ['kim', 'park'],
//   days : 30,
//   started : true,
// }
let project : {
  member : string[],
  days : number,
  started : boolean
} = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}


// 모든 타입 any : 타입쉴드 해제, 일반 자바스크립트 변수와 동일
let k : any;
k = 123;
k = 'abc';

let m : unknown; // any보다 안전. 산술연산 유효성 검사.
m = 123;
m = {};
// m = m - 1; // The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.



let v : string | number;
v = 'abc';
v = 123;
v = v + 1; // string + 1, number + 1은 허용한다.
console.log(v); // abc1 | 124

// union type은 string도 아니고, number도 아닌 새로운 타입. 다음은 허용하지 않는다.
// const foo = (v : string | number) => v + 1; // Operator '+' cannot be applied to types 'string | number' and 'number'.
// const foo = (p : unknown) => p - 1; // The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
const foo = (p : any) => p - 1; // 오류안남. 타입쉴드 해제. 

// 이후 unknown 타입인 변수를 조작하려면 
// 내가 조작할 변수의 타입이 무엇인지 확실하게 체크하는 narrowing 또는 assertion 스킬을 사용
// 변수에 뭐가 들어올지 모호한 순간에 사용.

// @실습문제 
// 1. 타입지정 해보기
// let user = 'kim';
// let age = undefined;
// let hasCar = false; 
// let 철수 = [user, age, married];

let user : string = 'kim';
let age : number | undefined = undefined;
let hasCar : boolean = false; 
let 철수 : (string | boolean | number | undefined)[] = [user, age, married];
// let 철수 : unknown[] = [user, age, married];

// 2. 다음 scool객체에 타입 지정
// let school = {
//   score : [100, 97, 84],
//   teacher : 'Phil',
//   friend : 'John'
// }
// school.score[4] = false;
// school.friend = ['Lee' , school.teacher]
let school : {
  score : (number | boolean)[], 
  teacher : string, 
  friend : string | string[]
} = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
school.score[4] = false;
school.friend = ['Lee' , school.teacher]