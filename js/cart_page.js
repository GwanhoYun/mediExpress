document.addEventListener("DOMContentLoaded", function() {
    // 숫자를 천 단위로 구분하여 포맷하는 헬퍼 함수
    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // 체크박스 및 전체 선택 기능 처리
    const checkboxes = document.querySelectorAll('.item_select');
    const selectAll = document.querySelector('.all_select');
    
    if (selectAll) {
        selectAll.addEventListener('change', function() {
            checkboxes.forEach(function(checkbox) {
                checkbox.checked = selectAll.checked; // 전체 선택/해제에 따라 체크박스 상태 변경
            });
        });
    }

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if (!checkbox.checked) {
                selectAll.checked = false; // 하나라도 체크 해제되면 전체 선택 해제
            } else {
                const allChecked = Array.from(checkboxes).every(function(cb) {
                    return cb.checked; // 모든 체크박스가 체크되었는지 확인
                });
                selectAll.checked = allChecked; // 모두 체크되면 전체 선택 체크
            }
        });
    });

    // 선택 삭제 버튼 클릭 시 처리
    const selectDeleteButton = document.querySelector('.cart_footer button');
    if (selectDeleteButton) {
        selectDeleteButton.addEventListener('click', function() {
            checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    const itemInfo = checkbox.closest('.item_info');
                    if (itemInfo) {
                        itemInfo.remove(); // 체크된 아이템 삭제
                    }
                }
            });
            updateTotalPrice(); // 총 가격 및 배송비 업데이트
        });
    }

    // 개별 삭제 버튼 클릭 시 처리
    const deleteButtons = document.querySelectorAll('.delete_item button');
    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const itemInfo = button.closest('.item_info');
            if (itemInfo) {
                itemInfo.remove(); // 해당 아이템 삭제
            }
            updateTotalPrice(); // 총 가격 및 배송비 업데이트
        });
    });

    // 총 아이템 가격 계산
    function updateTotalPrice() {
        let sum = 0; // 총 가격

        // 모든 가격 및 수량 요소를 순회
        const prices = document.querySelectorAll('.price');
        const numbers = document.querySelectorAll('.numbers');
        
        prices.forEach(function(priceElement, index) {
            const priceValue = parseFloat(priceElement.textContent);
            const numValue = parseFloat(numbers[index].textContent);
            
            // 유효한 숫자인지 확인하고 총합 계산
            if (!isNaN(priceValue) && !isNaN(numValue)) {
                sum += priceValue * numValue; // 각 아이템의 가격과 수량을 곱한 값을 총합에 추가
            }
        });

        // 총 가격 업데이트
        const totalItemsPriceElement = document.querySelector('.total_item_price');
        if (totalItemsPriceElement) {
            totalItemsPriceElement.textContent = formatNumber(sum); // 총 가격을 포맷하여 업데이트
        }

        // 배송비와 총 가격 계산 및 업데이트
        const deliveryElement = document.querySelector('.delivery_price');
        const totalPriceElement = document.querySelector('.total_price');
        
        // 쉼표 제거 후 총 아이템 가격을 숫자로 변환
        const totalItemsPrice = parseFloat(totalItemsPriceElement.textContent.replace(/,/g, '')) || 0;

        let deliveryPrice = 0;
        if (prices.length === 0) {
            deliveryPrice = 0; // 상품이 하나도 없으면 배송비 0
        } else {
            deliveryPrice = totalItemsPrice < 100000 ? 2500 : 0; // 가격이 100,000 미만이면 배송비 2500, 아니면 0
        }

        if (deliveryElement) {
            deliveryElement.textContent = formatNumber(deliveryPrice); // 배송비를 포맷하여 업데이트
        }

        const totalPrice = totalItemsPrice + deliveryPrice; // 총 가격 계산
        if (totalPriceElement) {
            totalPriceElement.textContent = formatNumber(totalPrice); // 총 가격을 포맷하여 업데이트
        }
    }

    // 페이지 로드 시 총 가격 및 배송비 계산
    updateTotalPrice();

    // 아이템 삭제 후 총 가격 및 배송비 업데이트
    const observer = new MutationObserver(updateTotalPrice);
    observer.observe(document.querySelector('.cart_main'), { childList: true, subtree: true });
});
