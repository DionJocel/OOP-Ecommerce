let name;
let size;
let price;
let total = 0;
let notEmpty = false;
let error = false;
let itemCounter = 0;

const dealContainer = [...document.querySelectorAll('.deal-container')];
const nxtBtn = [...document.querySelectorAll('.next')];
const preBtn = [...document.querySelectorAll('.prev')];
dealContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});

// PRODUCTS JAVASCRIPT NAKAKA BALIW // 

const popupTable = document.getElementById('cartPopupItems');
    if (popupTable) {
        popupTable.addEventListener('change', function(e) {
            if (e.target.classList.contains('item-selector')) {
                updateTotalDisplay();
            }
        });
    }

let totalAmount = document.getElementById("total");
totalAmount.innerHTML = total;

// MGA PRODUCTS KAINIS //
function addCartCap() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Captain America T Shirt Full Sleeves Black Tee";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }
        else if (size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 840;
            notEmpty = true;
        }
        else if (size == "XS") {
            alert('Sorry, this size is not available right now: ' + size);
            price = "";
            error = true;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            notEmpty = true;
            error = true;
        }

        if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('deal1.jpg', name, size, price)
    }
}
function addCartIronman() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Marvel Iron Man T Shirt";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 760;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }

        if (size == "XS") {
            price = price - 40;
        }
        else if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('deal2.jpg', name, size, price);
    }
}
function addCartThor() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Thor Mjolnir Black T Shirt";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 920;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }

        if (size == "XS") {
            price = price - 40;
        }
        else if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('deal3.jpg', name, size, price);
    }
}
function addCartBW() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Marvel Black Widow T Shirt";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 480;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }

        if (size == "XS") {
            price = price - 40;
        }
        else if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('deal4.jpg', name, size, price);
    }
}
function addCartHawkeye() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Marvel HawkEye Black T Shirt";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            notEmpty = true;
            error = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 576;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }

        if (size == "XS") {
            price = price - 40;
        }
        else if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('deal5.jpg', name, size, price);
    }
}
function addCartHulk() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Marvel CLassic The Incredible Hulk White T Shirt";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 640;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            notEmpty = true;
            error = true;
        }

        if (size == "XS") {
            price = price - 40;
        }
        else if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('deal6.jpg', name, size, price);
    }
}
function addCartHogw() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Harry Potter Hogwarts Design Tee";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            notEmpty = true;
            error = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 550;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            notEmpty = true;
            error = true;
        }

        if (size == "XS") {
            price = price - 40;
        }
        else if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('hp.avif', name, size, price);
    }
}
function addCartMarvel() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Marvel Logo Plain Black Tee";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 650;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }

        if (size == "XS") {
            price = price - 40;
        }
        else if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('marvel.png', name, size, price);
    }
}
function addCartHpalways() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Harry Potter Deathly Hallows Inspired TShirt";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 470;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }

        if (size == "XS") {
            price = price - 40;
        }
        else if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('hpalways.jpg', name, size, price);
    }
}
function addCartPlainBlack() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Plain Black T Shirt Cotton";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 180;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }

        if (size == "XS") {
            price = price - 40;
        }
        else if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('plainblack.jpg', name, size, price);
    }
}
function addCartPlainWhite() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Plain White T Shirt Cotton";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 120;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }

        if (size == "XS") {
            price = price - 40;
        }
        else if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('plainwhite.avif', name, size, price);
    }
}
function addCartPlainBrown() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Plain Zine Brown T Shirt Cotton";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 140;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }

        if (size == "XS") {
            price = price - 40;
        }
        else if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('plainbrown.webp', name, size, price);
    }
}
function addCartPlainBeige() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Plain Beige T Shirt Cotton";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            notEmpty = true;
            error = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 150;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }

        if (size == "XS") {
            price = price - 40;
        }
        else if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('plainbeige.avif', name, size, price);
    }
}
function addCartPinkCardigan() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Plus Button Up Drop Shoulder Cardigan";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            notEmpty = true;
            error = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 530;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            notEmpty = true;
            error = true;
        }

        if (size == "XS") {
            price = price - 40;
        }
        else if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('pinkcardigan.jpg', name, size, price);
    }
}
function addCartBeigeCardigan() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Beige Cardigan Buttons Crop Cardigan";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            notEmpty = true;
            error = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 530;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            notEmpty = true;
            error = true;
        }

        if (size == "XS") {
            price = price - 40;
        }
        else if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('beigecardigan.webp', name, size, price);
    }
}
function addCartWhiteTurtleneck() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Flannel Fabric Korean Style Long Sleeve Plain Turtleneck Pullover Top";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 120;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }

        if (size == "XS") {
            price = price - 40;
        }
        else if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('whiteturtleneck.webp', name, size, price);
    }
}
function addCartBlackTurtleneck() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Half Turtleneck Sweater Women Slim-fit Black";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            notEmpty = true;
            error = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 170;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }

        if (size == "XS") {
            price = price - 40;
        }
        else if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('blackturtleneck.webp', name, size, price);
    }
}
function addCartWhitePolo() {
    if (confirm('Are you sure you want to add this item to your cart?')) {

        name = "Ugmikdo Women's POLO Shirt V-Neck Short-Sleeved T-Shirt Solid Color top";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            notEmpty = true;
            error = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 125;
            notEmpty = true;
        }
        else {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }

        if (size == "XS") {
            price = price - 40;
        }
        else if (size == "S") {
            price = price - 20;
        }
        else if (size == "L") {
            price = price + 20;
        }
        else if (size == "XL") {
            price = price + 40;
        }

        updateBothCarts('whitepolo.webp', name, size, price);
    }
}


// BUTTONS TO JUSKO //
const MenuItems = document.getElementById('MenuItems');
const screenWidth = screen.width;

function menutoggle() {
    MenuItems.classList.toggle('show');
    if (MenuItems.style.opacity == "0") {
        MenuItems.style.opacity = "1";
        MenuItems.style.pointerEvents = "auto";
    }
    else {
        MenuItems.style.opacity = "0";
        MenuItems.style.pointerEvents = "none";
    }
}

function updateBothCarts(imgSrc, name, size, price, fromStorage = false) {
    if (error && !fromStorage) {
        error = false;
        return;
    }

    const table = document.getElementById('cartItems');
    const popupTable = document.getElementById('cartPopupItems');

    if (!table || !popupTable) {
        console.error("Cart tables not found!");
        return;
    }

    const itemId = itemCounter++;

    if (table) {
        const newRow = table.insertRow();
        newRow.id = `cartItem-${itemId}`;
        newRow.insertCell(0).innerHTML = `<img src='${imgSrc}'>`;
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        newRow.insertCell(4).innerHTML = `<button class="delete-btn" onclick="deleteItem(${itemId}, ${price})">Delete</button>`;
    }

    if (popupTable) {
        const popupRow = popupTable.insertRow();
        popupRow.id = `cartPopupItem-${itemId}`;
        popupRow.insertCell(0).innerHTML = `<input type="checkbox" class="item-selector" checked data-id="${itemId}">`;
        popupRow.insertCell(1).innerHTML = `<img src='${imgSrc}'>`;
        popupRow.insertCell(2).innerHTML = name;
        popupRow.insertCell(3).innerHTML = size;
        popupRow.insertCell(4).innerHTML = "₱" + price;
        popupRow.insertCell(5).innerHTML = `<button class="delete-btn" onclick="deleteItem(${itemId}, ${price})">Delete</button>`;
    }

    if (!fromStorage) {
        total += price;
        saveCartToStorage();
        updateCartCount();
    }

    updateTotalDisplay();
}

function deleteItem(itemId, itemPrice) {
    if (confirm('Are you sure you want to remove this item?')) {
        const row = document.getElementById(`cartItem-${itemId}`);
        const popupRow = document.getElementById(`cartPopupItem-${itemId}`);
        
        if (typeof itemPrice === 'undefined' && row) {
            const priceText = row.cells[3].textContent;
            itemPrice = parseFloat(priceText.replace('₱', '').replace(',', ''));
        }

        if (row) row.remove();
        if (popupRow) popupRow.remove();

        total -= itemPrice;
        updateTotalDisplay();

        notEmpty = document.getElementById("cartItems").rows.length > 0;

        if (!notEmpty) {
            error = false;
        }

        saveCartToStorage();
        updateCartCount();
    }
}

function updateTotalDisplay() {
    const totalElement = document.getElementById('total');
    const popupTotalElement = document.getElementById('popupTotal');

    const { total: selectedTotal } = getSelectedItems();
    
    if (isNaN(total) || error) {
        totalElement.innerHTML = "ERROR";
        popupTotalElement.innerHTML = "ERROR";
        totalElement.style.color = 'red';
        popupTotalElement.style.color = 'red';
    } else {
        totalElement.innerHTML = total.toFixed(2);
        totalElement.style.color = '#4CAF50';
        
        popupTotalElement.innerHTML = selectedTotal.toFixed(2);
        popupTotalElement.style.color = '#4CAF50';
    }
}

function removeItems() {
    if (notEmpty == true) {
        if (confirm('Are you sure you want to remove all of these items?')) {
            document.getElementById("cartItems").innerHTML = '';
            document.getElementById("cartPopupItems").innerHTML = '';
            total = 0;
            error = false;
            notEmpty = false;
            updateTotalDisplay();
            saveCartToStorage();
            updateCartCount();
        }
    }
}

function purchase() {
    const { items: selectedItems, total: selectedTotal } = getSelectedItems();
    
    if (selectedItems.length === 0) {
        alert('Please select at least one item to purchase');
        return;
    }

    if (confirm(`Are you sure you want to purchase the selected items? \nTotal amount: ₱${selectedTotal.toFixed(2)}`)) {
        selectedItems.forEach(itemId => {
            const row = document.getElementById(`cartItem-${itemId}`);
            if (row) {
                const priceText = row.cells[3].textContent;
                const price = parseFloat(priceText.replace('₱', '').replace(',', ''));
                total -= price;
            }
            
            const popupRow = document.getElementById(`cartPopupItem-${itemId}`);
            if (row) row.remove();
            if (popupRow) popupRow.remove();
        });

        notEmpty = document.getElementById("cartItems").rows.length > 0;
        if (!notEmpty) {
            error = false;
        }

        updateTotalDisplay();
        saveCartToStorage();
        updateCartCount();
        alert('Order successful! Your selected items have been purchased.');
    }
}

function saveCartToStorage() {
    const cartItems = [];
    const rows = document.getElementById("cartItems").rows;

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].cells;
        cartItems.push({
            imgSrc: cells[0].querySelector('img').src.split('/').pop(),
            name: cells[1].textContent,
            size: cells[2].textContent,
            price: parseFloat(cells[3].textContent.replace('₱', ''))
        });
    }

    localStorage.setItem('vibecityCart', JSON.stringify({
        items: cartItems,
        total: total,
        notEmpty: notEmpty,
        error: error,
        itemCounter: itemCounter
    }));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('vibecityCart');
    if (savedCart) {
        const cartData = JSON.parse(savedCart);

        total = cartData.total || 0;
        notEmpty = cartData.notEmpty || false;
        error = cartData.error || false;
        itemCounter = cartData.itemCounter || 0;

        const cartItems = document.getElementById("cartItems");
        const popupItems = document.getElementById("cartPopupItems");
        if (cartItems) cartItems.innerHTML = '';
        if (popupItems) popupItems.innerHTML = '';

        if (cartData.items && cartData.items.length > 0) {
            cartData.items.forEach(item => {
                updateBothCarts(item.imgSrc, item.name, item.size, item.price, true);
            });
        }

        updateTotalDisplay();
        updateCartCount();
    }
}

function getSelectedItems() {
    const checkboxes = document.querySelectorAll('.item-selector');
    const selectedItems = [];
    let selectedTotal = 0;
    let allSelectedTotal = 0;
    
    checkboxes.forEach(checkbox => {
        const itemId = checkbox.dataset.id;
        const row = document.getElementById(`cartPopupItem-${itemId}`);
        if (row) {
            const priceText = row.cells[4].textContent; 
            const price = parseFloat(priceText.replace('₱', '').replace(',', ''));
            
            if (!isNaN(price)) {
                allSelectedTotal += price;
                if (checkbox.checked) {
                    selectedTotal += price;
                    selectedItems.push(itemId);
                }
            }
        }
    });
    
    return {
        items: selectedItems,
        total: selectedTotal,
        allItemsTotal: allSelectedTotal
    };
}
function parsePrice(priceText) {
    const num = parseFloat(priceText.replace(/[^\d.-]/g, ''));
    return isNaN(num) ? 0 : num;
}
function updateCartCount() {
    const countElement = document.querySelector('.cart-count');
    const rows = document.getElementById("cartItems").rows;
    countElement.textContent = rows.length;
}