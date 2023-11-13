// 1. Boolean
let marrieds: boolean = false;
// 2. Number
let n: number = 100;
let m: number = 123.45;
// 3. String
let colorName: string = "blue";

// 4. Array
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

// 5. Tuple
// - 요소의 타입과 개수가 고정된 배열
let x: [string, number];
x = ["hello", 10]; // 성공
// x = [10, "hello"]; // 오류

// 6. Enum
enum Color {Red, Green, Blue}
let color: Color = Color.Green;
console.log(color); // 1 (0-based index)
// index를 직접 지정가능
enum Month {JAN = 1, FEB, MAR}
let month: Month = Month.FEB;
console.log(month); // 2 

// 7. any
// - 타입쉴드 해제, 일반 자바스크립트 변수와 동일
let k : any;
k = 123;
k = 'abc';

// - 타입이 섞인 요소 배열 선언시
let list: any[] = [1, true, "free"];
list[1] = 100;

// unknown
// - any보다 안전. 산술연산 유효성 검사.
let z : unknown; 
z = 123;
z = {};
// z = z - 1; // The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.

// 8. void
// - null 또는 undefined만 허용하는 타입
// - 함수에서는 반환값 없음
let none : void = null; //  `--strictNullChecks` 을 사용하지 않을때만 성공 @tsconfig.json 하지만 이 기능을 사용하는 것이 좋다.
let never : void = undefined;

let foo = (n: any): void=> console.log(n);
let bar = ():void => { return; } // 리턴값 없음
// 9. null
// 10. undefined
// - 유요한 경우가 거의 없다. 
let u: undefined = undefined;
let l: null = null;

// 11. never
// - never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
  throw new Error(message);
}
// - 반환 타입이 never로 추론된다.
function fail() {
  return error("Something failed");
}
// - never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop(): never {
  while (true) {
  }
}

// 12. Object
// - object는 원시 타입이 아닌 타입을 표현
// - number, string, boolean, bigint, symbol가 아닌 나머지를 의미
let obj : object = { name : '홍길동', age : 33};
// let obj : object = 123; // 오류
// let obj : object = "hello"; // 오류
// let obj : object = true; // 오류

// 🤗🤗🤗 이 타입을 직접 지정할 필요없이, typescript에서 자동으로 타입을 지정해준다. 
let str = 'ㅋㅋㅋ'; // typescript에 의해 string 타입 지정
// str = 123; // Type 'number' is not assignable to type 'string'
