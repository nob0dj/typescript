import { GenderType, MemberNameSpace} from "./12_sample_types";

let gender1 : GenderType = '남';
console.log(gender1); // 남

let gender2 : MemberNameSpace.GenderType = 'M';
console.log(gender2); // M



// @실습문제 
// 1. 다음 MotorCycle, ATV 타입을 import해서 객체를 선언하기

// tsc통해서 js변환시에는 import가 굳이 필요없다. ts-node로 실행시에는 import필수!
import {MotorCycle, ATV} from './03_narrowing_assertion';

const bike1 : MotorCycle = {
  wheel : '2개',
  color : 'black'
};
console.log(bike1); // { wheel: '2개', color: 'black' }

const bike2 : ATV = {
  wheel : '4개',
  color : 'white'
};
console.log(bike2); // { wheel: '4개', color: 'white' }

// 2. 너무 자주만들어 쓰는 함수가 하나 있습니다.
// 이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고 아무것도 return 해주지 않아야합니다. 
// 함수 만들 때마다 여기에 타입 일일이 붙이기 귀찮아서 그런데 이 타입을 다른 파일에 저장해두고 import 해와서 함수 만들 때마다 쓰려면 어떻게 코드를 짜야할까요
import { FavoriteFunctionType } from "./12_sample_types";

const myFavoriteFunc : FavoriteFunctionType = function(p){
  console.log(p);
  // return 123; // FavoriteFunctionType의 리턴타입이 void임에도 오류가 나지 않는다ㅠ
};
console.log(myFavoriteFunc({name : '이황'}));

// 3. 타입 중복이 너무 많이 발생합니다.
// type Dog = string;
// interface Dog { name : string };

// let dog1 :Dog = 'bark';
// let dog2 :Dog = { name : 'paw' }

// 위 코드에서 에러를 없애야합니다. 어떻게 코드를 짜면 될까요? 
// (조건) type Dog, interface Dog의 타입이름 변경 금지, 파일 분할 금지 

namespace NS_Korean {
  export type Dog = string; // export 필수
}
namespace NS_Japanese {
  export interface Dog { name : string };
}

let dog1 :NS_Korean.Dog = 'bark';
let dog2 :NS_Japanese.Dog = { name : 'paw' }
