// # rest parameter
((...n : number[]) => {
  console.log(n); // [ 1, 3, 5, 3, 5, 7 ]
})(1,3,5,3,5,7);



// # destructuring assignment 
// ## array
// Working
// let e0 : string, e1 : string, e2 : (string | number)[];
// [e0, e1, ...e2] = ['a', 'b', 'c', 'd', 100];

// Working
let [e0, e1, ...e2] : (string | number)[] = ['a', 'b', 'c', 'd', 100];

// Now Working - 나머지파라미터 관련 오류 
// let [e0, e1, ...e2] : [string, string, (string | number)[]] = ['a', 'b', 'c', 'd', 100];

console.log(e0, e1, e2);

(([a, b, ...c]) => {
  console.log(a, b, c);
})(['a', 'b', 'c', 'd']);

// ## object
const {pid, num} : {pid : string, num : number} = {pid : 'abc123', num : 1234};
console.log(pid, num);

(({pid, num} : {pid : string, num : number}) => {
  console.log(pid, num);
})({pid : 'abc123', num : 1234});


// @실습문제 
// 1. 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈 
console.log(((...nums : number[]) => nums.reduce((max, n) => max > n ? max : n))(6,3,7,2));

// 2. 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// 함수( { user : 'kim', comment : [3,5,4], admin : false } )
// 어떻게 코드를 짜야할까요?
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
(({user, comment, admin} : {user : string, comment : number[], admin : boolean}) : void => {
  console.log(user, comment, admin);
})({ user : 'kim', comment : [3,5,4], admin : false });

interface UserType {
  user : string,
  comment : number[],
  admin : boolean
}
(({user, comment, admin} : UserType) : void => {
  console.log(user, comment, admin);
})({ user : 'lee', comment : [2,5,3], admin : true });


// 3. 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
// 함수( [40, 'wine', false] )
// 어떻게 코드를 짜야할까요?
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
((arr : [number, string, boolean]) : void => {
  console.log(arr);
})( [40, 'wine', false] );

// type CompositeArrayType = [number, string, boolean];
type CompositeArrayType = (number | string | boolean)[];
((arr : CompositeArrayType) : void => {
  console.log(arr);
})( [40, 'wine', false] );