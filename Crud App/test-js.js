let validation = ()=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email == ""){
        alert("Please enter the email adrees");
        return false;
    }
    else if (password == ""){
        alert("Please anter a valid password");
        return false;
    }
    else if(email == password){
        alert("email and password should not be matched");
        return false;
    }
    else{
        const emailHome = document.getElementById('emailHome');
        const passwordHome = document.getElementById('passwordHome');   
    }

    return true;
}