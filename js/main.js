const button = document.getElementById('button');
const email = document.getElementById('email');
const error = document.getElementById('error');

button.addEventListener('click', (e)=>{
    console.log(button)
    const regExp= /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(email.value) == true){
        email.style.border = 'none';
        error.style.display = 'none';
    }else{
        e.preventDefault();
        email.style.border = '1px solid hsl(0, 100%, 63%)';
        error.innerHTML = "Please check you email"
    }
})