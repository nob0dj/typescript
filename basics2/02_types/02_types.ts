// union
// union type은 string도 아니고, number도 아닌 새로운 타입. 다음은 허용하지 않는다.
// const koo = (v : string | number) => v + 1; // Operator '+' cannot be applied to types 'string | number' and 'number'.
// const koo = (p : unknown) => p - 1; // The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
const koo = (p : any) => p - 1; // 오류안남. 타입쉴드 해제. 

// 이후 unknown 타입인 변수를 조작하려면 
// 내가 조작할 변수의 타입이 무엇인지 확실하게 체크하는 narrowing 또는 assertion 스킬을 사용
// 변수에 뭐가 들어올지 모호한 순간에 사용.