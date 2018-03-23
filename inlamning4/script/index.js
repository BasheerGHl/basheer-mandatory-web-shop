/*jshint esversion: 6 */
$(() => {

  let content = document.getElementById("main");

  function getData() {
    fetch("http://demo.edument.se/api/products")
    
    .then((res)=> res.json())
    .then((data)=>{
      data.forEach(varor => {
        content.innerHTML += `
              <ul>
              <li>${varor.Id}</li>
              <li>${varor.Name}</li>
              <li>${varor.Price}</li>
              <li>${varor.Description}</li>
              <li><img src="${varor.Image}"/></li>
              <li><a href="${varor.Url}">Amazon</a></li>
              <li>${varor.Review}</li>
              </ul>
        `;
      });
    });
    
  }


getData();




});