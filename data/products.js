export const products = [

{
    id : 0,
    image : 'pics/front1.png',
    image2 : 'pics/back1.png',
    name : 'Black Shirt 1',
    priceInCents :  10000,  
    filterType : 'All',
    availability : 'true' 
},

{
    id : 1,
    image : 'pics/front2.png',
    image2 : 'pics/back2.png',
    name : 'Black Shirt 2',
    priceInCents :  20000,
    filterType : 'All',
    availability : 'true'
}
];

export function sortListById(){
    products.sort(function(a, b){return a.id - b.id});
}

export function sortListByPrice(){
    products.sort(function(a, b){return a.priceInCents - b.priceInCents});
}

