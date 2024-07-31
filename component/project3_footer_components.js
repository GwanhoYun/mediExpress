class Project3Footer extends HTMLElement {
    constructor() {
        super();
        let shadow = this.attachShadow({ mode: 'open' });
        let style = document.createElement('style');

        style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
            
            *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: "Noto Sans KR", sans-serif;
            font-size: 1em;
            }

           footer {
                display: flex;
                justify-content: center;
                width: calc(100vw - (100vw - 100%));
                background-color: #d3d3d3;
            }

            .footer_width {
                position: relative;
                display: flex;
                background-color: #fff;
                border: 1px solid #b1b1b1;
                width: 1440px;
            }

            .company_tel {
                padding: 20px 50px;
                border-right: 1px solid #b1b1b1;
            }

            .company_tel div:nth-child(1) {
                font-size: 1.5em;
                font-weight: bold;
                margin-bottom: 20px;
            }

            .company_tel div:nth-child(1) span:nth-child(2) {
                color: #0079e9;
            }

            .company_info {
                display: grid;
                grid-template-columns: 1fr;
                justify-content: center;
                align-items: center;
                padding: 20px 0;
                margin: 0 auto;
            }

            .company_info div:nth-child(1) {
                display: flex;
                justify-content: space-around;
            }

            .company_info div:nth-child(1) a {
                color: #000;
                text-decoration: none;
                margin-bottom: 20px;
            }

            .company_info div:nth-child(1) a:hover {
                color: #e90000;
                text-decoration: underline;
            }

            .company_info div:nth-child(2) p {
                margin-bottom: 5px;
            }
        `;
        const footer = document.createElement('footer');
        shadow.innerHTML = `
    <footer>
        <div class="footer_width">
            <div class="company_tel">
                <div>
                    <span>고객센터</span>
                    <span>1600 - 0000</span>
                </div>
                <div>
                    <span>운영시간 :</span>
                    <span> 평일 08:00 ~ 18:00</span>
                </div>
                <div>
                    <span>점심시간 :</span>
                    <span> 12:00 ~ 13:00</span>
                </div>
                <div>
                    <span>휴무일자 :</span>
                    <span> 토요일, 일요일, 법정공휴일</span>
                </div>
            </div>
            <div class="company_info">
                <div>
                    <a href="#">홈</a>
                    <a href="#">회사 소개</a>
                    <a href="#">이용 약관</a>
                    <a href="#"><b>개인정보처리방침</b></a>
                    <a href="#">이용안내</a>
                    <a href="#">광고/제휴 문의</a>
                </div>
                <div>
                    <p>상호명 : MEDI EXPRESS | 대표 : 곽두팔 | 주소 : 사랑시 고백구 행복1길 12-1</p>
                    <p>대표번호 : 1600 - 0000 | 실제 존재하는 사이트가 아닙니다. | 통신판매업신고 : 제 2024-사랑시 고백구청-1호</p>
                    <p>COPYRIGHT 2024 MEDI EXPRESS ALL RIGHT RESERVED</p>
                </div>
            </div>
        </div>
    </footer>
        `;
        shadow.appendChild(footer);
        shadow.appendChild(style);
    }
}
customElements.define('project3-footer', Project3Footer);
