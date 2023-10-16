import {products, sortListById, sortListByPrice} from "../data/products.js";

let lastProductId = localStorage.getItem('lastProductId')
let filterTypeValue = localStorage.getItem('filterTypeValue');
let availability = localStorage.getItem('availability');
let sortTypeValue = localStorage.getItem('sortTypeValue'); 

let lastClick = localStorage.getItem('lastClick');

if (sortTypeValue == "Price"){
    sortListByPrice();
}else{
    sortListById();
}


let productsHTML = '';

//products.forEach((product) => {
//    if((filterTypeValue == product.filterType || filterTypeValue == "All" || filterTypeValue == "New Arrivals" || filterTypeValue == null) && (availability == "true" || product.availability == "true")){
//        productsHTML += `
//    <div class="product-preview js-product-preview" data-this-product-id = "${product.id}">
//        <img class="product-image" src="${product.image}">
//        <p class="product-name">
//            ${product.name}
//        </p>
//        <p class="product-price">
//            &#x20AC; ${(product.priceInCents /100).toFixed(2)}
//        </p>
//    </div>       
//    `;
//    }        
//});

products.forEach((product) => {
    productsHTML += `
    <div class="product-preview js-product-preview " data-this-product-id = "${product.id}">
        <img class="product-image" src="${product.image}">
        <p class="product-name">
            ${product.name}
        </p>
        <p class="product-price">
            &#x20AC; ${(product.priceInCents /100).toFixed(2)}
        </p>
    </div>       
    `;      
});

document.querySelector('.js-products').innerHTML = productsHTML;

document.querySelectorAll('.js-product-preview').forEach((product) => {
    product.addEventListener('click', () =>{
        console.log(product.dataset.thisProductId);
        lastProductId = product.dataset.thisProductId; 
        localStorage.setItem('lastProductId' , lastProductId);
        window. open("product.html", "_self");      
    })
})

let isSelected = false; 

document.querySelectorAll('.js-filters-sort-icon').forEach((icon) => {
    icon.addEventListener('click', () =>{
        if(isSelected){
            document.querySelectorAll('.header2').forEach((item) => {
                item.style.display = "none";
                isSelected = false;
            })    
        }
        else{
            document.querySelectorAll('.header2').forEach((item) =>{
                item.style.display = "block";
                isSelected = true;
            }) 
        }            
    })
})

const bottomElement =  document.querySelector(".bottom");

document.querySelector('.js-header-filter-typeC').addEventListener('click', () =>{
    bottomElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });  
});

document.querySelectorAll('.js-filter-type').forEach((filterType) => {
    filterType.addEventListener('click', () =>{
        console.log(filterType.textContent);        
        filterType = filterType.textContent.trim();
        localStorage.setItem('filterTypeValue', filterType);        
        window. open("index.html", "_self");      
    })
    if(filterType.textContent.trim() == filterTypeValue ){
        filterType.getElementsByTagName('img')[0].setAttribute('src','icons/selectedicon.svg');
    }else{
        filterType.getElementsByTagName('img')[0].setAttribute('src','icons/unselectedicon.svg');
    }
})

document.querySelectorAll('.js-availability').forEach((Availability) => {
    Availability.addEventListener('click', () =>{
        if(availability == 'true'){
            localStorage.setItem('availability', 'false' );        
            window. open("index.html", "_self");
        }else{
            localStorage.setItem('availability', 'true' );        
            window. open("index.html", "_self");
        }     
    })
    if(availability == 'true'){
        Availability.getElementsByTagName('img')[0].setAttribute('src','icons/selectedicon.svg');
    }else{
        Availability.getElementsByTagName('img')[0].setAttribute('src','icons/unselectedicon.svg');
    }
})

document.querySelectorAll('.js-sort-type').forEach((sortType) => {
    sortType.addEventListener('click', () =>{
        if (sortType.textContent.trim() == "Latest"){
            sortTypeValue = "Latest"
            localStorage.setItem('sortTypeValue', sortTypeValue);
            window. open("index.html", "_self");
        }else{
            sortTypeValue = "Price"
            localStorage.setItem('sortTypeValue', sortTypeValue);
            window. open("index.html", "_self");
        }      
    })
})

document.querySelector('.js-filter-text').innerHTML = 'Filter: ' + filterTypeValue;

document.querySelector('.js-sort-text').innerHTML = 'Sort By: ' + sortTypeValue;

const shopElement = document.querySelector('.shop');

document.querySelector('.next-div').addEventListener('click', () =>{
    shopElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });  
})

if(lastClick == 'SHOP'){
    shopElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }); 
}




