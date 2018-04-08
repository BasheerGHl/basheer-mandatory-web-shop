/*jshint esversion: 6 */
let productsData = [
    {
      id: 1,
      name: "Converse",
      image: "https://www.mizunousa.com/images/set_mizuno/en_us/local/division-pages/Volleyball/ExpandedDrawerAsset_Update_0005_Men_Footwear.png?h=150&w=300&la=en",
      description: "Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan",
      price: 1700,
     
  
  },
    {
      id: 2,
      name: "Nike",
      image: "https://www.mizunousa.com/images/set_mizuno/en_us/local/division-pages/Running/ExpandedDrawerAsset_Update_Womens_WaveDaichi---Trail-Feature.png",
      description: "Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan",
      price: 2000,
     
  
  },
    {
      id: 3,
      name: "adidas",
      image: "https://www.mizunousa.com/images/set_mizuno/en_us/local/division-pages/Volleyball/ExpandedDrawerAsset_Update_0003_Youth_Footwear.png?h=150&w=300&la=en",
      description: "Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan ",
      price: 1600,
    
  
  }
  ];
  
  let cartTotalCost = 0;
  
  const cartBtn = document.querySelector('.cart');
  const checkoutBtn = document.querySelector('.checkout');
  const main = document.querySelector('.main');
  const currentCartCost = document.querySelector('.currentCartCost');
  
  
  //rendering products
  for(let i = 0; i < productsData.length; i++){
    
     main.innerHTML += `
    <div class="productBox">
      <p class="productName"> ${productsData[i].name} </p>
      <img class="productsImage" src="${productsData[i].image}" />
      <p class="productDescription"> ${productsData[i].description} </p>
      <p class="productPrice"> ${productsData[i].price} Kr</p>
      <button class="buyBtn" id="${productsData[i].id}"> Buy </button>
      <a href="#" class="setComment panel">review</a>
    </div>
  
  `;
  
  }
  
  const buyBtn = document.querySelectorAll('.buyBtn');
  
  for(let i = 0; i < buyBtn.length; i++){
    
    buyBtn[i].addEventListener("click", (e) => {
      addToCart(e.target.id);
    },false);
    
  }
  
  
  
  function addToCart(id) {
   let result = productsData.filter(function(price){
    return price.id == id;
   }
   );
    cartTotalCost += result[0].price;
    currentCartCost.innerText = cartTotalCost;
  }



const switchPage = function () {
      
    $('.setComment').on('click',function () {
        $('.wrapper').hide();
    })
}


switchPage();