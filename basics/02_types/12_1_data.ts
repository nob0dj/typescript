// ts파일은 기본적으로 ambient module로써 다른 ts파일에서 참조할 수 있다.
// export const abc = 'ABC';


// 지역모률로 만들기
// export문이 하나라도 있으면 그 외는 모두 지역변수로 취급하는 지역모듈로 사용하게 된다.
export {};
const xyz = 123;


// 지역모듈 중에 특정 타입/변수만 export하려면... 
// Not working!
declare global {
  export const mno = 999;
}