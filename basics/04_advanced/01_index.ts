// import * as Type from "./01_test";
// import { Age as AgeType } from "./01_test";


// let age : Type.Age = 13;
// let age2 : AgeType = 13;


// 01_index.d.ts 자동생성 설정후
type UsernameType = string;
let username : UsernameType = 'honggd';
console.log(username);


// d.ts는 ambient module이 아니라서 자동참조가 불가하다. 이른 전역에서 사용하려면...
// local type과 global type 충돌문제도 있고, import/export가 훨씬 안전하다.
// let married : MarriedType = true;


// ts-node로 실행시 $ 못차는 오류
// npm i --save-dev @types/jquery, npm i jquery 먼저 실행
// ts-node --files ./node_modules/@types/jquery 01_index.ts 오류!
$([1,2,3]).each((i, n) => console.log(i, n));

