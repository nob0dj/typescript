// 반려동물 : 종류, 나이, 중성화여부

// type PetType = (string | number | boolean)[];
type PetTuple = [string, number?, boolean?]; // 마지막 n개 요소는 옵션처리 가능. 중간요소는 옵션처리 불가

let pet : PetTuple = ['dog', 5, true];
let pet2 : PetTuple = ['cat', 3, false];
let pet3 : PetTuple = ['cat', 5];
// let pet4 : PetTuple = ['puma', 3]; // Type '[string, number]' is not assignable to type 'PetTuple'. Source has 2 element(s) but target requires 3.


type StudentType = [string, ...number[]]; // 나머지파라미터 타입
let 봉수 : StudentType = ['김봉수', 70, 66, 100];
let 은미 : StudentType = ['박은미', 55, 60, 90, 88];

const getStudentAvg = (student : StudentType) : number => {
  const [name, ...scores] = student;
  return scores.reduce((sum, score) => sum + score) / scores.length;
};
console.log(getStudentAvg(봉수));
console.log(getStudentAvg(은미));

// 나머지파라미터와 tuple타입 조합도 가능
const getStudentAvg2 = (...student : StudentType) : number => {
  const [name, ...scores] = student;
  return scores.reduce((sum, score) => sum + score) / scores.length;
};
console.log(getStudentAvg2('김봉수', 70, 66, 100));
console.log(getStudentAvg2('박은미', 55, 60, 90, 88));

// @실습문제 
// 1. 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.
// 오늘 배운 tuple 타입으로 타입지정합시다. 
// (예시) [ '동서녹차', 4000, true ] 이런 자료 만들고 타입지정하라는 소리입니다.
type MyRecentFoodType = [string, number, boolean];
const food : MyRecentFoodType = [ '동서녹차', 4000, true ];

// 2. 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?
// let arr = ['동서녹차', 4000, true, false, true, true, false, true]
// 몇개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다. 
// tuple 타입과 spread 연산자를 써보도록 합시다. 
type BooleanHellType = [string, number, ...boolean[]];
let booleanHell : BooleanHellType = ['동서녹차', 4000, true, false, true, true, false, true];

// 3.  함수에 타입지정을 해보도록 합시다.
// 1. 이 함수의 첫째 파라미터는 문자,
// 2. 둘째 파라미터는 boolean,
// 3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다. 
// 그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요? 
// 오늘 배운 tuple 타입과 rest parameter를 사용해봅시다.

// type NewFunctionType = (str : string, bool : boolean, n : (string | number)) => void;
type NewFunctionType = (...param : [string, boolean, ...(string | number)[]]) => void;
const newFunc : NewFunctionType = (...param) => console.log(param);
newFunc('a', true, 6, 3, '1', 4)

// 4. 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
// 파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
// 문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다. 
// 함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다. 
// (동작예시)
// charNumSeperator('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.

const charNumSeperator = (...param : [...(string | number)[]]) : [string[], number[]]=> {
  const result : [string[], number[]] = [[], []];
  param.forEach((p) => {
    if(typeof p === 'string')
      result[0].push(p);
    else if(typeof p === 'number')
      result[1].push(p);
  });
  return result;
};

console.log(charNumSeperator('b', 5, 6, 8, 'a'));
