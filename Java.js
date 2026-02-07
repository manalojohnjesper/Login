let username = document.querySelector(".inputname_username");
let email = document.querySelector(".inputname_email");
let password = document.querySelector(".inputname_password");
let cpassword = document.querySelector(".inputname_cpassword");

let labelUsername = document.querySelector(".label-username");
let labelEmail = document.querySelector(".label-email");
let labelPassword = document.querySelector(".label-password");
let labelCpassword = document.querySelector(".label-cpassword");

let btn  = document.querySelector(".btn");
let pwFst = document.querySelector(".password-icon");
let confirmPw = document.querySelector(".password-icon2");


//For User Name onFocus
username.onfocus = function(){
    labelUsername.style.top = "-55px";
    labelUsername.style.color = "#0ef";}

username.onblur = function(){
    if(username.value === ''){
    labelUsername.style.top = "-30px";
    labelUsername.style.color = "#fff"};}
     

//For password onFocus   
password.onfocus = function(){
    labelPassword.style.top = "-55px";
    labelPassword.style.color = "#0ef";}

password.onblur = function(){
    if(password.value === ''){
    labelPassword.style.top = "-30px";
    labelPassword.style.color = "#fff"};}
     
//For Confirm password onFocus
cpassword.onfocus = function(){
    labelCpassword.style.top = "-55px";
    labelCpassword.style.color = "#0ef";}

cpassword.onblur = function(){
    if(cpassword.value === ''){
    labelCpassword.style.top = "-30px";
    labelCpassword.style.color = "#fff"};}

// For Email onFocus
email.onfocus = function(){
    labelEmail.style.top = "-55px";
    labelEmail.style.color = "#0ef";}

email.onblur = function(){
    if(email.value === ''){
    labelEmail.style.top = "-30px";
    labelEmail.style.color = "#fff"};}








//For Visiblity of icon in Password and Confirm-Password
function pwShow(){
    if(password.type == "password"){
       password.type = "text"
       pwFst.innerHTML = "no_encryption"}
 else{ password.type = "password";
       pwFst.innerHTML = "lock" }
 
}

function confirmShow(){
    if(cpassword.type == "password"){
       cpassword.type = "text"
       confirmPw.innerHTML = "no_encryption"}
 else{ cpassword.type = "password";
       confirmPw.innerHTML = "lock" }
 
}

let form = document.querySelector(".login-form");
// let username = document.querySelector(".inputname_username");
// let email = document.querySelector(".inputname_email");
// let password = document.querySelector(".inputname_password");
// let cpassword = document.querySelector(".inputname_cpassword");

form.addEventListener('submit', (event) =>{
    // event.preventDefault();

    validateForm();

    if(isFormValid() == true){
        form.submit();
    }else{
        event.preventDefault();
    }
});

function isFormValid(){
    let inputContainers = form.querySelectorAll('.input-box');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}



function validateForm() {
    //USERNAME
    if(username.value.trim()==''){
        setError(username, 'Username is required');
    }else if(username.value.trim().length <5 || username.value.trim().length > 15){
        setError(username, 'Name must be min 5 and max 15 charecters');
    }else {
        setSuccess(username);
    }

    // EMAIL
    if(email.value.trim()==''){
        setError(email, 'Email is required');
    }else if(isEmailValid(email.value)){
        setSuccess(email);
    }else{
        setError(email, 'Provide valid email address');
    }

    // PASSWORD
    if(password.value.trim()==''){
        setError(password, 'Password is required');
    }else if(password.value.trim().length <6 || password.value.trim().length >20){
        setError(password, 'Password min 6 max 20 charecters');
    }else {
        setSuccess(password);
    }

    // CONFIRM PASSWORD 
    if(cpassword.value.trim()==''){
        setError(cpassword, 'Confirm Password is required');
    }else if(cpassword.value !== password.value){
        setError(cpassword, 'Password does not match');
    }else {
        setSuccess(cpassword);
    }
}


function setError(element, errorMessage) {
    let parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    let paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    let parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}
