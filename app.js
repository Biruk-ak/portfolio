const reveals = document.querySelectorAll('.reveals')
const about = document.getElementById('about')
const about_me_section = document.getElementById('about_me_section')
const lists = document.querySelectorAll('.lists')

// about.addEventListener('click', function(){
//     const sectionposition = about_me_section.offsetTop;
//     Window.scrollTo({
//         top: sectionposition,
//         behavior: 'smooth',
//         block: "start"

//     });
// })



lists.forEach((item) => {
    
    item.addEventListener('click', () =>{
        
        // let el = document.getElementById()
        // e.getAttribute("data-link")
        console.log(item.getAttribute("data-link"));
        // el.scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'start'
        // })
       
    })
   
})

// window.addEventListener('scroll',reveal()) 

// function reveal(){
//     // alert("");
//     for(let i = 0; i<reveals.length ; i++){
//         let windowhight = window.innerHeight;
//         let revealtop = reveals[i].getBoundingClientRect().top;
//         let revealpoint = 200;
//         if(revealtop < windowhight - revealpoint){
//             reveals[i].classList.add('active')
//         }
//         else{
//             reveals[i].classList.remove('active')
//         }
//     }
// };

var typed = new Typed(".text-type",{
    strings: ["Web Developer","Designer","Programmer"],
    typeSpeed: 300,
    backSpeed: 200,
    loop : true
})
