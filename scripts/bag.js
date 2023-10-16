import { bag, bagQuantity, bagTotalInCents, removeFromBag, calculateBagQuantity, calculateBagTotalInCents } from "../data/bag.js";
import { products } from "../data/products.js";

let bagHTML = ``;
let matchingItem;

if(bag){
    bag.forEach((bagItem) => {
    products.forEach((product) =>{
        if (bagItem.productId == product.id){
            matchingItem = product;
            
            bagHTML += `
        <div class="product-preview js-product-preview">
                <img class="product-image" src="${matchingItem.image}">
                <p class="product-name">
                    ${matchingItem.name}
                </p>
                <p class="product-price">
                    &#x20AC; ${(matchingItem.priceInCents /100).toFixed(2)}
                </p>
                <p class="product-size">
                    SIZE: ${bagItem.size}
                </p>
                <p class="product-quantity">
                    QUANTITY: ${bagItem.quantity}
                </p>
                <button class="delete-button js-delete-button" data-this-product-size="${bagItem.size}" data-this-product-id="${matchingItem.id}">
                    REMOVE
                </button>        
            </div>            
        `;
        }
    })                  
    });
}

document.querySelector('.js-bag-items').innerHTML = bagHTML;

const thisBagQuantity = calculateBagQuantity();

if(thisBagQuantity==0){
    document.querySelector('.js-bag-quantity').innerHTML = "YOUR BAG IS EMPTY";
    document.querySelector('.js-bag-quantity').style.marginBottom = "300px";
    document.querySelector('.js-bag-total').style.color = "black";
    document.querySelector('.checkout-button').style.color = "black";
    document.querySelector('.checkout-button').style.border = "none";
}else if(thisBagQuantity==1) {
    document.querySelector('.js-bag-quantity').innerHTML = '1 ITEM';
}else{
    document.querySelector('.js-bag-quantity').innerHTML = calculateBagQuantity() + ' ITEMS';
}

document.querySelector('.js-bag-total').innerHTML = 'TOTAL : &#x20AC; ' + (calculateBagTotalInCents()/100).toFixed(2);

document.querySelectorAll('.js-delete-button').forEach((button) => {
    button.addEventListener('click', () => {
        const matchingItemId = button.dataset.thisProductId;
        const matchingItemSize = button.dataset.thisProductSize;  
        removeFromBag(matchingItemId, matchingItemSize);
        window. open("bag.html", "_self");  
    });
});

console.log(bag)