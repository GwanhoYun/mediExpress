document.addEventListener("DOMContentLoaded", function() {
    // index는 1부터 시작하므로 1부터 시작하는 루프를 작성
    for (let i = 1; ; i++) {
        // price_[index] 요소를 찾음
        const priceElement = document.querySelector(`.price_${i}`);
        if (!priceElement) break; // 더 이상 요소가 없으면 루프를 종료

        // saving_point_[index] 요소를 찾음
        const savingPointElement = document.querySelector(`.saving_point_${i}`);
        if (!savingPointElement) break;
        // price 값을 가져와서 1/100으로 계산
        const priceValue = parseFloat(priceElement.textContent);
        const savingPointValue = Math.ceil(priceValue / 100);

        // 계산된 값을 saving_point 요소에 설정
        savingPointElement.textContent = savingPointValue;
    }
});