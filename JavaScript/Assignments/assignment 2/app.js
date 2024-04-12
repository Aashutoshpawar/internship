function showpassword(){
    var email = document.querySelector('#email1').value;
    document.getElementById('email2').value = email;

    var pass = document.getElementById('pass1');
    if(pass.type == 'password'){
        pass.type = "text";
        console.log(pass.value);
        document.getElementById("pass2").value=pass.value;
    }
    
}