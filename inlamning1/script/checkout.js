/* jshint esversion:6*/
var nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "firstName");
nameInput.setAttribute("class", "styleFirstName");

nameInput.setAttribute("placeholder", "Type first Name");
document.getElementById("regis").appendChild(nameInput);



var name2Input = document.createElement("input");
name2Input.setAttribute("type", "text");
name2Input.setAttribute("id", "lastName");
name2Input.setAttribute("placeholder", "Type Last Name");


document.getElementById("regis").appendChild(name2Input);

var name3Input = document.createElement("input");
name3Input.setAttribute("type", "email");
name3Input.setAttribute("id", "email");
name3Input.setAttribute("placeholder", "Add Email");

document.getElementById("regis").appendChild(name3Input);

var name4Input = document.createElement("input");
name4Input.setAttribute("type", "text ");
name4Input.setAttribute("id", "telefonNbr");
name4Input.setAttribute("placeholder", "Type phone number");

document.getElementById("regis").appendChild(name4Input);

var name5Input = document.createElement("input");
name5Input.setAttribute("type", "text");
name5Input.setAttribute("id", "adress");
name5Input.setAttribute("placeholder", "Street adress");

document.getElementById("regis").appendChild(name5Input);

var name6Input = document.createElement("input");
name6Input.setAttribute("type", "text");
name6Input.setAttribute("id", "city");
name6Input.setAttribute("placeholder", "City");

document.getElementById("regis").appendChild(name6Input);

var name7Input = document.createElement("input");
name7Input.setAttribute("type", "text");
name7Input.setAttribute("id", "zipCode");
name7Input.setAttribute("placeholder", "Zip code");

document.getElementById("regis").appendChild(name7Input);




var name8Input = document.createElement("input");
name8Input.setAttribute("type", "submit");
name8Input.setAttribute("value", " requist ");
name8Input.setAttribute("id", "sendingData");

document.getElementById("regis").appendChild(name8Input);

var myInputs = document.getElementById("inputs");
let col = {
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    email: document.getElementById("email"),
    teleNbr: document.getElementById("telefonNbr"),
    adress: document.getElementById("adress"),
    city: document.getElementById("city"),
    zipCode: document.getElementById("zipCode"),

}
let btn = document.getElementById("sendingData");
let onlyLetters = /^[A-ZÅÄÖa-zåäö ]+$/;
let telefoneValidation = /^\d{10}$/;
let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let zipCodeValidation = /^\d{5}  (-\d{4})?(?!-)$/;
let hasError = false;


btn.addEventListener("click",function formValidation(event){
    event.preventDefault()


 if(col.firstName.value.length === 0) {
        document.getElementById("good").innerHTML = "first name field is mandatory" 
        hasError = false;
    }else {
        document.getElementById("good").innerHTML = "good";
    }

    if(col.lastName.value.length === 0) {
        document.getElementById("good").innerHTML = "last name field is mandatory" 
        hasError = false;
    }else {
        document.getElementById("good").innerHTML = "good";
    }

    if (emailValidation === col.email.value) {
        document.getElementById("good").innerHTML = "email field is mandatory" 
    }else{
        document.getElementById("good").innerHTML = "good";

    }
    if(col.teleNbr.value.length <= 10) {
        document.getElementById("good").innerHTML = "telefon field is mandatory"
        
    }else {
        document.getElementById("good").innerHTML = "good";
    }
    if(col.adress.value.length === 0) {
        document.getElementById("good").innerHTML = "telefon field is mandatory"
    }else {
        document.getElementById("good").innerHTML = "good";
    }
    if(col.city.value.length === 0) {
        document.getElementById("good").innerHTML = "telefon field is mandatory"
    }else {
        document.getElementById("good").innerHTML = "good";
    }
    if(col.zipCode.value.length < 4) {
        document.getElementById("good").innerHTML = "telefon field is mandatory"
    }else {
        document.getElementById("good").innerHTML = "good";
    }

});

 
  
   
