let lastClickBottom = localStorage.getItem('lastClickBottom');

const paymentElement = document.querySelector('.js-payment');
const cookieElement = document.querySelector('.js-cookie');

if(lastClickBottom == 'Payment and Shipping'){
    paymentElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }); 
}else if(lastClickBottom == 'Cookie Policy'){
    cookieElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
}
