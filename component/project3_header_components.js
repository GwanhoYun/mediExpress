class Project3Header extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');

        style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
            
            *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: "Noto Sans KR", sans-serif;
            font-size: 1em;
            }

            @font-face {
                font-family: 'fonts';
                src: url('fonts/OpenSans-Regular.ttf')format('truetype');
                font-style: normal;
                unicode-range: U+0041-005A, U+0061-007A;
            }

            @font-face {
                font-family: 'fonts';
                src: url('fonts/NotoSansKR-Regular.ttf')format('truetype');
                font-style: normal;
                unicode-range: U+AC00-D7A3, U+0030-0039;
            }

            @font-face {
                font-family: 'fonts';
                src: url('fonts/NotoSansJP-Regular.ttf')format('truetype');
                unicode-range: U+3041-3096, U+309D, U+309E, U+30A1-30FA, U+30FC, U+4E00-9FEA;
            }

            header {
                display: grid;
                grid-row: 1fr;
                width: calc(100vw - (100vw - 100%));
                background-color: #fff;
            }

            .header_top {
                width: 100%;
                border-bottom: 1px solid #000;
            }

            .logo {
                display: flex;
                justify-content: center;
                width: 200px;
            }

            .header_top_width {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 1440px;
                height: 110px;
                margin: 0 auto;
            }

            .header_top .search {
                position: relative;
                display: flex;
            }

            .header_top .search input {
                width: 538px;
                height: 58px;
                border: 4px solid #0079e9;
                border-radius: 15px;
                padding-left: 30px;
                font-size: 1em;
                font-weight: 600;
                outline: none;
            }

            .header_top .search_icon {
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 90px;
                height: 58px;
                right: 0;
                background-color: #0079e9;
                border-radius: 15px;
                -webkit-user-select: none;
                -webkit-user-drag: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none
            }

            .header_top .search_icon:hover {
                background-color: #359dff;
                border: 4px solid #0079e9;
                cursor: pointer;
            }

            .header_top .search_icon:active {
                background-color: rgb(13, 105, 190);
                border: 4px solid #0079e9;
            }

            .header_top .side_menu_top {
                display: flex;
                gap: 20px;
            }

            .header_top .side_menu_top a {
                width: 92px;
                text-align: center;
                font-size: 1em;
                font-weight: bold;
                color: #000;
                text-decoration: none;
            }

            .header_top .side_menu_top a:nth-child(2) {
                color: #0079e9;
            }

            .header_bottom {
                position: relative;
                width: 100%;
                border-bottom: 1px solid #000;
            }

            .header_bottom_width {
                position: relative;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 1440px;
                height: 70px;
                margin: 0 auto;
            }

            .header_bottom .header_menu_container {
                display: flex;
                justify-content: space-between;
                text-align: center;
                width: 538px;
                gap: 20px;
            }

            .menu_titel {
                font-size: 1.05em;
                font-weight: bold;
                cursor: pointer;
                position: relative;
                display: inline-block;

            }

            .menu_titel::after {
                display: block;
                content: '';
                position: absolute;
                left: 0;
                bottom: -2px;
                width: 100%;
                height: 10px;
                background-color: #59B9FF;
                opacity: 0.3;
                transform: scaleX(0);
                transition: transform 0.2s ease-in-out;
                transform-origin: 0% 50%;
            }

            .menu_titel:hover::after {
                transform: scaleX(1);
            }


            .menu_list {
                position: absolute;
                display: none;
                z-index: 99;
                background-color: #fff;
                height: auto;
                width: 200px;
                text-align: left;
                border: 2px solid #b1b1b1;
                border-radius: 5px;
            }

            .menu_1:hover .menu_list,
            .menu_2:hover .menu_list,
            .menu_3:hover .menu_list,
            .menu_4:hover .menu_list,
            .menu_5:hover .menu_list {
                margin-top: 2px;
                display: block;
            }

             .menu_list a{
                text-decoration: none;
                color: #000;
             }

            .menu_list li {
                padding: 5px;
                background-color: #fff;
                cursor: pointer;
            }

            .menu_list li:hover{
                background-color: #59B9FF;
            }
            
            .menu_list li:hover a{
                color: #fff;
            }


            .all_menu_list {
                z-index: 99;
                position: absolute;
                display: none;
                top: -1px;
                width: 1440px;
                border: 1px solid #000;
                background-color: #fff;
                user-select: none;
            }

            .all_menu_list_top_width {
                width: 1440px;
                border-bottom: 1px solid #000;
            }

            @keyframes onAllMenu {
                0% {
                    height: 0px;
                }

                100% {
                    height: 540px;

                }
            }

            @keyframes offAllMenu {
                0% {
                    height: 540px;

                }

                100% {
                    height: 0px;
                }
            }

            .all_menu_controler {
                width: 200px;
                display: flex;
                background-color: #fff;
            }

            .all_menu_controler h3 {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 130px;
                height: 70px;
                border-right: 1px solid #7B7B7B;
                cursor: pointer;
            }

            .all_menu_detail_list {
                display: flex;
                justify-content: center;
                gap: 60px;
                overflow-y: scroll;
            }

            .all_menu_detail_list div {
                width: 200px;
            }

            .all_menu_detail_list h3 {
                font-size: 1.25em;
                margin: 10px 0;
                border-bottom: 1px solid #7B7B7B;
                cursor: pointer;
            }

            .all_menu_detail_list a {
                font-size: 1em;
                padding: 5px 0;
                background-color: transparent;
                cursor: pointer;
                color: #000;
                text-decoration: none;
            }

            .all_menu_detail_list a:hover {
                font-size: 1em;
                background-color: #93cbff;
                color: #fff;
            }

            .all_menu_detail_list div h3,
            .all_menu_detail_list div a {
                display: block;
            }


            .all_menu_container {
                display: flex;
                user-select: none;
            }

            .menu_icon {
                position: relative;
                width: 70px;
                height: 70px;
                background-color: #59B9FF;
            }

            .menu_icon div:nth-child(1),
            .menu_icon div:nth-child(2),
            .menu_icon div:nth-child(3) {
                position: absolute;
                left: 45%;
                width: 30px;
                height: 4px;
                background-color: #fff;
                margin: auto;
            }

            .menu_icon div:nth-child(1) {
                top: 23px;
            }

            .menu_icon div:nth-child(2) {
                top: 33px;
            }

            .menu_icon div:nth-child(3) {
                top: 43px;
            }

            .all_menu_container:hover .menu_icon div:nth-child(1) {
                transform: rotate(45deg);
                width: 20px;
                left: 45%;
                top: 42px;
                transition: ease-in-out 0.4s;
            }

            .all_menu_container:hover .menu_icon div:nth-child(2) {
                transform: rotate(270deg);
                width: 25px;
                left: 51%;
                top: 27px;
                transition: ease-in-out 0.4s;
            }

            .all_menu_container:hover .menu_icon div:nth-child(3) {
                transform: rotate(135deg);
                width: 20px;
                left: 64%;
                top: 42px;
                transition: ease-in-out 0.4s;
            }

            .all_menu_container:not(:hover) .menu_icon div:nth-child(3) {
                transition: ease-in-out 0.4s;
            }

            .all_menu_container:not(:hover) .menu_icon div:nth-child(1) {
                transition: ease-in-out 0.4s;
            }

            .all_menu_container:not(:hover) .menu_icon div:nth-child(2) {
                transition: ease-in-out 0.4s;
            }

            .menu_icon_2 {
                position: relative;
                width: 70px;
                height: 70px;
                background-color: #fff;
            }

            .menu_icon_2 div:nth-child(1),
            .menu_icon_2 div:nth-child(2),
            .menu_icon_2 div:nth-child(3) {
                position: absolute;
                left: 45%;
                width: 30px;
                height: 4px;
                background-color: #000;
                margin: auto;
            }

            .menu_icon_2 div:nth-child(1) {
                top: 23px;
            }

            .menu_icon_2 div:nth-child(2) {
                top: 33px;
            }

            .menu_icon_2 div:nth-child(3) {
                top: 43px;
            }

            .all_menu_controler:hover .menu_icon_2 div:nth-child(1) {
                transform: rotate(225deg);
                width: 30px;
                top: 33px;
                left: 45%;
                transition: ease-in-out 0.4s;
            }

            .all_menu_controler:hover .menu_icon_2 div:nth-child(2) {
                transform: rotate(360deg);
                opacity: 0;
                transition: ease-in-out 0.3s;
            }

            .all_menu_controler:hover .menu_icon_2 div:nth-child(3) {
                transform: rotate(315deg);
                width: 30px;
                top: 33px;
                left: 45%;
                transition: ease-in-out 0.4s;
            }

            .all_menu_controler:not(:hover) .menu_icon_2 div:nth-child(1) {
                transition: ease-in-out 0.4s;
            }

            .all_menu_controler:not(:hover) .menu_icon_2 div:nth-child(2) {
                transition: ease-in-out 0.3s;
            }

            .all_menu_controler:not(:hover) .menu_icon_2 div:nth-child(3) {
                transition: ease-in-out 0.4s;
            }

            .all_menu_container p {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 130px;
                height: 70px;
                gap: 35px;
                background-color: #59B9FF;
                color: #fff;
                font-size: 1em;
                font-weight: bold;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }

            .header_menu_container div ul li {
                list-style: none;
            }

            .side_menu_bottom {
                display: flex;
                gap: 20px;
                width: 316px;
            }

            .side_menu_bottom a {
                width: 92px;
                text-align: center;
                color: #0079e9;
                font-size: 1em;
                font-weight: bold;
                cursor: pointer;
            }

        `;

        const template = document.createElement('template');
        template.innerHTML = `
        <header id="top">
        <div class="header_top">
            <div class="header_top_width">
                <div class="logo">
                    <a href="index.html"><img src="img/logo.png" alt="logo"></a>
                </div>
                <div class="search">
                    <input type="text" placeholder="찾으시는 상품이 있으신가요?">
                    <div class="search_icon">
                        <img src="img/search_icon.png">
                    </div>
                </div>
                <div class="side_menu_top">
                    <a href="#">로그인</a>
                    <a href="#">회원가입</a>
                    <a href="mypage.html">마이페이지</a>
                </div>
            </div>
        </div>
        <div class="header_bottom">
            <div class="header_bottom_width">
                <div class="all_menu_container">
                    <div class="menu_icon">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p>전체 메뉴</p>
                </div>
                <div class="all_menu_list">
                    <div class="all_menu_list_top_width">
                        <div class="all_menu_controler">
                            <div class="menu_icon_2">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <h3 class="">메뉴 닫기</h3>
                        </div>
                    </div>
                    <div class="all_menu_detail_list">
                        <div>
                            <h3>의료소모품</h3>
                            <a href="category_1.html">주사기/주사침</a>
                            <a>거즈/붕대/솜</a>
                            <a>반창고/테이프</a>
                            <a>수액용품/정맥카테터</a>
                            <a>소독제/소독용품</a>
                            <a>진찰/검사/페이퍼</a>
                            <a>수술/처치</a>
                            <a>엑스레이 용품</a>
                            <a>카테터/튜브/백</a>
                            <a>트레이/철제/운반용품</a>
                            <a>린넨/글러브</a>
                            <a>봉합사/봉합침</a>
                            <a>외과용품</a>
                            <a>실버용품</a>
                            <a>한방/기타</a>
                        </div>
                        <div>
                            <h3>수술용품</h3>
                            <a>크램프</a>
                            <a>후크</a>
                            <a>론저</a>
                            <a>핀셋</a>
                            <a>가위</a>
                            <a>니들홀더</a>
                            <a>겸자</a>
                            <a>리트렉터</a>
                            <a>스펙큘럼</a>
                            <a>컷터</a>
                            <a>엘레베이터</a>
                            <a>석션튜브</a>
                            <a>큐렛</a>
                            <a>오스테도톰/가우치/치젤</a>
                            <a>펀치</a>
                            <a>기타</a>
                        </div>
                        <div>
                            <h3>의료기기</h3>
                            <a>혈압/혈당계</a>
                            <a>측정기</a>
                            <a>네블라이저/석션기</a>
                            <a>살균/멸균/소독기</a>
                            <a>기타</a>
                        </div>
                        <div>
                            <h3>의약품</h3>
                            <a>수액</a>
                            <a>급여주사</a>
                            <a>비급여주사</a>
                            <a>백신</a>
                            <a>경구제</a>
                            <a>외용제</a>
                            <a>기타</a>
                        </div>
                        <div>
                            <h3>전산/사무용품</h3>
                            <a>처방전</a>
                            <a>용지</a>
                        </div>
                    </div>
                </div>
                <div class="header_menu_container">
                    <div class="menu_1">
                        <div>
                            <a class="menu_titel">의료소모품</a>
                        </div>
                        <ul class="menu_list">
                            <li><a href="category_1.html">주사기/주사침</a></li>
                            <li><a>거즈/붕대/솜</a></li>
                            <li><a>반창고/테이프</a></li>
                            <li><a>수액용품/정맥카테터</a></li>
                            <li><a>소독제/소독용품</a></li>
                            <li><a>진찰/검사/페이퍼</a></li>
                            <li><a>수술/처치</a></li>
                            <li><a>엑스레이 용품</a></li>
                            <li><a>카테터/튜브/백</a></li>
                            <li><a>트레이/철제/운반용품</a></li>
                            <li><a>린넨/글러브</a></li>
                            <li><a>봉합사/봉합침</a></li>
                            <li><a>외과용품</a></li>
                            <li><a>실버용품</a></li>
                            <li><a>한방/기타</a></li>
                        </ul>
                    </div>
                    <div class="menu_2">
                        <div>
                            <a class="menu_titel">수술용품</a>
                        </div>
                        <ul class="menu_list">
                            <li><a>크램프</a></li>
                            <li><a>후크</a></li>
                            <li><a>론저</a></li>
                            <li><a>핀셋</a></li>
                            <li><a>가위</a></li>
                            <li><a>니들홀더</a></li>
                            <li><a>겸자</a></li>
                            <li><a>리트렉터</a></li>
                            <li><a>스펙큘럼</a></li>
                            <li><a>컷터</a></li>
                            <li><a>엘레베이터</a></li>
                            <li><a>석션튜브</a></li>
                            <li><a>큐렛</a></li>
                            <li><a>오스테도톰/가우치/치젤</a></li>
                            <li><a>펀치</a></li>
                            <li><a>기타</a></li>
                        </ul>
                    </div>
                    <div class="menu_3">
                        <div>
                            <a class="menu_titel">의료기기</a>
                        </div>
                        <ul class="menu_list">
                            <li><a>혈압/혈당계</a></li>
                            <li><a>측정기</a></li>
                            <li><a>네블라이저/석션기</a></li>
                            <li><a>살균/멸균/소독기</a></li>
                            <li><a>기타</a></li>
                        </ul>
                    </div>
                    <div class="menu_4">
                        <div>
                            <a class="menu_titel">의약품</a>
                        </div>
                        <ul class="menu_list">
                            <li><a>수액</a></li>
                            <li><a>급여주사</a></li>
                            <li><a>비급여주사</a></li>
                            <li><a>백신</a></li>
                            <li><a>경구제</a></li>
                            <li><a>외용제</a></li>
                            <li><a>기타</a></li>
                        </ul>
                    </div>
                    <div class="menu_5">
                        <ul>
                            <li>
                                <a class="menu_titel">전산/세무</a>
                                <ul class="menu_list">
                                    <li><a>처방전</a></li>
                                    <li><a>용지</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="side_menu_bottom">
                    <a>특가 상품</a>
                    <a>견적 문의</a>
                </div>
            </div>
        </div>
    </header>
        `;
        // Shadow DOM에 스타일과 HTML 추가
        shadow.appendChild(style);
        shadow.appendChild(template.content.cloneNode(true));

        // Shadow DOM 내부의 요소 선택
        const allMenuBtn_1 = shadow.querySelector('.all_menu_container');
        const allMenuBtn_2 = shadow.querySelector('.all_menu_controler');
        const activeAllMenu = shadow.querySelector('.all_menu_list');
        const menuButton = shadow.querySelector('.all_menu_container');

        function activateAllMenu() {
            const activeAllMenu = shadow.querySelector('.all_menu_list');
            if (activeAllMenu.style.display === "none" || activeAllMenu.style.display === "") {
                activeAllMenu.style.display = "grid";
                activeAllMenu.style.animation = "onAllMenu 1s forwards";
            } else {
                activeAllMenu.style.display = "none";
                activeAllMenu.style.animation = "offAllMenu 1s forwards";
            }
        }
        shadow.addEventListener('click', function (event) {
            if (!activeAllMenu.contains(event.target) && !menuButton.contains(event.target)) {
                activeAllMenu.style.display = "none";
            }
        });
        

        allMenuBtn_1.addEventListener('click', activateAllMenu);
        allMenuBtn_2.addEventListener('click', activateAllMenu);
    }
}

customElements.define('project3-header', Project3Header);
