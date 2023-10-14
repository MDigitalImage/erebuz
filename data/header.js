let bagQuantity = JSON.parse(localStorage.getItem('bag')).length;

document.querySelector('.quantity').innerHTML = bagQuantity;

document.querySelectorAll('.js-header-filter-type').forEach((headerItem) =>{
    headerItem.addEventListener('click', () =>{
        let headerText = headerItem.textContent.trim();
        localStorage.setItem('lastClick', headerText);
        window. open("index.html", "_self");
    })
})

document.querySelector('.js-logo').addEventListener('click', () =>{
    let headerText = 'HOME';
    localStorage.setItem('lastClick', headerText);
    window. open("index.html", "_self");
})

document.querySelectorAll('.policytext').forEach((headerItem) =>{
    headerItem.addEventListener('click', () =>{
        let headerText = headerItem.textContent.trim();
        localStorage.setItem('lastClickBottom', headerText);
        window. open("policy.html", "_self");
    })
})

document.querySelector('.js-policy').addEventListener('click', () =>{
    localStorage.setItem('lastClickBottom', '');
    window. open("policy.html", "_self");
})


