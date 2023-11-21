// union
// union type은 string도 아니고, number도 아닌 새로운 타입. 다음은 허용하지 않는다.
let s: string | number = 3;
console.log(s);
s = 'abc';
console.log(s);

// 함수 적용시 유의사항
// const koo = (v : string | number) => v + 1; // Operator '+' cannot be applied to types 'string | number' and 'number'.
// const koo = (p : unknown) => p - 1; // The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
// const koo = (p : any) => p - 1; // 오류안남. 타입쉴드 해제. 

// 이후 unknown 타입인 변수를 조작하려면 
// 내가 조작할 변수의 타입이 무엇인지 확실하게 체크하는 narrowing 또는 assertion 스킬을 사용
// 변수에 뭐가 들어올지 모호한 순간에 사용.


// # type narrowing
// 타입확인 typeof, 속성확인 in, 자식여부확인 instanceof 

// function bar(x : number | string) {
//   return x + 1;  // Operator '+' cannot be applied to types 'string | number' and 'number'
// }

// ## narrowing basic
const bar = (x : number | string) => {
  if(typeof x === 'number') 
    return x + 1; // number
  else 
    return x + '1'; // string
}
console.log(bar(10)); // 11
console.log(bar("abc")); // abc1

const car = (x : number | string) => {
  const arr : number[] = [];
  // arr[0] = x; // Type 'string | number' is not assignable to type 'number'. Type 'string' is not assignable to type 'number'.
  if(typeof x === 'number')
    arr[0] = x;
}


// a. undefined나 null체크후 처리
((a : string | undefined) => {
  // if(a.length > 3){ // Cannot read properties of undefined (reading 'length')
  if(a && a.length > 3){
    console.log(a.length);
  }
  console.log('끝');
})(undefined);

// b. literal type으로 처리
type Fish = { swim: string };
type Bird = { fly: string };

console.log((function(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim
  }
  return animal.fly
})({swim : 'freestyle'})); 

// c. instanceof 연산자 - class 또는 생성자함수로 만들어진 객체
class Cat {
  catName;
  constructor(catName : string) {
    this.catName = catName;
  }
}
class Dog {
  dogName;
  constructor(dogName : string){
    this.dogName = dogName;
  }
}

const narrowMe = (e : Dog | Cat | Date) => {
  e instanceof Dog && console.log(e.dogName);
  e instanceof Cat && console.log(e.catName);
  e instanceof Date && console.log(e.toISOString());
};
narrowMe(new Dog('리트리버'));
narrowMe(new Cat('율무'));
narrowMe(new Date());


// d. literal type으로 narrowing하기
// - typeof 사용불가
// - in 사용불가 : 배타적 속성이 없다.
// - literal type의 구체적 속성값으로 비교
export type MotorCycle = {
  wheel : '2개',
  color : string
}
// 4륜바이크 All Terrain Vehicle
export type ATV = {
  wheel : '4개',
  color : string
}


function narrowMe2(x : MotorCycle | ATV){
  if (x.wheel === '2개'){
    console.log('모터바이크 동호회원님, 안녕하세요.... ' + x.color);
  } else {
    console.log('이 ATV로 말씀 드리자면... ' + x.color)
  }
}

narrowMe2({wheel : '4개', color : 'Red'});
narrowMe2({wheel : '2개', color : 'DeepBlue'});


// ### narrowing이 유용한 예제
type Person = {
  name : string
}
function convert<T>(data: string): T {
  return JSON.parse(data) as T;
}
const kim = convert<Person>('{"name":"kim"}');
console.log(kim);


// ## type assertion
// 타입 덮어씌우기. 타입쉴드가 임시 해제된다.
// 즉 100% 타입을 확신하는 상황에서 사용. 
// 결과적으로 비추한다. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용으로 사용하거나 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때

const dar = (x : number | string) => {
  const arr : number[] = [];
  arr[0] = x as number; // x를 number타입이라 단언함.
  console.log(arr[0]);
}
dar(1); // 1
dar("abc"); // abc




// @실습문제 
// 1. 숫자배열에 섞여있는 문자타입숫자를 정리해주는 함수 생성
// ['1', 2, '3']을 전달하면 [1,2,3]이 반환되어야 한다.
const cleaning = (arr : (number | string)[]) : number[] => {
  const newArr : number[] = [];
  arr.forEach((n) => newArr.push(typeof n === 'string' ? parseInt(n) : n));
  return newArr;
}

console.log(cleaning(['1', 2, '3']));

// 2. 다음과 같은 함수를 만들어보십시오.
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 
// getMainSubject(teacher객체)를 만들고, 마지막 과목 하나를 반환하는 함수를 작성
// teacher객체가 아니면 오류가 나야 함.
let 철수T = { subject : 'math' }; // math 반환
let 영희T = { subject : ['science', 'english'] }; // english 반환
let 민수T = { subject : ['science', 'art', 'korean'] }; // korean 반환

const getMainSubject = (teacher : {subject : string | string []}) : string => {
  if(typeof teacher.subject === 'string')
    return teacher.subject;
  else if(Array.isArray(teacher.subject))
    return teacher.subject[teacher.subject.length - 1];
};

console.log(getMainSubject(철수T));
console.log(getMainSubject(영희T));
console.log(getMainSubject(민수T));
console.log(getMainSubject({ subject : ['english', 'art']}));

let 민트T = { name : '민트T'};
// console.log(getMainSubject(민트T)); // Argument of type '{ name: string; }' is not assignable to parameter of type '{ subject: string | string[]; }'. Property 'subject' is missing in type '{ name: string; }' but required in type '{ subject: string | string[]; }'.


