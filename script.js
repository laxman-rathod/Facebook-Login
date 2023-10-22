function checkLogin() {
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;
    if(email == 'luckyrathod1137@gmail.com'){
        if(pass == 'lucky@1137'){
            alert("Login success!");
        }
        else{
            alert("Invalid password");
        }
    }
    else{
        alert("Invalid username and password");
    }
}