var pop_up_reg = document.getElementById('pop-up-reg');
var register = document.getElementById('register');
var register2 = document.getElementById('register2');
var register3 = document.getElementById('register3');
var register4 = document.getElementById('register4');
var reg_close = document.getElementById('reg-close');

var pop_up_call = document.getElementById('pop-up-call');
var call = document.getElementById('call');
var call2 = document.getElementById('call2');
var call_close = document.getElementById('call-close');



register.addEventListener('click', function(){
    pop_up_reg.style.display = "flex";
})
register2.addEventListener('click', function(){
    pop_up_reg.style.display = "flex";
})
register3.addEventListener('click', function(){
    pop_up_reg.style.display = "flex";
})
register4.addEventListener('click', function(){
    pop_up_reg.style.display = "flex";
})


reg_close.addEventListener('click', function(){
    pop_up_reg.style.display = "none"
})



call.addEventListener('click', function(){
    pop_up_call.style.display = "flex";
})
call2.addEventListener('click', function(){
    pop_up_call.style.display = "flex";
})

call_close.addEventListener('click', function(){
    pop_up_call.style.display = "none"
})