/* 스크롤 애니메이션 */

/* 배너 문구 애니메이션 */
let observer = new IntersectionObserver((e) =>{
    // 감시중 박스가 화면에 등장하면 아래 코드 실행
    e.forEach((item) => {
        if (item.isIntersecting) {    // 화면에 보일때만 동작
            item.target.style.opacity = 1;
        } else {
            item.target.style.opacity = 0;
        }
        })
})

let inner = document.querySelectorAll("h2")
// html 요소 화면 등장하는지 감시해줌
observer.observe(inner[0]);
observer.observe(inner[1]);
observer.observe(inner[2]);

/* 키즈, 저학년, 고학년 애니메이션 */
let saTriggerMargin = 300;
let saElementList = document.querySelectorAll('.up');

let saFunc = function () {
    for (let element of saElementList) {
        if (!element.classList.contains('show')) {
            if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
                element.classList.add('show');
            }
        }
    }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);


