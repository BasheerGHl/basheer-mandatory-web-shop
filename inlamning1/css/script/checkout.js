var nameInput = document.createElement("input");

nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "inputs");
nameInput.setAttribute("placeholder", "Type first Name");
 document.getElementById("regis").appendChild(nameInput);



var name2Input = document.createElement("input");
name2Input.setAttribute("type", "text");
name2Input.setAttribute("id", "inputs");
name2Input.setAttribute("placeholder", "Type Last Name");


document.getElementById("regis").appendChild(name2Input);

var name3Input = document.createElement("input");
name3Input.setAttribute("type", "email");
name3Input.setAttribute("id", "inputs");
name3Input.setAttribute("placeholder", "Add Email");

document.getElementById("regis").appendChild(name3Input);

var name4Input = document.createElement("input");
name4Input.setAttribute("type", "number");
name4Input.setAttribute("id", "inputs");
name4Input.setAttribute("placeholder", "Type phone number");

document.getElementById("regis").appendChild(name4Input);

var name5Input = document.createElement("input");
name5Input.setAttribute("type", "text");
name5Input.setAttribute("id", "inputs");
name5Input.setAttribute("placeholder", "Street adress");

document.getElementById("regis").appendChild(name5Input);

var name6Input = document.createElement("input");
name6Input.setAttribute("type", "text");
name6Input.setAttribute("id", "inputs");
name6Input.setAttribute("placeholder", "City");

document.getElementById("regis").appendChild(name6Input);

var name7Input = document.createElement("input");
name7Input.setAttribute("type", "text");
name7Input.setAttribute("id", "inputs");
name7Input.setAttribute("placeholder", "Zip code");

document.getElementById("regis").appendChild(name7Input);




var name8Input = document.createElement("input");
name8Input.setAttribute("type", "submit");
name8Input.setAttribute("value", " requist ");

document.getElementById("regis").appendChild(name8Input);

var myInputs = document.getElementById("inputs");

myInputs.onfocus = function placef () {
    "use strict";
    this.setAttribute("data-place", this.getAttribute("placeholder"));
    this.setAttribute("placeholder", " ");
};

