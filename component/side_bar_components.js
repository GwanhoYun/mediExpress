class Project3SideBar extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({ mode: 'open' });
        let style = document.createElement('style');

        style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');

        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: "Noto Sans KR", sans-serif;
        }

        .side_bar {
            position: fixed;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            top: 50%;
            right: 30px;
            transform: translateY(-50%);
            padding: 5px;
            height: 300px;
            width: 50px;
            z-index : 99;
        }

        .quick_menu {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
        }

        .texts{
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            right: 60px;
            width: 0px;
            height: 40px;
            border-radius: 10px;
            background-color: #7FBCF4;
            color: #fff;
            overflow: hidden;
            cursor: pointer;
        }

        .quick_menu:hover .texts{
            animation: quickMenuAnimation 0.2s forwards;
        }

        @keyframes quickMenuAnimation{
            0%{
                width: 0px;
                opacity: 0;
            }

            1%{
                width: 100px;
                opacity: 0;
            }
            100%{
                width: 100px;
                opacity: 1;
            }

        }   
        `;

        shadow.innerHTML = `
    <div>
        <div class="side_bar">
            <div class="quick_menu">
                <div class="texts">
                    <p>홈으로</p>
                </div>
                <div class="icons">
                    <a href="index.html">
                        <img class="icon" src="img/home_icon.png" alt="홈으로">
                    </a>
                </div>
            </div>
            <div class="quick_menu">
                <div class="texts">
                    <p>맨 위로</p>
                </div>
                <div class="icons">
                    <a href="#top">
                        <img class="icon" src="img/top_icon.png" alt="맨 위로">
                    </a>
                </div>
            </div>
            <div class="quick_menu">
                <div class="texts">
                    <p>마이페이지</p>
                </div>
                <div class="icons">
                    <a href="mypage.html">
                        <img class="icon" src="img/mypage_icon.png" alt="마이페이지">
                    </a>
                </div>
            </div>
        </div>
    </div>
        `;
        shadow.appendChild(style);

    }
}
customElements.define('side-bar', Project3SideBar);
