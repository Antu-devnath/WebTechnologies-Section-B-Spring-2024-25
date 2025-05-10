
let fNameValidation = () => {
    const firstName = document.getElementById('fName').value.trim();
    const firstNameError = document.getElementById('fName-err');

    if(firstName === ''){
        firstNameError.innerHTML = 'First name is required';
        firstNameError.style.color = 'red';
        return false;
    }
    else{
        firstNameError.innerHTML = '';
        return true;
    }
};
let lNameValidation = () => {
    const lastName = document.getElementById('lName').value.trim();
    const lastNameError = document.getElementById('lName-err');

    if(lastName === ''){
        lastNameError.innerHTML = 'Last name is required';
        lastNameError.style.color = 'red';
        return false;
    }
    else{
        lastNameError.innerHTML = '';
        return true;
    }
};
let dobValidation = () => {
    const dob = document.getElementById('dob').value.trim();
    const dobError = document.getElementById('dob-err');

    if(dob === ''){
        dobError.innerHTML = 'Date of birth is required';
        dobError.style.color = 'red';
        return false;
    }
    else{
        dobError.innerHTML = '';
        return true;
    }
};
let genderValidation = () => {
    const male = document.getElementById('male');
    const female = document.getElementById('female');
    const other = document.getElementById('others');	
    const genderError = document.getElementById('gender-err');

    if(!(male.checked || female.checked || other.checked)){
        genderError.innerHTML = "Please select a gender";
        genderError.style.color = 'red';
        return false;
    }
    else{
        genderError.innerHTML = '';
        return true;
    }
};
let phoneVlidation = () => {
    const phone = document.getElementById('phone').value.trim();
    const phoneError = document.getElementById('phone-err');

    if(phone === ''){
        phoneError.innerHTML = 'Phone number is required';
        phoneError.style.color = 'red';
        return false;
    }
    else if(phone.length < 11){
        phoneError.innerHTML = 'Phone number must be at least 11 digits long';
        phoneError.style.color = 'red';
        return false;
    }
    else if(!(phone.Number)){
        phoneError.innerHTML = 'Phone number must be a number';
        phoneError.style.color = 'red';
        return false;
    }
    else{
        phoneError.innerHTML = '';
        return true;
    }
};
let skillValidation = () => {
    let skills = document.querySelectorAll('input[name="skills"]');
    const errorMsg = document.getElementById('skills-err');

    let isChecked = false;

    skills.forEach((skill)=>{
        if(skill.checked){
            isChecked = true;
        }
    });
    

};
let emailValidation = () => {
    const email = document.getElementById('email').value.trim(); //id get
    const emailError = document.getElementById('email-err'); //id get
    
    if(email === ''){
        emailError.innerHTML = 'Email is required';
        emailError.style.color = 'red';
        return false;
    }else if(!(email.includes('@')&&email.includes('.'))){
        emailError.innerHTML = 'Email is invalid';
        emailError.style.color = 'red';
        return false;
    }
    else {
        emailError.innerHTML = '';
        return true;
    }
    
};
let passwordValidation = () => {
    const password = document.getElementById('password').value.trim(); //id get
    const passwordError = document.getElementById('pass-err'); //id get
    const passwordConfirm = document.getElementById('cpassword').value.trim(); //id get
    const confirmPasswordError = document.getElementById('cpass-err'); //id get

    if(password === ''){
        passwordError.innerHTML = 'Password is required';
        passwordError.style.color = 'red';
        return false;
    }
    else{
        passwordError.innerHTML = '';
    }
    if(password.length < 8){
        passwordError.innerHTML = 'Password must be at least 8 characters long';
        passwordError.style.color = 'red';
        return false;
    }
    else{
        passwordError.innerHTML = '';
    }
    if(passwordConfirm === ''){
        confirmPasswordError.innerHTML = 'Confirm password is required';
        confirmPasswordError.style.color = 'red';
        return false;
    }else{
        confirmPasswordError.innerHTML = '';
    }
    if(password !== passwordConfirm){
        confirmPasswordError.innerHTML = 'Password and confirm password do not match';
        confirmPasswordError.style.color = 'red';
        return false;
    }
    else{
        confirmPasswordError.innerHTML = '';
        return true;
    }
};
let formValidation = () => {
  return (
    fNameValidation() &&
    lNameValidation() &&
    // dobValidation() &&
    genderValidation() &&
    phoneVlidation() &&
    emailValidation() &&
    passwordValidation()
  );
};
let regBtn = document.getElementById('regBtn');
regBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    if (formValidation()){
        alert('Form submitted successfully!');
    }
});