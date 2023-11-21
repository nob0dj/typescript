// type Rectangle = {
//   color : string,
//   width : number,
//   height : number
//}

// Object타입 지정시에는 interface 사용가능
interface Rectangle {
  color : string,
  width : number,
  height : number
}


const rect : Rectangle = {
  color : 'red',
  width : 100,
  height : 50
}

// @실습문제 : 다음 객체에 적절한 타입을 지정할 것.
// interface Student {
//   name : string, 
//   age : number
// }
// interface Teacher {
//   name : string, 
//   age : number,
//   major : string
// }

// Student는 중복선언이 가능하다. n개가 병합된다.
// 기존 라이브러리의 타입을 가지고 확장이 가능하다.
// 단, 타입이 다른 동일한 속성이 중복되어서는 안된다.
interface Student {
  name : string, 
  age : number
}
interface Teacher extends Student {
  major : string
}


const stdt : Student = {name : '홍길동', age : 17};
const tchr : Teacher = {name : '세종대왕', age : 17, major : '국어'};


// type도 비슷하게 구현 가능 - &연산자를 통한 교차타입 (intersection type)
// 타입이 다른 동일한 속성이 중복되어서는 안된다. 사용시점에 오류(never타입으로 할당되어 있음)
type Animal = {name : string};
type Turtle = {age : number} & Animal; // 좌우항 타입을 모두 만족해야 한다.

// @실습문제
// 1. interface 이용해서 간단하게 타입을 만들어봅시다
// let prod = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] };
// 이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?
interface Product {
  brand : string,
  serialNumber : number,
  model : string[]
}
let prod : Product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] };
console.log(prod);

// 2. array 안에 object 여러개가 필요합니다.
// 쇼핑몰 장바구니를 구현하려고 하는데 
// let cart = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 
// 이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요? 
interface Product2 {
  product : string,
  price : number
};
type Cart = Product2[];
let cart : Cart = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ];
console.log(cart);

// 3. 위에서 만든 타입을 extends 해봅시다.
// 갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다. 
// { product : '청소기', price : 7000, card : false }
// 위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
interface Product3 extends Product2 {
  card : boolean
}

// 4. object 안에 함수를 2개 넣고 싶은데요 
//   1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 
//   2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 
//   이 object 자료를 어떻게 만들면 될까요? interface를 이용해서 object에 타입지정도 해보십시오. 
interface SomeObject {
  plus : (a : number, b : number) => number,
  minus : (a : number, b : number) => number
}

const someObj : SomeObject = {
  plus(a, b){
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
}