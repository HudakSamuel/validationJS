main();

function checkInputs(){
    //validation
    checkUserName();
    checkPassword();
    checkConfPassword();

}

function checkUserName(){
    const userName = document.getElementById('user_name');
    const userNameValue = userName.value.trim();
    const formControl = userName.parentElement;
    const small = formControl.querySelector('small');

    if (userNameValue.length < 4){
        setError(userName);
        small.style.visibility = 'visible';
        small.innerText = "Name is too short"
    }
    else{
        setSuccess(userName);
        small.style.visibility = 'hidden';
    }
}

function checkPassword(){
    const password = document.getElementById('password');
    const passwordValue = password.value.trim();
    const formControl = password.parentElement;
    const small = formControl.querySelector('small');

    if (passwordValue.length < 4){
        setError(password);
        small.style.visibility = 'visible';
        small.innerText = "Password is too short"
    }
    else{
        setSuccess(password);
        small.style.visibility = 'hidden';
    }
}

function checkConfPassword(){
    const password = document.getElementById('password')
    const confPass = document.getElementById('conf_pass');
    const confPassValue = confPass.value.trim();
    const formControl = confPass.parentElement;
    const small = formControl.querySelector('small');

    if (confPassValue != password.value.trim()){
        setError(confPass);
        small.style.visibility = 'visible';
        small.innerText = "Password does not match"
    }
    else{
        setSuccess(confPass);
        small.style.visibility = 'hidden';
    }
}

function setError(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control fail';
}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function main(){

    form.addEventListener('submit', e => {
        e.preventDefault();

        checkInputs();
    });
}