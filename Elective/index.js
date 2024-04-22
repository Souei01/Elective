let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'Chicken Burger',
        image: '1.png',
        price: 89
    },
    {
        id: 2,
        name: 'Beef Burger',
        image: '2.png',
        price: 99
    },
    {
        id: 3,
        name: 'Spicy Chicken Burger',
        image: '3.png',
        price: 99
    },
    {
        id: 4,
        name: 'Petcho Inasal',
        image: '4.png',
        price: 120
    },
    {
        id: 5,
        name: 'Pierna Inasal',
        image: '5.png',
        price: 110
    },
    {
        id: 6,
        name: 'Fried Chicken',
        image: '6.png',
        price: 110
    },
    {
        id: 1,
        name: 'PRODUCT NAME1',
        image: '1.png',
        price: 100000
    },
    {
        id: 2,
        name: 'PRODUCT NAME2',
        image: '2.png',
        price: 200000
    },
    {
        id: 3,
        name: 'PRODUCT NAME3',
        image: '3.png',
        price: 300000
    },
    {
        id: 4,
        name: 'PRODUCT NAME4',
        image: '4.png',
        price: 400000
    },
    {
        id: 5,
        name: 'PRODUCT NAME5',
        image: '5.png',
        price: 500000
    },
    {
        id: 6,
        name: 'PRODUCT NAME6',
        image: '6.png',
        price: 600000
    }
];
let listCarts = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">₱${value.price.toLocaleString()}</div> <!-- Add peso sign here -->
            <button onclick="addToCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    })
}

  
   
initApp();
function addToCart(key){
    let existingProduct = listCarts.find(item => item.id === products[key].id);
    if(existingProduct){
        existingProduct.quantity++;
        existingProduct.price = existingProduct.quantity * existingProduct.price;
    } else {
        listCarts.push({...products[key], quantity: 1});
    }
    reloadCart();
}


function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=>{
        totalPrice += value.price;
        count += value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="images/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            `;
            listCart.appendChild(newDiv);
        }
    });
    
    console.log("Total Price:", totalPrice);
    total.innerText = totalPrice.toLocaleString();
    console.log("Total Element Text:", total.innerText);
    quantity.innerText = count;
}

function changeQuantity(key, newQuantity){
    if(newQuantity === 0){
        listCarts.splice(key, 1);
    } else {
        listCarts[key].quantity = newQuantity;
        listCarts[key].price = newQuantity * products[key].price;
    }
    reloadCart();
}




