let animations = document.querySelectorAll(".session");

window.onscroll = () => {
    animations.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offset; 
        let height = sec.offsetHeight;

        if(top >= offset &&  top >= offset + height){
            sec.classList.add('show-animation');
    
        }else{
            sec.classList.remove('show-animation');
        }
    })    
}