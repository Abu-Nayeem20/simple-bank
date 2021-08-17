
document.getElementById('user-login-button').addEventListener('click', function(){
    // get user email
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    // get user password
    const userPassField = document.getElementById('user-password');
    const userPass = userPassField.value;
    // user validation
    if(userEmail == 'simple@gmail.com' && userPass == 'mypass'){
        window.open('banking.html','_blank');
    }
    else{
        document.getElementById('invalid-user').style.display = 'block';
    }

    // Clear field value
    userEmailField.value = '';
    userPassField.value = '';
});