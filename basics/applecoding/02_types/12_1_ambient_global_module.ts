// ts파일은 기본적으로 ambient module로써 다른 ts파일을 참조할 수 있다.
// 하지만, 실행시 오류ㅠ
// import {abc} from './12_1_data';
// console.log(abc);

// 로컬모듈화 하지 않으면 변수 재선언도 불가하다.
const xyz = 456;
console.log(xyz);


