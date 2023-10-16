import { products } from "../data/products.js";
import { addToBag } from "../data/bag.js";

let lastProductId = localStorage.getItem('lastProductId');

const lastProduct = products[lastProductId];

let productHTML = ''; 

productHTML = `
    <div class="product-preview">
        <div class= image-div>   
            <img class="product-image" src="${lastProduct.image}"> 
            <img class="product-image" src="${lastProduct.image2}">
        </div>
        <p class="product-name">
                ${lastProduct.name}
        </p>             
        <p class="product-price">
            &#x20AC; ${(lastProduct.priceInCents /100).toFixed(2)}
        </p>
    </div> 
    <div class="size">        
        <div class="select-container">                      
            <select id= "size-select" class="size-select">
                <option value= "">SIZE</option>
                <option value= "XS">XS</option>
                <option value= "S">S</option>
                <option value= "M">M</option>
                <option value= "L">L</option>
                <option value= "XL">XL</option>
            </select>          
        </div>        
    </div>
    <p class="select-size-text">
        Select Size
    </p>    
    <button class="checkout-button js-add-to-bag" data-this-product-id = "${lastProduct.id}" style="margin-top:10px">
        ADD TO BAG
    </button>    
`

document.querySelector('.js-product-final').innerHTML = productHTML;

var sizeSelect = document.getElementById("size-select");
var sizeValue;
sizeSelect.onchange= function(){
    sizeValue = this.value
}

if(lastProduct.filterType == 'Accessories'){
    var sizeSelect = document.getElementById("size-select");
    sizeSelect.style.display= "none";
    sizeValue = "One Size"
}

document.querySelector('.view-bag-text').addEventListener('click', ()=>{
    window.open("bag.html", "_self")
})

document.querySelectorAll('.js-add-to-bag').forEach((button) => {
    button.addEventListener('click', () => {
        if(sizeValue){
            addToBag(lastProduct.id, sizeValue);
            document.querySelector('.select-size-text').style.color = "black";
            document.querySelector('.view-bag-text').style.color = "white"; 
            document.querySelector('.view-bag-text').style.pointerEvents="all";
        }else{
            document.querySelector('.select-size-text').style.color = "white";
            document.querySelector('.view-bag-text').style.color = "black";
        }        
    });
});