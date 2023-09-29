let emailInput = document.getElementById('email');
let emailError = document.getElementById('email-error');
emailInput.addEventListener('blur',()=>{
 const email = emailInput.value;
 
 const emailParttern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
 if(!emailParttern.test(email)){
   emailError.textContent= 'Nhập lại email';

 }else{
   emailError.textContent='';
 }
});