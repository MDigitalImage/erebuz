let lastProductId = localStorage.getItem('lastProductId')
let filterTypeValue = localStorage.getItem('filterTypeValue');
let availability = localStorage.getItem('availability');
let sortTypeValue = localStorage.getItem('sortTypeValue'); 

document.querySelectorAll('.js-filter-type').forEach((filterType) => {
    filterType.addEventListener('click', () =>{
        console.log(filterType.textContent);        
        filterType = filterType.textContent.trim();
        localStorage.setItem('filterTypeValue', filterType);     
        window. open("phonefilters.html", "_self");      
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
            window. open("phonefilters.html", "_self");
        }else{
            localStorage.setItem('availability', 'true' );        
            window. open("phonefilters.html", "_self");
        }     
    })
    if(availability == 'true'){
        Availability.getElementsByTagName('img')[0].setAttribute('src','icons/selectedicon.svg');
    }else{
        Availability.getElementsByTagName('img')[0].setAttribute('src','icons/unselectedicon.svg');
    }
})

document.querySelector('.js-aply-filters-button').addEventListener('click',() =>{
    window. open("draquo.html", "_self");
})

document.querySelector('.js-filter-text').innerHTML = 'Filter: ' + filterTypeValue;

document.querySelectorAll('.js-sort-type').forEach((sortType) => {
    sortType.addEventListener('click', () =>{
        if (sortType.textContent.trim() == "Latest"){
            sortTypeValue = "Latest"
            localStorage.setItem('sortTypeValue', sortTypeValue);
            window. open("phonefilters.html", "_self");
        }else{
            sortTypeValue = "Price"
            localStorage.setItem('sortTypeValue', sortTypeValue);
            window. open("phonefilters.html", "_self");
        }      
    })
    if(sortType.textContent == sortTypeValue){
        filterType.style.textShadow = '0px 0.4px #ffffff, 0px -0.5px #ffffff';
    }
})

document.querySelector('.js-sort-text').innerHTML = 'Sort By: ' + sortTypeValue;
