let sendBtn=document.getElementById('send');
let form=document.getElementById('contactForm');

// form refresh state
form.addEventListener('submit', (e)=>{
    let hisname=document.getElementById('name');
    let email=document.getElementById('email');
    let message=document.getElementById('comments');
    // set value

    hisname.value='';
    email.value='';
    message.value='';



});

// start to send
sendBtn.addEventListener('click',(e)=>{
    let hisname=document.getElementById('name');
    let email=document.getElementById('email');
    let message=document.getElementById('comments');

    // set value and local storage
    hisname=hisname.value;
    localStorage.setItem('hisname',hisname);
    email=email.value;
    localStorage.setItem('email',email);

    message=message.value;
    localStorage.setItem('message',message);


});