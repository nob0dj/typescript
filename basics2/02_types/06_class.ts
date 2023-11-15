class Member {
  id : string; // ts class문법에서는 this.field 참조시 반드시 먼저 선언이 되어 있어야 한다.
  point : number;

  constructor(id : string, point : number = 1000){
    this.id = id;
    this.point = point;
  }

  deductPoint(point : number) : void {
    if(this.point >= point)
      this.point -= point;
    else  
      throw new Error("사용가능한 포인트가 모자릅니다.");
  }
  

}


const m1 = new Member('honggd', 1200);
const m2 = new Member('sinsa');

m1.deductPoint(300);
// m2.deductPoint(1200); // Error: 사용가능한 포인트가 모자릅니다.

console.log(m1);
console.log(m2); 


// @실습문제
// 1. Car 클래스를 만들고 싶습니다.
//   1. model 필드, price필드를 생성자함수에서 인수로 받음.
//   2. tax() 라는 메소드를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
//   3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요. 
//   4. clone() 메소드는 현재 객체의 model, price필드와 동일한 값을 가진 Car객체를 반환
// 예시)
// const car1 = new Car('소나타', 3000);
// console.log(car1); // Car { model: '소나타', price: 3000 }
// console.log(car1.tax()) // 300
// console.log(car1.clone()); // Car { model: '소나타', price: 3000 }

class Car {
  model : string;
  price : number;

  constructor(model : string, price : number) {
    this.model = model;
    this.price = price;
  }

  tax() : number {
    return this.price * .1;
  }

  clone() : Car {
    return new Car(this.model, this.price);
  }
}

const car1 = new Car('소나타', 3000);
console.log(car1); // Car { model: '소나타', price: 3000 }
console.log(car1.tax()) // 300
console.log(car1.clone()); // Car { model: '소나타', price: 3000 }

// 2. class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
//   1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
//   2. 숫자는 전부 object 안의  nums 속성 안에 array 형태로 저장되고 
//   3. 문자는 전부 object 안의 strs 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
//   4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈 
// 예시)
// const word1 = new Word('kim', 3, 5, 'park');
// console.log(word1.nums) // [3,5]
// console.log(word1.strs) // ['kim', 'park']

class Word {
  nums : number[] = [];
  strs : string[] = [];

  constructor(...args : (number | string)[]) {
    args.forEach(arg => {
      if(typeof arg === 'number')
        this.nums.push(arg);
      else if(typeof arg === 'string')
        this.strs.push(arg);
    })
  }
}
const word1 = new Word('kim', 3, 5, 'park');
console.log(word1.nums) // [3,5]
console.log(word1.strs) // ['kim', 'park']

const word2 = new Word('a', 'b', 'c', 'd', 1, 2, 3, 4, 5);
console.log(word2.nums) // [ 1, 2, 3, 4, 5 ]
console.log(word2.strs) // [ 'a', 'b', 'c', 'd' ]



// interface를 통한 타입체크

// Device가 특정 타입의 속성을 가지고 있는 지 확인하려는 경우
// class Device {
//   model : string;
//   price : number = 1000;
//   constructor(model :string){
//     this.model = model
//   }
// }
// let abc = new Device('2022_1234_abc'); 
interface DeviceType {
  model : string;
  price : number;
}
class Device implements DeviceType{
  model : string; // 타입지정 생략시 오류없이 any타입 지정된다.
  price : number = 1000;
  constructor(model : string){
    this.model = model
  }
}

// 주의점) interface를 통해 타입체크만 한다. 타입지정이 되는 것이 아니다.
// model, price의 타입을 지정하지 않는다면 any타입처리

