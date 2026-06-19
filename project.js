const foods = [

{
name:"Burger",
price:199,
category:"Burger",
rating:"4.5 ⭐",
image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800"
},

{
name:"Pizza",
price:299,
category:"Pizza",
rating:"4.7 ⭐",
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800"
},

{
name:"Biryani",
price:249,
category:"Biryani",
rating:"4.8 ⭐",
image:"https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800"
},

{
name:"Salad",
price:149,
category:"Healthy",
rating:"4.4 ⭐",
image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800"
},

{
name:"Pasta",
price:179,
category:"Healthy",
rating:"4.3 ⭐",
image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800"
}

];

let cart=[];

displayFoods(foods);

function displayFoods(foodList){

let container=document.getElementById("foodContainer");

container.innerHTML="";

foodList.forEach(food=>{

container.innerHTML += `

<div class="food-card">

<img src="${food.image}">

<h3>${food.name}</h3>

<p>${food.rating}</p>

<p>₹${food.price}</p>

<button onclick="addToCart('${food.name}',${food.price})">
Add To Cart
</button>

</div>

`;

});
}

function addToCart(name,price){

cart.push({name,price});

updateCart();
}

function updateCart(){

let cartItems=document.getElementById("cartItems");

cartItems.innerHTML="";

let total=0;

cart.forEach(item=>{

total+=item.price;

cartItems.innerHTML +=
`<div class="cart-item">
${item.name} - ₹${item.price}
</div>`;

});

document.getElementById("cartCount").innerText=cart.length;

document.getElementById("totalPrice").innerText=total;
}

function filterFood(category){

if(category==="All"){
displayFoods(foods);
}
else{

let filtered=foods.filter(food =>
food.category===category);

displayFoods(filtered);
}
}

document.getElementById("searchBox")
.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let filtered=foods.filter(food =>
food.name.toLowerCase().includes(value)
);

displayFoods(filtered);

});
