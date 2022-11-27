// # Function Type

// function zoo(p : string) : number {
//   return p.length;
// }


// 함수타입은 화살표함수 형식으로만!
type FunctionType = (p : string) => number;

// 함수표현식으로만 작성
const zoo : FunctionType = (p) => p.length;
// const zoo : FunctionType = (p) => p + ""; // Type 'string' is not assignable to type 'number'

console.log(zoo("abc")); // 3
// console.log(zoo(12345)); // undefined Argument of type 'number' is not assignable to parameter of type 'string'.


// @실습문제 : 
// 1. 다음 메소드에 타입지정하기 (type키워드로 객체/함수 타입 지정해보기)
// const member = {
//   name : 'kim',
//   reviewCnt : 0,
//   review(n){
//     return this.review + 1;
//   },
//   changeName(name){
//     this.name = name; 
//   }
// }

type SETTER = (value:any) => void;
type MemberType = {
  name : string,
  reviewCnt : number,
  review : (n : number) => number;
  changeName : SETTER
}

const member : MemberType = {
  name : 'kim',
  reviewCnt : 0,
  review(n : number) : number{
    return this.reviewCnt += 1;
  },
  changeName(name:string):void{
    this.name = name; 
  }
};

console.log(member.review(5)); // 1
console.log(member.review(2)); // 2

member.changeName('changsik');
console.log(member.name);


// 2.  다음 함수2개를 만들어보고 타입까지 정의해보십시오.
// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 
type BiStringFunctionType = (str : string) => string;
const cutZero : BiStringFunctionType = (str) => str.replace(/^0+/g, "");
console.log(cutZero("00010230"));

type StringToNumberFunctionType = (str : string) => number;
const removeDash : StringToNumberFunctionType = (str) => parseInt(str.replace(/-/g, ""));
console.log(removeDash("1-2-3-4-5-6-7-8-9"));

// 3. 2번에서 작성한 함수를 연달아 쓸수 있는 함수 작성
// execute('00012-123-456', cutZero, removeDash) 호출시 12123456이 반환되어야 함.
type ExecuteFunctionType = (str : string, BiStringFunctionType, StringToNumberFunctionType) => number;
const execute : ExecuteFunctionType = (str, f1, f2) => f2(f1(str));
console.log(execute('00012-123-456', cutZero, removeDash)); // 12123456



