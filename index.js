window.onload = function(){
const navToggle = document.querySelector('.nav-toggle');
const navlinks = document.querySelectorAll('.nav_link');
const copiedEmail = document.getElementById('clippy');
const copyAction = document.querySelector('.clipboard-icon');
const navShift = document.querySelector('.hamburger');

const formValidator = document.getElementById('form-validate');
const nameField = document.getElementById('firstname');
const emailField = document.getElementById('emailaddress');
const websiteField = document.getElementById('website-description');
const formSubmitter = document.getElementById('btn-variant');
var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const fileTab = document.getElementById("filetab");



//FUNCTION TO VALIDATE ALL FORM ENTRIES BEFORE SUBMISSION

formValidator.addEventListener("submit",(e) =>{
         
   
  
     if(emailField.value === '' && nameField.value ==='' && websiteField.value == '' ){
        nameField.placeholder = "Please enter a  valid name!"
        emailField.placeholder = "Please enter a  valid email address!"
        websiteField.placeholder = "Please give a description!"
        e.preventDefault();
        }

        else if(emailField.value === '' && nameField.value ===''){
        nameField.placeholder = "Please enter a  valid name!"
        emailField.placeholder = "Please enter a  valid email address!"
        window.history.back();
        e.preventDefault();
        }


        else if(nameField.value ===''){
       
        nameField.placeholder = "Please enter a  valid name!"
        e.preventDefault();
        
       }
   
       else if(emailField.value === '' ){
        
        emailField.placeholder = "Please enter a  valid email address!"
       
        e.preventDefault();

       }

       else if(websiteField.value == ''){
        websiteField.placeholder = "Please give a description!"
       
        e.preventDefault();
       }

       else if(emailField.value.match(mailFormat) == null ){
       emailField.value =''
        emailField.placeholder = "Please enter a  valid email address!"
       
        e.preventDefault();
       }
       
        else{
            return;
        }
      
  
});

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

//FUNCTION TO SLIDE THE REQUEST FORM OPEN AND CLOSE
fileTab.addEventListener("click", () => {
   
    if( fileTab.innerHTML === "CLICK HERE") {
        document.body.classList.add('form-open')
        document.body.classList.remove('form-close') 
        fileTab.innerHTML = "CLOSE"
    }
    else if( fileTab.innerHTML === "CLOSE") { 
        document.body.classList.remove('form-open')
        document.body.classList.add('form-close')
        fileTab.innerHTML = "CLICK HERE"}
       
       

})







};







