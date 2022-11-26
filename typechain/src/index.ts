// console.log("hello typescript!")

// 선언부, 호출부가 일치 하지 않으면 오류난다.
// 단 매개변수 선언부에 ?를 붙여주면, 필수가 아니어서 오류가 나지 않고, 일반 자바스크립트처럼 처리된다.
const userName = "홍길동", age = 20, phone="01012341234";

//리턴타입은 생략시 void임
const foo = (n:string, a:number, p?:string)=>{
  console.log(`
    이름 : ${n}
    나이 : ${a}
    전화번호 : ${p}
  `)
}

// foo(userName, age, phone);
// foo(userName, age);
// foo(age, userName, phone); // 컴파일 오류

const bar = (n:string, a:number, p:string):string => `
  이름 : ${n}
  나이 : ${a}
  전화번호 : ${p}
  tsc-watch working???
`

// console.log(bar(userName, age, phone))

//타입체크용 인터페이스
interface Human {
  name: string,
  age : number,
  phone : string
}

const person = {
  name: "신사임당",
  age : 50,
  phone : "01099998888"
}

const getPersonInfo = (p: Human):string => `
  이름 : ${p.name}
  나이 : ${p.age}
  전화번호 : ${p.phone}
`

console.log(getPersonInfo(person))


class Man {
  public name: string 
  public age: number
  public phone: string
  public birthday?: DateTime // timezone 관련 issue가 있어 loxon.js의 DateTime으로 교체해서 진행함.

  constructor(name: string, age: number, phone: string){
    this.name = name
    this.age = age
    this.phone = phone
  }

}
const yj: Man = new Man("용재", 26, "01012344321")

console.log(yj)
console.log(new Date().getTimezoneOffset()); // -540 한국시간(Asia/Seoul)은 540이 나와야 정상

//타임존 변경: luxon.js 설치후 진행
// $ yarn add global luxon
// $ yarn add global @types/luxon

import { DateTime } from 'luxon';
import { Settings } from 'luxon';
Settings.defaultZoneName = 'Asia/Seoul';

yj.birthday = DateTime.fromJSDate(new Date("1995-06-18 00:00:00"))
console.log('yj=',yj)
console.log('yj.birthday.date=',yj.birthday.get("day"))


