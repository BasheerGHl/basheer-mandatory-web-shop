var num = 0,
    countF = document.getElementById("display");
    function addNum () {
        num ++;
        countF.value = num;
    }

    function minusNum () {
        num --;
        countF.value = num;

        if(num === 0) {
            num ++;
            countF.value = num;
        }else if (num === -1){
            num ++;
            countF.value = num;
        }
    }

window.onclick =   function muliPrice () {

var    a = document.getElementById("display").value,
    b = document.getElementById("price").value,
    x = a * b;
    document.getElementById("result").innerHTML= x + "<span> kr</span>";
};



var arry = [
    {
        name: "product name",
        price: 250,
        image:"https://i0.wp.com/www.anthrop-e.com/elements/wp-content/uploads/shoe-thomas.png?fit=400%2C250&ssl=1",
        descritption: "Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin",
    },
];
for(var i = 0; i < arry.length; i++) {
    var fir = document.createElement("img");
        fir.setAttribute("src","https://i0.wp.com/www.anthrop-e.com/elements/wp-content/uploads/shoe-thomas.png?fit=400%2C250&ssl=1");
   var myInput = document.createElement("input");
        myInput.setAttribute("type","submit");
        myInput.setAttribute("value","Buy");
    
        
document.getElementById("first").innerHTML = arry[i].name + "<br>" + "<br>" +  "<span style = 'color:green;'> Description :</span>" + arry[i].descritption + "<br>"+ "<span style ='color:green;'> Price :</span>" + arry[i].price + " kr";
document.getElementById("first").appendChild(fir);
document.getElementById("first").appendChild(myInput);
}
var arry1 = [
    {
        name: "product name",
        price: 110,
        image:"http://1964shoes.com/boutique/590-listProd/estoril-rugged.jpg",
        descritption: "Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin",
    },
];
for(var i = 0; i < arry1.length; i++) {
    var fir = document.createElement("img");
        fir.setAttribute("src","http://1964shoes.com/boutique/590-listProd/estoril-rugged.jpg");
        var myInput = document.createElement("input");
        myInput.setAttribute("type","submit");
        myInput.setAttribute("value","Buy");
        
document.getElementById("second").innerHTML = arry1[i].name + "<br>" + "<br>" +  "<span style = 'color:green;'> Description :</span>" + arry1[i].descritption + "<br>"+ "<span style ='color:green;'> Price :</span>" + arry1[i].price + " kr";
document.getElementById("second").appendChild(fir);
document.getElementById("second").appendChild(myInput);
}
var arry2 = [
    {
        name: "product name",
        price: 100,
        image:"http://1964shoes.com/boutique/555-listProd/storm.jpg",
        descritption: "Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin",
    },
];
for(var i = 0; i < arry2.length; i++) {
    var fir = document.createElement("img");
        fir.setAttribute("src","http://1964shoes.com/boutique/555-listProd/storm.jpg");
        var myInput = document.createElement("input");
        myInput.setAttribute("type","submit");
        myInput.setAttribute("value","Buy");
        
document.getElementById("third").innerHTML =  arry1[i].name + "<br>" + "<br>" + "<span style = 'color:green;'> Description :</span>" + arry1[i].descritption + "<br>" + "<span style ='color:green;'> Price :</span>" + arry1[i].price + " kr";
document.getElementById("third").appendChild(fir);
document.getElementById("third").appendChild(myInput);
}
