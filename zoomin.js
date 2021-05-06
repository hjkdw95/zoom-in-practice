// 1. 스크롤을 할수록 화면이 줌인되는 것
// 1.1 scrolltop 구해서 그거에 맞게 perspective랑 translateZ가 바뀌게 하기


let scrollTop = 0;
let imageAll;
let totalNum = 0;


function scrollFunc(e){
    scrollTop = document.documentElement.scrollTop;

    imageAll[0].style.transform = `perspective(400px) translateZ(${scrollTop/35}px)`;
    imageAll[1].style.transform = `perspective(400px) translateZ(${scrollTop/30}px)`;
    imageAll[2].style.transform = `perspective(400px) translateZ(${scrollTop/25}px)`;
    imageAll[3].style.transform = `perspective(400px) translateZ(${scrollTop/20}px)`;
    imageAll[4].style.transform = `perspective(400px) translateZ(${scrollTop/15}px)`;
    imageAll[5].style.transform = `perspective(400px) translateZ(${scrollTop/10}px)`;
    imageAll[6].style.transform = `perspective(400px) translateZ(${scrollTop/5}px)`;
};


function init(){
    imageAll = document.querySelectorAll(".parallax_image");
    totalNum = imageAll.length;

    window.addEventListener("scroll", scrollFunc);

};


init();