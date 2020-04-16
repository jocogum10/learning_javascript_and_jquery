function checkUsername(){
    var elMsg = document.getElementById('feedback');    //get feedback element
    var elUsername = document.getElementById('username');   // get username input
    if(elUsername.value.length < 5){
        elMsg.textContent = 'Username must be 5 characters or more';    // set msg
    }
    else{
        elMsg.textContent = '';
    }
}