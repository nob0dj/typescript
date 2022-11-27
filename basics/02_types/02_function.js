// 함수의 매개변수, 리턴타입에 타입지정 가능
// const f = (x) => x + 1; // 타입지정 안하면 :any와 동일하다
const f = (x) => x + 1;
console.log(f(200)); // 201
// console.log(f()); // Expected 1 arguments, but got 0.
// 매개인자가 없을 수도 있는 경우
const z = (x) => x + 1; // x : number  | undefined 와 비슷.
console.log(z()); // NaN 오류는 나지 않음.
// void 리턴값 없음. 실수로 리턴값 지정시 오류
// const b = (x : number) : void => x + 1; // Type 'number' is not assignable to type 'void'.
// @실습문제 
// 1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다.
// (name : string | undefiend)로 대체할 수 없다.
const f1 = (name) => {
    if (name)
        console.log(`안녕하세요, ${name}`);
    else
        console.log("이름이 없습니다");
};
f1('홍길동');
f1('');
f1();
// 2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다. 
// const f2 = (n : number) : number => Math.floor(Math.log10(n) + 1);
const f2 = (n) => n.toString().length;
console.log(f2(245));
console.log(f2(9567));
// 3. 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
//   1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
//   2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
//   3. 총 점수가 600점 이상일 경우만 true반환.
// (예시)
// canMarry(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
// canMarry(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.
const canMarry = (monthlyIncome, hasOwnHome, attractive) => {
    let score = 0;
    // 월소득 만원당 1점
    score += Math.floor(monthlyIncome);
    // 집보유여부
    score += (hasOwnHome ? 500 : 0);
    // 매력도
    score += (attractive === '상' ? 100 : 0);
    return score >= 600;
};
console.log(canMarry(700, false, '중')); // true
console.log(canMarry(100, false, '상')); // false
