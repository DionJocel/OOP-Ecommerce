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
let name;
let size;
let price;
let total = 0;
let totalAmount = document.getElementById("total");
totalAmount.innerHTML = total;
let notEmpty = false;
let error = false;

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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='deal1.jpg'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='deal2.jpg'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        }
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='deal3.jpg'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='deal4.jpg'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='deal5.jpg'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='deal6.jpg'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
    }
}
function addCartHogw(){
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='hp.avif'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
    }
}
function addCartMarvel(){
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='marvel.png'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
    }
}
function addCartHpalways(){
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='hpalways.jpg'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
    }
}
function addCartPlainBlack(){
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='plainblack.jpg'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
    }
}
function addCartPlainWhite(){
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='plainwhite.avif'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
    }
}
function addCartPlainBrown(){
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='plainbrown.webp'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
    }
}
function addCartPlainBeige(){
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='plainbeige.avif'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
    }
}
function addCartPinkCardigan(){
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='pinkcardigan.jpg'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
    }
}
function addCartBeigeCardigan(){
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='beigecardigan.webp'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
    }
}
function addCartBeigeCardigan(){
    if (confirm('Are you sure you want to add this item to your cart?')) {
        
        name = "Beige Cardigan Buttons Crop Cardigan";
        size = prompt('Select A Size: XS / S / M / L / XL');
        if (!isNaN(size)) {
            alert('Please put a valid size.');
            price = "";
            error = true;
            notEmpty = true;
        }
        else if (size == "XS" || size == "S" || size == "M" || size == "L" || size == "XL") {
            alert('Successfully Added to Cart');
            price = 530;
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='beigecardigan.webp'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
    }
}
function addCartWhiteTurtleneck(){
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='whiteturtleneck.webp'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
    }
}
function addCartBlackTurtleneck(){
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='blackturtleneck.webp'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
    }
}
function addCartWhitePolo(){
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

        const table = document.getElementById('cart').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = "<img src='whitepolo.webp'>";
        newRow.insertCell(1).innerHTML = name;
        newRow.insertCell(2).innerHTML = size;
        newRow.insertCell(3).innerHTML = "₱" + price;
        
        if (error == false) {
            total = total + price;
            totalAmount.innerHTML = total;
        }
        else if (error == true) {
            totalAmount.innerHTML = "ERROR";
        } 
    }
}


// BUTTONS TO JUSKO //
function removeItems() {
    if (notEmpty == true) {
        if (confirm('Are you sure you want to remove all of these items?')){
            document.getElementById("cartItems").innerHTML = '';
            total = 0;
            totalAmount.innerHTML = total;
            notEmpty = false;
            error = false;
        }
    }
}
function purchase() {
    if (notEmpty == true && error == false) {
        if (confirm('Are you sure you want to order these items? \n Your order total amount: ' + total)) {
            alert('Order Successful! Your order is now being processed.');
            document.getElementById("cartItems").innerHTML = '';
            total = 0;
            totalAmount.innerHTML = total;
            notEmpty = false;
            error = false;
        }
    }
    else if (notEmpty == true && error == true) {
        alert('Please put a valid size');
        document.getElementById("cartItems").innerHTML = '';
        total = 0;
        totalAmount.innerHTML = total;
        notEmpty = false;
        error = false;
    }
    else {
        alert('Please choose a product to order');
    }
}
const MenuItems = document.getElementById('MenuItems');
const screenWidth = screen.width;

if(screenWidth <= 600) {
    MenuItems.style.maxHeight = "0px";
}
function menutoggle(){
	if(MenuItems.style.maxHeight == "0px")
	{
		MenuItems.style.maxHeight = "200px";
	}
	else
	{
		MenuItems.style.maxHeight = "0px";
	}
}