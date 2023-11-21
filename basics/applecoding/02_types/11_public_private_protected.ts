/**
 * public 
 *  - 자식 object들이 마음대로 사용하고 수정가능. 생략해도 동일.
 *  - 생성자 매개변수에 public을 사용하면, 동일한 이름의 필드생성 및 값대입한다. 
 * private - class안에서만 접근 가능
 */
class Item {
  // private name;
  // constructor(name : string) {
  //   this.name = name;
  // }
  constructor(public name : string){}

  public info(){
    console.log(`${this.name} 상품정보 😁`);
  }
}

let item1 = new Item('아메리카노');
// item1.name = 'Americano';
// console.log(item1.name);
item1.info();



class Musician {
  // private name : string; // 자식클래스에서 접근불가
  // protected type : '가수' | '피아니스트'; // 외부에서는 접근불가. 자식클래스에서 접근가능
  // constructor(name : string, type : '가수' | '피아니스트') {
  //   this.name = name;
  //   this.type = type;
  // }

  constructor(public name : string, protected type : '가수' | '피아니스트') {
  }

  hi(){
    console.log(`안녕하세요, ${this.type} ${this.name}입니다.`);
  }
}
class Singer extends Musician {
  constructor(name : string) {
    super(name, '가수');
  }
  sing(song : string){
    console.log(`${this.name}이 부릅니다... ${song}`);
  }
  /**
   * static은 private, protected, public 키워드와 동시 사용가능
   */
  static exercise(){
    console.log('가수 노래 연습!');
  }
  
}
class Pianist extends Musician {
  constructor(name : string) {
    super(name, '피아니스트');
  }
  play(...numbers : string[]){
    numbers.forEach((number, index) => {
      console.log(`${index + 1}번째곡 ${number} 연주...`);
    });
  }
  
}

const 이승철 = new Singer('이승철');
console.log(이승철);
console.log(이승철.name);     // public이라 외부 접근 가능
// console.log(이승철.type);  // protected라 외부접근 불가
이승철.hi();
이승철.sing('그런 사람 또 없습니다.');

Singer.exercise(); // static 생성자함수 소속 메소드

const 하야토수미노 = new Pianist('하야토수미노');
console.log(하야토수미노);
console.log(하야토수미노.name);
// console.log(하야토수미노.type);
하야토수미노.play('베토벤', '모짜르트', 'New Birth');


// static 활용
class FrontEndDev {
  static skill = 'js';
  pros = `${FrontEndDev.skill} 전문 개발자입니다.`;
}

const 재훈 = new FrontEndDev();
console.log(재훈.pros); // js 전문 개발자입니다.

// 트렌드전환 ; python
FrontEndDev.skill = 'python';
const 상훈 = new FrontEndDev();
console.log(상훈.pros); // python 전문 개발자입니다.

console.log(재훈.pros); // js 전문 개발자입니다. 얕은 참조아님.


// @실습문제
// 1. 다음 x, y, z 속성의 특징을 설명해보십시오.
class Coordinate {
  private static x = 10;  // 클래스안에서만 Coordinate.x로 접근 가능
  public static y = 20;   // 어디서든 Coordinate.y로 접근 가능
  protected z = 30;       // 자식클래스에서만 접근 가능
}

class CoordinateDetail extends Coordinate {
  foo(){
    console.log(this.z);          // 30
    console.log(Coordinate.y);    // 20
    // console.log(Coordinate.x); // Property 'x' is private and only accessible within class 'Coordinate'.
  }
}
// console.log(Coordinate.x); // Property 'x' is private and only accessible within class 'Coordinate'
console.log(Coordinate.y);    // 20
// console.log(Coordinate.z); // Property 'z' does not exist on type 'typeof Coordinate'

new CoordinateDetail().foo();

// 2. x 속성에 숫자를 더해주는 함수가 필요합니다.
// class Position2d {
//   private static x = 10;
//   public static y = 20;
// }
// Position2d.translateX(3) // 이렇게 하면 x가 3 더해져야함
// Position2d.translateY(4) // 이렇게 하면 x가 4 더해져야함
// Position2d.printX()      // 이렇게 하면 콘솔창에 x값이 출력되어야함
// (조건) private static x = 10; 이 코드 수정금지 

class Position2d {
  private static x = 10;
  public static y = 20;
  
  static translateX(val : number) {
    Position2d.x += val;
  }
  static translateY(val : number) {
    Position2d.y += val;
  }
  static printX() {
    console.log(Position2d.x); 
  }
  static printY() {
    console.log(Position2d.y);
  }
}
Position2d.translateX(3) // 이렇게 하면 x가 3 더해져야함
Position2d.translateY(4) // 이렇게 하면 x가 4 더해져야함
Position2d.printX(); // 13
Position2d.printY(); // 24
 

// 3. 웹 요소 애니메이팅하는거 이런 것의 기초 격인데 
// let square = new Square(30, 30, 'red');
// square.draw()
// square.draw()
// square.draw()
// square.draw()
// 이렇게 square1.draw()를 할 때마다 index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
// 가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
class Square {
  constructor(private width : number, private height : number, private color : string) {
    
  }
  draw(){
    const div = document.createElement("div");
    div.style.position = 'absolute';
    div.style.top = `${Math.floor(Math.random() * 800)}px`;
    div.style.left = `${Math.floor(Math.random() * 800)}px`;
    div.style.width = `${this.width}px`;
    div.style.height = `${this.height}px`;
    div.style.backgroundColor = this.color;
    document.body.append(div);
  }
}

let square = new Square(30, 30, 'red');
square.draw()
square.draw()
square.draw()
square.draw()



