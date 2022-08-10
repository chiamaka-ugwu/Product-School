<<<<<<< HEAD
var pop_up_reg = document.getElementById('pop-up-reg');
var pop_up_reg2 = document.getElementById('pop-up-reg2');
var register = document.getElementById('register');
var register2 = document.getElementById('register2');
var register3 = document.getElementById('register3');
var register4 = document.getElementById('register4');
var register5 = document.getElementById('register5');
var register6 = document.getElementById('register6');
var register7 = document.getElementById('register7');
var training = document.getElementById('training');

var reg_close = document.getElementById('reg-close');
var reg_close2 = document.getElementById('reg-close2');


var pop_up_call = document.getElementById('pop-up-call');
var call = document.getElementById('call');
var call2 = document.getElementById('call2');
var call_close = document.getElementById('call-close');



register.addEventListener('click', function(){
    pop_up_reg2.style.display = "flex";
})
register2.addEventListener('click', function(){
    pop_up_reg.style.display = "flex";
})
register3.addEventListener('click', function(){
    pop_up_reg2.style.display = "flex";
})
register4.addEventListener('click', function(){
    pop_up_reg2.style.display = "flex";
})
register5.addEventListener('click', function(){
    pop_up_reg.style.display = "flex";
    training.setAttribute("value", "Product Management");
})
register6.addEventListener('click', function(){
    pop_up_reg.style.display = "flex";
    training.setAttribute("value", "Product Marketing");

})
register7.addEventListener('click', function(){
    pop_up_reg.style.display = "flex";
    training.setAttribute("value", "Product Testing");

})


reg_close.addEventListener('click', function(){
    pop_up_reg.style.display = "none"
})
reg_close2.addEventListener('click', function(){
    pop_up_reg2.style.display = "none"
})



call.addEventListener('click', function(){
    pop_up_call.style.display = "flex";
})
call2.addEventListener('click', function(){
    pop_up_call.style.display = "flex";
})

call_close.addEventListener('click', function(){
    pop_up_call.style.display = "none"
=======
var pop_up_reg = document.getElementById('pop-up-reg');
var pop_up_reg2 = document.getElementById('pop-up-reg2');
var register = document.getElementById('register');
var register2 = document.getElementById('register2');
var register3 = document.getElementById('register3');
var register4 = document.getElementById('register4');
var register5 = document.getElementById('register5');
var register6 = document.getElementById('register6');
var register7 = document.getElementById('register7');
var training = document.getElementById('training');

var reg_close = document.getElementById('reg-close');
var reg_close2 = document.getElementById('reg-close2');


var pop_up_call = document.getElementById('pop-up-call');
var call = document.getElementById('call');
var call2 = document.getElementById('call2');
var call_close = document.getElementById('call-close');



register.addEventListener('click', function(){
    pop_up_reg2.style.display = "flex";
})
register2.addEventListener('click', function(){
    pop_up_reg.style.display = "flex";
})
register3.addEventListener('click', function(){
    pop_up_reg2.style.display = "flex";
})
register4.addEventListener('click', function(){
    pop_up_reg2.style.display = "flex";
})
register5.addEventListener('click', function(){
    pop_up_reg.style.display = "flex";
    training.setAttribute("value", "Product Management");
})
register6.addEventListener('click', function(){
    pop_up_reg.style.display = "flex";
    training.setAttribute("value", "Product Marketing");

})
register7.addEventListener('click', function(){
    pop_up_reg.style.display = "flex";
    training.setAttribute("value", "Product Testing");

})


reg_close.addEventListener('click', function(){
    pop_up_reg.style.display = "none"
})
reg_close2.addEventListener('click', function(){
    pop_up_reg2.style.display = "none"
})



call.addEventListener('click', function(){
    pop_up_call.style.display = "flex";
})
call2.addEventListener('click', function(){
    pop_up_call.style.display = "flex";
})

call_close.addEventListener('click', function(){
    pop_up_call.style.display = "none"
>>>>>>> d22c70d9fa7bf777f156d784f2d7c39fb4851b99
})