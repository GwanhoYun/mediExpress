const items = [
    document.querySelector(".view_item_container_1"),
    document.querySelector(".view_item_container_2"),
    document.querySelector(".view_item_container_3"),
    document.querySelector(".view_item_container_4")
];

const buttonStyle = [
    document.querySelector(".view_item_btn1"),
    document.querySelector(".view_item_btn2"),
    document.querySelector(".view_item_btn3"),
    document.querySelector(".view_item_btn4")
];

function activateItem(index) {
    items.forEach((item, idx) => {
        item.style.display = (idx === index) ? "flex" : "none";
    });

    buttonStyle.forEach((btn, idx) => {
        btn.style.borderTop = (idx === index) ? "3px solid #0079e9" : "3px solid #7B7B7B";
        btn.style.borderBottom = (idx === index) ? "3px solid #0079e9" : "3px solid #7B7B7B";
        btn.style.color = (idx === index) ? "#0079e9" : "#7B7B7B";
    })

};

function activateAllMenu() {
    const activeAllMenu = document.querySelector('.all_menu_list');
    if (activeAllMenu.style.display === "none" || activeAllMenu.style.display === "") {
        activeAllMenu.style.display = "grid";
        activeAllMenu.style.animation = "onAllMenu 1s forwards";
    } else {
        activeAllMenu.style.display = "none";
        activeAllMenu.style.animation = "offAllMenu 1s forwards";
    }
}

document.addEventListener('click', function(event) {
    const activeAllMenu = document.querySelector('.all_menu_list');
    const menuButton = document.querySelector('.all_menu_container p');

    if (activeAllMenu && menuButton) {
        if (!activeAllMenu.contains(event.target) && !menuButton.contains(event.target)) {
            activeAllMenu.style.display = "none";
        }
    }
});

let firstSlide = 1;
let slideTrigger = true;
let autoSlideInterval = setInterval(nextSlide, 5000);
const slides = document.querySelectorAll(".slider-container li");
const lastSlide = slides.length;
const presentSlideIndexCount = document.querySelector(".present_slide_index");
const totalSlideIndexCount = document.querySelector(".total_slide_index");
const slideCount2Container = document.querySelector(".slide_count_2");
const slideCount2= document.querySelector(".slide_count_2 div");

for(let i = 0; i < lastSlide; i++ ){
    const createSlideCount2 = document.createElement('div');
    createSlideCount2.className = 'count_' + (i + 1);
    slideCount2Container.appendChild(createSlideCount2);
    createSlideCount2.addEventListener('click', selectSlide);
}

function selectSlide(event) {
    const className = event.target.className; // 예: 'count_3'
    const slideIndex = parseInt(className.split('_')[1]); // '3'을 추출하여 숫자로 변환
    firstSlide = slideIndex; // firstSlide를 현재 슬라이드 인덱스로 설정
    showSlide(slideIndex); // 슬라이드 표시
    resetAutoSlide()
}


function showSlide(slideIndex) {
    slides.forEach(slide =>{
        slide.style.display = 'none';
        slide.style.animation = 'none';
    });
    document.querySelector('.slide' + slideIndex).style.display = 'block';
    document.querySelector('.slide' + slideIndex).style.animation = 'slideAnimation 1s';
    presentSlideIndexCount.textContent = slideIndex;

    document.querySelectorAll('.slide_count_2 div').forEach(countDiv => {
        if(firstSlide === 1){
            countDiv.style.backgroundColor = '#999';
        }else{
            countDiv.style.backgroundColor = '#0079e9';
        }   
    });
    if(firstSlide === 1){
        document.querySelector('.count_'+ slideIndex).style.backgroundColor = '#000';
    }else{
        document.querySelector('.count_'+ slideIndex).style.backgroundColor = '#fff';
    }
    
}
totalSlideIndexCount.textContent = lastSlide;

function nextSlide() {
    firstSlide = firstSlide === lastSlide ? 1 : firstSlide + 1;
    showSlide(firstSlide);
    resetAutoSlide();
}

function prevSlide() {
    firstSlide = firstSlide === 1 ? lastSlide : firstSlide - 1;
    showSlide(firstSlide);
    resetAutoSlide();
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
    if(!slideTrigger){
        slideTrigger = true;
        document.querySelector('.stop_slide_btn div:nth-child(1)').style.display = 'block';
        document.querySelector('.stop_slide_btn div:nth-child(2)').style.display = 'block';
        document.querySelector('.stop_slide_btn div:nth-child(3)').style.display = 'none';
    }
}


function slideOnOff() {
    if (slideTrigger) {
        clearInterval(autoSlideInterval); // 자동 슬라이드 타이머 제거 (자동 슬라이드 꺼짐)
        slideTrigger = false; // 자동 슬라이드 상태 변경 (꺼짐)
        document.querySelector('.stop_slide_btn div:nth-child(1)').style.display = 'none';
        document.querySelector('.stop_slide_btn div:nth-child(2)').style.display = 'none';
        document.querySelector('.stop_slide_btn div:nth-child(3)').style.display = 'block';
    } else {
        resetAutoSlide(); // 자동 슬라이드 타이머 재설정 (자동 슬라이드 켜짐)
        slideTrigger = true; // 자동 슬라이드 상태 변경 (켜짐)
        document.querySelector('.stop_slide_btn div:nth-child(1)').style.display = 'block';
        document.querySelector('.stop_slide_btn div:nth-child(2)').style.display = 'block';
        document.querySelector('.stop_slide_btn div:nth-child(3)').style.display = 'none';
    }
}

document.querySelector(".next").addEventListener('click', nextSlide);
document.querySelector(".prev").addEventListener('click', prevSlide);
document.querySelector(".stop_slide").addEventListener('click', slideOnOff)

showSlide(firstSlide);