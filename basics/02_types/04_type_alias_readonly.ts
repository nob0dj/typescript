// let petname : string | number | undefined;

type PetType = string | number | undefined;
let petname : PetType;
petname = '뽀식이';
petname = 1234;

type Human = {
  name : string,
  age : number,
}

let teacher : Human = { name : 'john', age : 20 } 
// let teacher : {
//   name : string,
//   age : number,
// } = { name : 'john', age : 20 }


// 객체 속성에 대해 읽기전용(수정불가) 처리
// const PLACE_OF_BIRTH = 'Seoul'; 
// PLACE_OF_BIRTH = 'Busan';

// const PLACE_OF_BIRTH = { region : 'Seoul'}; 
// PLACE_OF_BIRTH.region = 'Busan';
// console.log(PLACE_OF_BIRTH);

type PlaceOfBirth = { 
  readonly region : string // 수정불가
};

const PLACE_OF_BIRTH : PlaceOfBirth = { region : 'Seoul'}; 
// PLACE_OF_BIRTH.region = 'Busan'; // Cannot assign to 'region' because it is a read-only property.ts(2
// 단, 트랜스컴파일된 js에서는 아무 문제없이 처리된다.
console.log(PLACE_OF_BIRTH);

// type 확장
type Name = string;
type Age = number;
type NewOne = Name | Age; // string | number

type PositionX = { x: number };
type PositionY = { y: number };
type Position = PositionX & PositionY; // {x : number, y : number}
let position : Position = { x : 1, y : 2 }


// @실습문제
// 1. 객체 type확장시 중복된 속성은 어떻게 처리되는가? 오류!
type A = {a : number};
type B = {a : string, b : number};
type C = A & B;

// let c : C = {a : 'abc', b : 123}; // Type 'string' is not assignable to type 'never'.

// 2. 다음 조건을 만족하는 타입을 만들어봅시다. 
//   1. 이 타입은 object 자료형이어야합니다.
//   2. 이 타입은 color 라는 속성을 가질 수도 있으며 문자 또는 값이 없을수 있습니다. 
//   3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
//   4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다. 
type MyType = {
  color? : string, 
  size : number,
  readonly position : number[]
}

// 3. 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
//   1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
//   2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
//   3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
type UserName = string;
type UserPhone = number;
type UserEmail = string;
type User = {
  name : UserName,
  phone : UserPhone,
  email : UserEmail
}

const user1 : User = { name : 'kim', phone : 123, email : 'abc@naver.com' };


// 4. 다음을 만족하는 type alias를 만들어보십시오.
//   1. 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
//   2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
//   3. 멋있게 숙제3에서 만들어둔  type alias를 재활용해봅시다.
type IsAdult = {isAdult : boolean};
type User2 = User & IsAdult;
const user2 : User2 = { name : 'kim', phone : 123, email : 'abc@naver.com', isAdult : true};
