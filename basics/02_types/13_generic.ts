// # generic 함수
// 타입을 파라미터로 사용
// 클래스 또는 함수에서 사용할 타입(Type)을, 그 클래스나 함수를 사용할 때 결정하는 프로그래밍 기법

// const xoo = (x : unknown[]) => {
//   return x[0]; // Working! return unknown
//   // return x[0] + 100; // Not Working! Operator '+' cannot be applied to types 'unknown' and '100'.
// };
// let x0 = xoo([3,4,5]);

const xoo = function<T>(x : T[]) : T {
  return x[0];
};
let x0 = xoo<number>([3,4,5]);
console.log(x0);
let k0 = xoo<string>(['a','b','c']);
console.log(k0);


// const yoo = function<T extends number>(x : T) : T{
//   return x + 1; // Type 'number' is not assignable to type 'T'. 'number' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'number'.
// };
// console.log(yoo<number>(100));

// custom타입 상속도 가능
interface LengthCheck {
  length : number;
}
const roo = <T extends LengthCheck>(x : T) : number => {
  return x.length;
};
console.log(roo<string>('hello')); // 5
console.log(roo<LengthCheck>({length : 3})); // 3
// console.log(roo<number>(123)); // Type 'number' does not satisfy the constraint 'LengthCheck'.


// @실습문제
// 1. 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 
// 연습삼아 Generic 이런걸로 만들어봅시다. 굳이 Generic 이런게 필요는 없겠지만요 
// (동작 예시)
// getLength<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다. 
// getLength<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다. 

// const getLength = <T extends {length : number}>(p : T) : number => p.length;
const getLength = <T extends string | string[]>(p : T) : number => p.length;
console.log(getLength<string>('hello')); // 5
console.log(getLength<string[]>(['kim', 'park'])); // 2

// 2. AnimalType 이라는 타입이 있습니다.
interface AnimalType {
  name : string;
  age : number 
}
let json = '{"name" : "dog", "age" : 1}'
// 그리고 json라는 변수도 있습니다. object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다. 
// json라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
// 근데 변환된 object의 타입은 AnimalType이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
// 오늘 배운 Generic을 이용해서 구현해보도록 합시다.  
// (동작 예시)
// parseJson<Animal>(json) 이렇게 쓰면 이 자리에 { name : 'dog' , age : 1 } 이런 object 자료가 남아야합니다. 근데 타입은 AnimalType임

const parseJson = <T>(jsonStr : string) : T => JSON.parse(jsonStr);
console.log(parseJson<AnimalType>(json)); // { name: 'dog', age: 1 }


// 3. class 를 수정해봅시다.
// class Person {
//   name;
//   constructor(a){
//     this.name = a;
//   }
// }
// let a = new Person('어쩌구');
// a.name //any 타입이 되었넹 

// 지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다.
// 이게 싫어서 파라미터에 string을 집어넣으면 string 타입
// number를 집어넣으면 number 타입
// string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요? 
// 오늘 배운 Generic을 이용해봅시다. 

class Person<T>{
  name : T;
  constructor(a : T){
    this.name = a;
  }
}
let a = new Person('어쩌구');
a.name //any 타입이 되었넹 
 
