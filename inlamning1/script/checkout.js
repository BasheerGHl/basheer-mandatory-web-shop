
function formvalidation () {
  
    let  firstName = document.getElementById('fName').value;
    let  lastName = document.getElementById('lName').value;
    let  email = document.getElementById('email').value;
    let tel = document.getElementById('tele').value;
    let city = document.getElementById('city').value;
    let zipCode = document.getElementById('zipCode').value;
    let address = document.getElementById('address').value;
    let writeComment = document.getElementById('commentField').value;
    let emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let onlyNumberVal = new RegExp('^[0-9]+$');
    
   
    let hasErorr = false;
   
       if (firstName == '' || firstName.length < 3)  {
           document.getElementById('fName').style.borderColor = 'red';
           
           hasErorr = true;
       }else {
           document.getElementById('fName').style.borderColor = 'green';
           hasErorr = false;
       }
   
       if (lastName == '' || lastName.length < 3) {
           document.getElementById('lName').style.borderColor = 'red';
           hasErorr = true;
       }else {
           document.getElementById('lName').style.borderColor = 'green';
           hasErorr = false;
       }
   
       if(email.match(emailVal)) {
           document.getElementById('email').style.borderColor = 'green';
           hasErorr = false;
       }else {
           document.getElementById('email').style.borderColor = 'red';
           hasErorr = true;
       }
       if(tel.match(onlyNumberVal) || tel == ''){
           document.getElementById('tele').style.borderColor = 'green';
           hasErorr = false
       }else{
           document.getElementById('tele').style.borderColor = 'red';
           hasErorr = true
       }
       if(city == ' ' || city.length == 0){
           document.getElementById('city').style.borderColor = 'red';
           hasErorr = true;
       }else {
           document.getElementById('city').style.borderColor = 'green';
           hasErorr = false;
       }
       if (address == '')  {
           document.getElementById('address').style.borderColor = 'red';
           hasErorr = true;
       }else {
           document.getElementById('address').style.borderColor = 'green';
           hasErorr = false;
       }
       if(zipCode.match(onlyNumberVal) || zipCode.length === 5){
           document.getElementById('zipCode').style.borderColor = 'green';
           hasErorr = false
       }else{
           document.getElementById('zipCode').style.borderColor = 'red';
           hasErorr = true
       }
       if(writeComment == ' '){
           document.getElementById('commentField').style.borderColor = 'green';
           hasErorr = false
     
       }
   
   }
   
   
   
   