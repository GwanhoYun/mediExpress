//하단 상품 카테고리 변경 시 보이는 아이템을 변경하는 함수
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
        item.style.display = (idx === index) ? "flex" : "none"; //이미지를 보이거나 숨겨요
    });

    buttonStyle.forEach((btn, idx) => { //버튼 색상을 바꿔요
        btn.style.borderTop = (idx === index) ? "3px solid #0079e9" : "3px solid #7B7B7B";
        btn.style.borderBottom = (idx === index) ? "3px solid #0079e9" : "3px solid #7B7B7B";
        btn.style.color = (idx === index) ? "#0079e9" : "#7B7B7B";
    })

};


//전체 메뉴 클릭 시 메뉴가 나타나게 하는 함수

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

document.addEventListener('click', function(event) { //전체 메뉴에 클릭 이벤트를 추가헤요
    const activeAllMenu = document.querySelector('.all_menu_list');
    const menuButton = document.querySelector('.all_menu_container p');

    if (activeAllMenu && menuButton) {
        if (!activeAllMenu.contains(event.target) && !menuButton.contains(event.target)) {
            activeAllMenu.style.display = "none";
        }
    }
});

//캐러셀 자동 이미지 변경 등에 관한 함수

let showSlideIndex = 1; //현재 보여지는 슬라이드 인덱스, 몆번째 슬라이드인지 확인할 수 있어요
let slideTrigger = true; //캐러샐 슬라이드 인덱스를 사용자가 수동으로 이동시킬 수 있게하고, 자동 이미지 변경 on off버튼 트리거역할을 해요
let autoSlideInterval = setInterval(nextSlide, 5000); //5초마다 다음 슬라이드로 이동해요
const slides = document.querySelectorAll(".slider-container li");
const lastSlide = slides.length; // 전체 슬라이드 인덱스 계산
const presentSlideIndexCount = document.querySelector(".present_slide_index");//몆번째 이미지가 재생되는지 보여주는 함수에요
const totalSlideIndexCount = document.querySelector(".total_slide_index");//전체 슬라이드가 몆개인지 보여주는 함수에요
const slideCount2Container = document.querySelector(".slide_count_2"); //페이지네이션 도트 관련된 함수에요
const slideCount2= document.querySelector(".slide_count_2 div"); //슬라이드 배경색에 따른 페이지네이션 도트 가시성을 위해 색상을 지정하는 함수에요

for(let i = 0; i < lastSlide; i++ ){
    const createSlideCount2 = document.createElement('div'); // 페이지네이션 도트 태그(<div>)를 정해요
    createSlideCount2.className = 'count_' + (i + 1); // 페이지네이션 도트 div의 className를 정해요
    slideCount2Container.appendChild(createSlideCount2);// ↑↑ 이거 ↑↑ 요소 생성해요 예: <div class="count_[index]">
    createSlideCount2.addEventListener('click', selectSlide);//click 이벤트 생성해요
}

function selectSlide(event) {
    const className = event.target.className; // 예: 'count_1'
    const slideIndex = parseInt(className.split('_')[1]); // '1'을 추출하여 숫자로 변환
    showSlideIndex = slideIndex; // showSlideIndex를 현재 슬라이드 인덱스로 설정
    showSlide(slideIndex); // 슬라이드 표시
    resetAutoSlide() //clearInterval로 "autoSlideInterval"의  setInterval(nextSlide, 5000);를 삭제하고 다시 생성해요
}                    //캐러셀 슬라이드를 수동으로 넘길 때 5초 쿨타임 진행을 삭제하고 다시 실행해서 슬라이드가 두 번 넘어가지 않도록 해요


function showSlide(slideIndex) {
    slides.forEach(slide =>{
        slide.style.display = 'none'; //모든 슬라이드를 숨겨요
        slide.style.animation = 'none'; //css에 지정된 애니메이션을 없에요
    });
    document.querySelector('.slide' + slideIndex).style.display = 'block';  //숨긴 슬라이드를 보여줘요
    document.querySelector('.slide' + slideIndex).style.animation = 'slideAnimation 1s'; //투명도가 1초동안 0에서 1로 변하는 애니메이션이에요 css에 있는 애니메이션이에요
    presentSlideIndexCount.textContent = slideIndex; //현재 몆번째 슬라이드인지 숫자로 보여줘요

    document.querySelectorAll('.slide_count_2 div').forEach(countDiv => { // 현재 인덱스 이외의 페이지네이션 도트 배경색 지정이에요
        if(showSlideIndex === 1){ //첫번째 슬라이드의 페이지네이션 도트위치 배경이 흰색이라 따로 지정해준거에요
            countDiv.style.backgroundColor = '#999'; //회색이에요
        }else{
            countDiv.style.backgroundColor = '#0079e9'; //연한 하늘색이에요
        }   
    });
    if(showSlideIndex === 1){ // 현재 인덱스의 페이지네이션 도트 색상이에요
        document.querySelector('.count_'+ slideIndex).style.backgroundColor = '#000'; // 완전 검은색이에요
    }else{
        document.querySelector('.count_'+ slideIndex).style.backgroundColor = '#fff'; // 완전 흰색이에요
    }
    
}
totalSlideIndexCount.textContent = lastSlide; //마지막 슬라이드의 번호를 보여줘요

function nextSlide() { //다음 슬라이드를 수동으로 넘기는 버튼의 onclick 이벤트에요
    showSlideIndex = showSlideIndex === lastSlide ? 1 : showSlideIndex + 1; // 현재 슬라이드 인덱스를 업데이트해요 마지막 슬라이드면 1로 돌아가고 아니면 인덱스를 +1해요
    showSlide(showSlideIndex); // 그 다음 슬라이드를 실행해요
    resetAutoSlide(); // 자동으로 슬라이드 넘기는 5초 쿨타임을 초기화해요
}

function prevSlide() {// 이전 슬라이드를 수동으로 넘기는 버튼의 onclick 이벤트에요
    showSlideIndex = showSlideIndex === 1 ? lastSlide : showSlideIndex - 1;
    showSlide(showSlideIndex);
    resetAutoSlide();
}

function resetAutoSlide() { // 5초마다 넘어가는 setInterval을 초기화해요
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
    if(!slideTrigger){ //만약 슬라이드를 정지한 상태로 수동 이동하면 정지가 풀리도록 하는 if문이에요
        slideTrigger = true; // 재생상태로 바꿔줘요
        document.querySelector('.stop_slide_btn div:nth-child(1)').style.display = 'block';// 정지 아이콘을 재생아이콘으로 변경해요
        document.querySelector('.stop_slide_btn div:nth-child(2)').style.display = 'block';
        document.querySelector('.stop_slide_btn div:nth-child(3)').style.display = 'none';
    }
}


function slideOnOff() {
    if (slideTrigger) {
        clearInterval(autoSlideInterval); // 자동 슬라이드를 꺼요
        slideTrigger = false; // 자동 슬라이드 상태 변경해요
        document.querySelector('.stop_slide_btn div:nth-child(1)').style.display = 'none';// 재생 아이콘을 정지 아이콘으로 변경해요
        document.querySelector('.stop_slide_btn div:nth-child(2)').style.display = 'none';
        document.querySelector('.stop_slide_btn div:nth-child(3)').style.display = 'block';
    } else {
        resetAutoSlide();
        slideTrigger = true;
        document.querySelector('.stop_slide_btn div:nth-child(1)').style.display = 'block';
        document.querySelector('.stop_slide_btn div:nth-child(2)').style.display = 'block';
        document.querySelector('.stop_slide_btn div:nth-child(3)').style.display = 'none';
    }
}

document.querySelector(".next").addEventListener('click', nextSlide);
document.querySelector(".prev").addEventListener('click', prevSlide);
document.querySelector(".stop_slide").addEventListener('click', slideOnOff)

showSlide(showSlideIndex);
