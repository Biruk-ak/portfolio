const reveals = document.querySelectorAll('.reveals')

window.addEventListener('scroll', function(){

    for(let i = o; i<reveals.length ; i++){
        let windowhight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;
        if(revealtop < windowhight - revealpoint){
            reveals[i].classList.add('active')
        }
        else{
            reveals[i].classList.remove('active')
        }
    }

})
