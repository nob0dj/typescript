// let petname : string | number | undefined;
let petname;
petname = '뽀식이';
petname = 1234;
let teacher = { name: 'john', age: 20 };
const PLACE_OF_BIRTH = { region: 'Seoul' };
// PLACE_OF_BIRTH.region = 'Busan'; // Cannot assign to 'region' because it is a read-only property.ts(2
// 단, 트랜스컴파일된 js에서는 아무 문제없이 처리된다.
console.log(PLACE_OF_BIRTH);
let position = { x: 1, y: 2 };
const user1 = { name: 'kim', phone: 123, email: 'abc@naver.com' };
const user2 = { name: 'kim', phone: 123, email: 'abc@naver.com', isAdult: true };
