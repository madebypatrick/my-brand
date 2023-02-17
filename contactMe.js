let sendBtn=document.getElementById('send');
let form=document.getElementById('contactForm');

// form refresh state
form.addEventListener('submit', (e)=>{
    let theName=document.getElementById('name');
    let email=document.getElementById('email');
    let fromWhere=document.getElementById('about')

    let message=document.getElementById('comments');
    // set value

    theName.value='';
    email.value='';
    fromWhere.value='';
    message.value='';



});

// start to send
sendBtn.addEventListener('click',(e)=>{
    let theName=document.getElementById('name');
    let email=document.getElementById('email');
    let fromWhere=document.getElementById('about');
    let message=document.getElementById('comments');
    if(theName.value==='' || email.value===''|| fromWhere.value===''|| message.value=-=''){
        alert("fill every field");
        
    }

    // set value and local storage
    theName=theName.value;
    localStorage.setItem('theName',theName);
    email=email.value;
    localStorage.setItem('email',email);

    fromWhere=fromWhere.value;
    localStorage.setItem('fromWhere',fromWhere);


    message=message.value;
    localStorage.setItem('message',message);

   
});