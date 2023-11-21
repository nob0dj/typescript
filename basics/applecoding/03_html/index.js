"use strict";
const title = document.querySelector("#title"); // Element | null
// title.innerHTML = 'HelloWorld'; // Object is possibly 'null'.
// #solution1. not null여부 확인
// if(title != null) title.innerHTML = 'HelloWorld';
// #solutions2. instanceof 연산자
// if(title instanceof Element) title.innerHTML = 'ByebyeWorld';
// #solution3. as Element 타입 assertion **비추**
// const title = document.querySelector("#title") as Element;
// title.innerHTML = 'HeyWorld';
// #solution4. optional chaing
if (title === null || title === void 0 ? void 0 : title.innerHTML)
    title.innerHTML = 'Yo~ World';
// #solution5. tsconfig.json에서 strict:false 또는 strictNullChecks:false 처리 **비추** (typescript 쓰는 이유가....)
const link = document.querySelector(".link");
// a.href속성은 Element가 아닌 HTMLAnchorElement가 가진 속성
if (link instanceof HTMLAnchorElement)
    link.href = 'https://kakao.com';
const btn = document.querySelector("#btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', (e) => {
    console.log('버튼 클릭!');
});
// @실습문제 
// 1.버튼 누르면 img태그 수정하기 dog.jpg -> cat.jpg
// <img id="image" src="dog.jpg" style="width: 300px;">
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', (e) => {
    const image = document.querySelector("#image");
    if (image instanceof HTMLImageElement)
        image.src = 'cat.jpg';
});
// 2. 다음 a태그의 href속성을 https://kakao.com으로 변경 
/*
<div>
  <a class="naver" href="https://naver.com">링크</a>
  <a class="naver" href="https://naver.com">링크</a>
  <a class="naver" href="https://naver.com">링크</a>
</div>
*/
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', (e) => {
    const navers = document.querySelectorAll(".naver");
    navers.forEach((a) => {
        if (a instanceof HTMLAnchorElement)
            a.href = 'https://kakao.com';
    });
});
console.log('str from data.js :', str);
