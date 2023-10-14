export const products = [

{
    id : 0,
    image : 'pics/blackshirt.jpg',
    name : 'Black Shirt',
    priceInCents :  10000,  
    filterType : 'All',
    availability : 'true' 
},

{
    id : 1,
    image : 'pics/blackshirt.jpg',
    name : 'Mens OG Black Shirt',
    priceInCents :  20000,
    filterType : 'Mens',
    availability : 'true'
},

{
    id : 2,
    image : 'pics/blackshirt.jpg',
    name : 'Womens Top',
    priceInCents :  10000, 
    filterType : 'Womens',
    availability : 'true'   
},

{
    id : 3,
    image : 'pics/blackshirt.jpg',
    name : 'Key Ring Accessorie',
    priceInCents :  20000,
    filterType : 'Accessories',
    availability : 'true'
}


];

export function sortListById(){
    products.sort(function(a, b){return a.id - b.id});
}

export function sortListByPrice(){
    products.sort(function(a, b){return a.priceInCents - b.priceInCents});
}

