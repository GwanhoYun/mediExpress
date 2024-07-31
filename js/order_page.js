// 숫자에 천 단위 구분 기호를 추가하는 함수
function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 포인트와 총 금액을 비교하고 오류 메시지를 표시하는 함수
function validatePoints() {
    const totalItemPriceElement = document.querySelector('.total_item_price');
    const totalItemPrice = parseFloat(totalItemPriceElement.textContent.replace(/,/g, '')) || 0;
    
    const pointInput = document.querySelector('.point_input');
    const inputPoint = parseFloat(pointInput.value) || 0;
    
    const errorMessage = document.querySelector('.error_message');

    if (inputPoint > totalItemPrice) {
        // 포인트가 총 금액을 초과하는 경우
        errorMessage.style.display = 'block';
        pointInput.value = totalItemPrice; // 입력값을 총 금액으로 설정
    } else {
        // 포인트가 총 금액을 초과하지 않는 경우
        errorMessage.style.display = 'none';
    }

    // 포인트가 초과된 경우 자동으로 포인트 재계산
    updatePricesAndPoints();
}

// 포인트 입력 필드의 값이 변경될 때마다 검증
document.querySelector('.point_input').addEventListener('input', function() {
    // 음수 입력 방지
    this.value = this.value.replace(/[^0-9]/g, ''); // 숫자 외의 모든 문자 제거
    validatePoints();
});

// 쿠폰 선택 시 호출되는 함수
document.querySelector('.select_coupon').addEventListener('change', function() {
    updatePricesAndPoints();
});

// 페이지 로드 시 총 물건 가격, 할인, 결제 금액 및 적립 포인트를 초기화합니다
document.addEventListener("DOMContentLoaded", function () {
    let sum = 0;

    // index는 1부터 시작하므로 1부터 시작하는 루프를 작성
    for (let i = 1; ; i++) {
        // price_[index] 요소를 찾음
        const priceElement = document.querySelector(`.price_${i}`);
        if (!priceElement) break; // 더 이상 요소가 없으면 루프를 종료

        // saving_point_[index] 요소를 찾음
        const savingPointElement = document.querySelector(`.saving_point_${i}`);
        if (!savingPointElement) break;

        // price 값을 가져와서 총 가격을 계산
        const priceValue = parseFloat(priceElement.textContent.replace(/,/g, ''));
        if (!isNaN(priceValue)) {
            sum += priceValue;
        }

        // 포인트 계산 (가격의 1%로 가정)
        const savingPointValue = Math.ceil(priceValue / 100);

        // 총 물건 가격 요소에 총 가격을 설정
        const totalItemPriceElement = document.querySelector('.total_item_price');
        if (totalItemPriceElement) {
            totalItemPriceElement.textContent = formatNumber(sum);
        }

        // saving_point 요소에 포인트 값을 설정
        savingPointElement.textContent = formatNumber(savingPointValue);
    }

    // 할인 가격 및 결제 금액을 계산 및 업데이트
    updatePricesAndPoints();
});

// 가격과 포인트를 업데이트하는 함수
function updatePricesAndPoints() {
    // 총 물건 가격을 숫자로 가져옵니다
    const totalItemPriceText = document.querySelector('.total_item_price').textContent;
    const totalItemPrice = parseFloat(totalItemPriceText.replace(/,/g, '')) || 0;

    // 쿠폰 선택 요소를 가져오고 선택된 값을 숫자로 변환합니다
    const selectedCouponElement = document.querySelector('.select_coupon');
    const selectedCouponValue = parseFloat(selectedCouponElement.value) || 0;

    // 사용자의 포인트를 가져오고 숫자로 변환합니다
    const inputPoint = parseFloat(document.querySelector('.point_input').value) || 0;

    // 포인트 할인 금액을 설정합니다
    const usedPointDiscountPriceElement = document.querySelector('.used_point_discount_price');
    const usedPointDiscountPrice = Math.min(inputPoint, totalItemPrice);
    if (usedPointDiscountPriceElement) {
        usedPointDiscountPriceElement.textContent = formatNumber(usedPointDiscountPrice.toFixed(0));
    }

    // 쿠폰 할인 금액을 계산합니다
    const discountPriceElement = document.querySelector('.discount_price');
    let couponDiscountPrice = 0;

    if (selectedCouponValue > 0) {
        // 쿠폰이 선택된 경우: (총 가격 - 포인트) * 쿠폰 할인율
        couponDiscountPrice = (totalItemPrice - usedPointDiscountPrice) * selectedCouponValue;
    }
    if (discountPriceElement) {
        discountPriceElement.textContent = formatNumber(couponDiscountPrice.toFixed(0));
    }

    // 결제 금액 계산 및 업데이트
    const paymentAmountElement = document.querySelector('.total_price');
    const discountAmountValue = parseFloat(discountPriceElement.textContent.replace(/,/g, '')) || 0;
    const finalPrice = totalItemPrice - usedPointDiscountPrice - discountAmountValue;
    if (paymentAmountElement) {
        paymentAmountElement.textContent = formatNumber(finalPrice.toFixed(0));
    }

    // 총 적립 포인트 계산 및 업데이트
    const totalSavingPointElement = document.querySelector('.total_saving_point');
    if (totalSavingPointElement) {
        const savingPointValue = (finalPrice * 0.01).toFixed(0); // 결제 금액의 1%를 적립 포인트로 계산
        totalSavingPointElement.textContent = formatNumber(savingPointValue);
    }
}
