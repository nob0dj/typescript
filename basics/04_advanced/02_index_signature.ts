// 모든 속성이 문자열인 경우
interface StringOnlyType {
  [key : string] : string
}

interface StringOrBooleanType {
  [key : string] : string | boolean
}

interface NumberPropertyType {
  [key : number] : string
}

let config : StringOrBooleanType = {
  type : 'number',
  path : './a/b/c',
  module : 'commonjs',
  allowJs : true,
  checkJs : false
}

let nums : NumberPropertyType = {
  1 : '대지위의 나무',
  2 : '태어난 생명',
  3 : '굴곡',
  4 : '선택지가 있는 인간'
}

console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);
console.log(nums[4]);


// recursive index signature
// let obj3 = {
//   title : {
//     title : {
//       title : 'semicolon'
//     }
//   }
// };

interface TitleType {
  title : TitleType | string
}

let obj3 : TitleType = {
  title : {
    title : {
      title : 'semicolon'
    }
  }
};

// @실습문제
// 1. 다음 자료의 타입을 지정해보십시오. 
// let obj = {
//   model : 'k5',
//   brand : 'kia',
//   price : 6000,
//   year : 2030,
//   date : '6월',
//   percent : '5%',
//   dealer : '김차장',
// }
interface StringOrNumberType {
  [key : string] : string | number
}
let obj : StringOrNumberType = {
  model : 'k5',
  brand : 'kia',
  price : 6000,
  year : 2030,
  date : '6월',
  percent : '5%',
  dealer : '김차장',
}

// 2. 다음 object 자료의 타입을 interface 써서 만들어보십시오. 
// let obj2 = {
//   'font-size' : 10,
//   'secondary' : {
//     'font-size' : 12,
//     'third' : {
//       'font-size' : 14
//     }
//   }
// }

interface CSSType {
  'font-size' :  number,
  [key : string] : CSSType | number
}


let obj2 : CSSType = {
  'font-size' : 10,
  'secondary' : {
    'font-size' : 12,
    'third' : {
      'font-size' : 14
    }
  }
}