function listOnOff(){
    const itemList = document.querySelector('.option_list');
    itemList.style.display = (itemList.style.display === "none" || itemList.style.display === "") ? "block" : "none";
}

let cart = [];
let totalPrice = 0;

function selectOption(option) {
    const itemName = option.getAttribute('data-name');
    const itemPrice = parseInt(option.getAttribute('data-price'), 10);

    // 중복 아이템 확인
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        // 수량 증가
        existingItem.count += 1;
        // 총 가격 갱신
        totalPrice += itemPrice;
    } else {
        // 새 아이템 추가
        cart.push({
            name: itemName,
            price: itemPrice,
            count: 1
        });
        // 총 가격 갱신
        totalPrice += itemPrice;
    }

    // 옵션 목록 토글
    listOnOff();
    
    // 장바구니와 총 가격 업데이트
    updateCart();
    updateTotalPrice();
}

function updateCart() {
    const cartContainer = document.querySelector('.cart_container');
    cartContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart_item');
        itemDiv.innerHTML = `
            <div>
                <p>${item.name}</p>
                <label for="item_count_${index}"></label>
            </div>
            <div>
                <input type="number" id="item_count_${index}" value="${item.count}" min="1" max="99" onchange="updateItemCount(${index}, this.value)">
            </div>
            <div>
                <p>${item.price * item.count}원</p>
                <button onclick="removeItem(${index})">
                    <div></div>
                    <div></div>
                </button>
            </div>
        `;
        cartContainer.appendChild(itemDiv);
    });
}

function updateItemCount(index, newCount) {
    const item = cart[index];
    const oldCount = item.count;
    item.count = parseInt(newCount, 10);

    // 총 가격 갱신
    totalPrice += (item.count - oldCount) * item.price;

    // 장바구니와 총 가격 업데이트
    updateCart();
    updateTotalPrice();
}

function removeItem(index) {
    const item = cart[index];
    totalPrice -= item.price * item.count;
    cart.splice(index, 1);

    // 장바구니와 총 가격 업데이트
    updateCart();
    updateTotalPrice();
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('total_price');
    totalPriceElement.textContent = totalPrice;
}

document.addEventListener('click', function(event) {
    const listOnOff = document.querySelector('.option_list');
    const selectBtn = document.querySelector('.select_btn');

    if (listOnOff.style.display === 'block' && !listOnOff.contains(event.target) && !selectBtn.contains(event.target)) {
        listOnOff.style.display = 'none';
    }
});
