// function의 return type : never
/**
 * never를 반환하기 위해서는
 * - return구문이 없어야 한다.(모든 함수는 기본적으로 return undefined를 가지고 있다.)
 * - 함수 실행이 정상적으로 끝나서는 안된다.
 *
 * 즉 쓰잘데기 없다. 리턴타입이 없을때는 void를 사용하면 된다.
 */
function endless() {
    // 1. 에러 던지기
    // throw new Error('크악~');
    // 2. 무한반복
    while (true)
        ;
}
// never 등장시기
// 1. 타입지정 오류시
(p) => {
    if (typeof p === 'string') {
        console.log(p); // (parameter) p: string
    }
    else {
        console.log(p); // (parameter) p: never
    }
};
// let zzz: () => never
let zzz = () => {
    throw new Error();
};
