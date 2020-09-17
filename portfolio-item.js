window.onload = function(){
    const navToggle = document.querySelector('.nav-toggle');
    const navlinks = document.querySelectorAll('.nav_link');
    const copiedEmail = document.getElementById('clippy');
    const copyAction = document.querySelector('.clipboard-icon');
    const navShift = document.querySelector('.hamburger');



    //FUNCTION TO CHANGE THE POSITION OF THE NAV BAR ON SCROLL

document.addEventListener( "scroll", function shiftNavigation(){
    if (window.pageYOffset <= 100){
     navShift.style.left = "0vw" 
    } 
     else{
         navShift.style.left = "9.2vw"
         
     }
 }
 ) ;
 
 
 //FUNCTION TO BRING OUT THE NAVIGATION PAGE
 navToggle.addEventListener("click", () => {
     document.body.classList.toggle('nav-open');
 }) ;
 
 //FUNCTION TO CLOSE THE NAVIGATION PAGE
 navlinks.forEach(link => {
     link.addEventListener('click', () => {
         document.body.classList.remove('nav-open')
     })
 });
 
 //FUNCTION TO COPY EMAIL ADDRESS
 copyAction.addEventListener( "click", () => {
     copiedEmail.select()
    copiedEmail.setSelectionRange(0,99999)
     document.execCommand('copy');
   
    
  }
 ) ;



}