
//inputs of registration form (signup.html)
var yourName = document.getElementById('name');
var yourEmail = document.getElementById('email');
var yourPassword = document.getElementById('password');
var alertDiv2 = document.getElementById('alert2');
 
// inputs of login form  (index.html)
var inputEmail = document.getElementById('enterEmail');
var inputPassword = document.getElementById('enterPassword');
var alertDiv = document.getElementById('alert');

//home
var w = document.querySelector('#home h1')

/*-----------------Regisration--------------------*/
var accountsArray = []  //array of object(accounts)
if(localStorage.getItem('accounts')!=null){
    accountsArray=JSON.parse(localStorage.getItem('accounts'))
}

//Store accountsArray  within localstorage (registration)

function signUp(){
    var account = {
        name : yourName.value,
        email : yourEmail.value,
        password : yourPassword.value
    }
    // لو مدخلش داتا
    if(yourName.value === '' || yourEmail.value === '' || yourPassword.value === ''){
        alertDiv2.classList.remove('d-none');
        alertDiv2.style.color = 'red';
        alertDiv2.innerHTML = 'All inputs is required';
    }
    else{
        // لو دخل ايميل متسجل بيه قبل كده
        var checkEmail = 'notFound';
        for(var i = 0 ; i<accountsArray.length ; i++){
            if(yourEmail.value === accountsArray[i].email ){
                alertDiv2.classList.remove('d-none');
                alertDiv2.style.color = 'red';
                alertDiv2.innerHTML = 'email already exists';
                checkEmail = 'Found';
            }
        }
        // لو الاايميل أول مرة يتسجل بيه
        if( checkEmail == 'notFound'){
            accountsArray.push(account);
            localStorage.setItem('accounts' , JSON.stringify(accountsArray));
            alertDiv2.classList.remove('d-none');
            alertDiv2.style.color = 'green';
            alertDiv2.innerHTML = 'Success';
        }
        
    }

}



/*------------------------login-------------------------*/


function login(){
    //لو مدخلش الايميل والباسورد
    if(inputEmail.value === '' || inputPassword.value === ''){
        alertDiv.classList.remove('d-none');
        alertDiv.style.color = 'red';
        alertDiv.innerHTML = 'All inputs is required';
    }
    else{ 
        //لازم يتأكد الاول ان الايميل موجودبالفعل والباسورد صح  
        var check = 'not';
        for(var i = 0 ; i<accountsArray.length ; i++ ){
            if((inputEmail.value === accountsArray[i].email)&&(inputPassword.value === accountsArray[i].password))
            {
                check = 'yes';
                location.href= "home.html"; 
                localStorage.setItem('names',accountsArray[i].name)
            }

        }
        if(check == 'not'){
            alertDiv.classList.remove('d-none');
            alertDiv.style.color = 'red';
            alertDiv.innerHTML = 'incorrect email or password';
        }

     }

}
/*------------------------home-------------------------*/
function addName(){
    w.innerHTML = 'Welcome ' + localStorage.getItem('names');
}
function del(){
    localStorage.removeItem('names')
}
