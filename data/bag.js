import { products } from "./products.js";

export let bag = JSON.parse(localStorage.getItem('bag'));

export let bagQuantity = 0;
export let bagTotalInCents = 0;

function saveBagToStorage(){
    localStorage.setItem('bag', JSON.stringify(bag));
}

export function addToBag(productId, productSize){
    if(bag && bag.length != 0){
        let matchingItem;
        bag.forEach((bagItem) => {
            if(bagItem.productId === productId && bagItem.size === productSize ){
                matchingItem = bagItem;  
            }  
            
            if(matchingItem){
                matchingItem.quantity += 1
            }else{
                bag.push({
                    productId : productId,
                    quantity : 1,
                    size: productSize
                });
            }
        });              
    }else{
        const newBag = [];
        newBag.push({
            productId : productId,
            quantity : 1,
            size: productSize
        });   
        bag = newBag;              
    }   
    console.log(bag);
    saveBagToStorage();
}


export function removeFromBag(productId, productSize){

    let newBag = [];
    
    bag.forEach((bagItem) => {
        if(bagItem.productId != productId || bagItem.size != productSize){
            newBag.push(bagItem);
        }
    });

    bag = newBag;

    saveBagToStorage();
}

export function calculateBagQuantity(){
    bag.forEach((bagItem) =>{
        bagQuantity += bagItem.quantity;
    })
    return bagQuantity;
}

export function calculateBagTotalInCents(){
    bag.forEach((bagItem) =>{
        let matchingItem;      
        products.forEach((product) =>{
            if(bagItem.productId === product.id){
                matchingItem = product;  
                bagTotalInCents += matchingItem.priceInCents * bagItem.quantity;
            }
        })        
    })    
    return bagTotalInCents;
}
