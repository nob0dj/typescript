"use strict";
// console.log("hello typescript!")
// 선언부, 호출부가 일치 하지 않으면 오류난다.
// 단 매개변수 선언부에 ?를 붙여주면, 필수가 아니어서 오류가 나지 않고, 일반 자바스크립트처럼 처리된다.
var userName = "홍길동", age = 20, phone = "01012341234";
//리턴타입은 생략시 void임
var foo = function (n, a, p) {
    console.log("\n    \uC774\uB984 : " + n + "\n    \uB098\uC774 : " + a + "\n    \uC804\uD654\uBC88\uD638 : " + p + "\n  ");
};
foo(userName, age, phone);
foo(userName, age);
// foo(age, userName, phone);
var bar = function (n, a, p) { return "\n\uC774\uB984 : " + n + "\n\uB098\uC774 : " + a + "\n\uC804\uD654\uBC88\uD638 : " + p + "\n"; };
console.log(bar(userName, age, phone));
