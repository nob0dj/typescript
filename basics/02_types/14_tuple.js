// 반려동물 : 종류, 나이, 중성화여부
let pet = ['dog', 5, true];
let pet2 = ['cat', 3, false];
let pet3 = ['cat', 5];
let 봉수 = ['김봉수', 70, 66, 100];
let 은미 = ['박은미', 55, 60, 90, 88];
const getStudentAvg = (student) => {
    const [name, ...scores] = student;
    return scores.reduce((sum, score) => sum + score) / scores.length;
};
console.log(getStudentAvg(봉수));
console.log(getStudentAvg(은미));
// 나머지파라미터와 tuple타입 조합도 가능
const getStudentAvg2 = (...student) => {
    const [name, ...scores] = student;
    return scores.reduce((sum, score) => sum + score) / scores.length;
};
console.log(getStudentAvg2('김봉수', 70, 66, 100));
console.log(getStudentAvg2('박은미', 55, 60, 90, 88));
const food = ['동서녹차', 4000, true];
let booleanHell = ['동서녹차', 4000, true, false, true, true, false, true];
const newFunc = (...param) => console.log(param);
newFunc('a', true, 6, 3, '1', 4);
// 4. 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
// 파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
// 문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다. 
// 함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다. 
// (동작예시)
// charNumSeperator('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.
const charNumSeperator = (...param) => {
    const result = [[], []];
    param.forEach((p) => {
        if (typeof p === 'string')
            result[0].push(p);
        else if (typeof p === 'number')
            result[1].push(p);
    });
    return result;
};
console.log(charNumSeperator('b', 5, 6, 8, 'a'));
