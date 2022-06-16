//update total price
function updateTotalPrice() {
  var Totalprix = document.getElementById("total-price");
  let sum = 0;
  let price = document.getElementsByClassName("price");

  for (let i = 0; i < price.length; i++) {
    sum += parseInt(price[i].innerHTML);
    Totalprix.innerHTML = sum;
  }
  return Totalprix.innerHTML;
}

//plus button
var PlusBtn = document.getElementsByClassName("plus-btn");
for (let i = 0; i < PlusBtn.length; i++) {
  PlusBtn[i].addEventListener("click", function (e) {
    let qte = e.target.nextElementSibling;

    qte.innerHTML = +qte.innerHTML + 1;
    let prixU =
      e.target.nextElementSibling.nextElementSibling.nextElementSibling;

    let prixupdated =
      e.target.nextElementSibling.nextElementSibling.nextElementSibling
        .nextElementSibling.nextElementSibling;
    prixupdated.innerHTML = parseInt(qte.innerHTML) * parseInt(prixU.innerHTML);
    updateTotalPrice();
  });
}
//minus button
var minusBtn = document.getElementsByClassName("sustraction-btn");
for (let i = 0; i < minusBtn.length; i++) {
  minusBtn[i].addEventListener("click", function (e) {
    let qte = e.target.previousElementSibling;
    if (+qte.innerHTML > 0) {
      qte.innerHTML = +qte.innerHTML - 1;
    }
    let prixU = e.target.nextElementSibling;

    let prixupdated =
      e.target.nextElementSibling.nextElementSibling.nextElementSibling;
    prixupdated.innerHTML = parseInt(qte.innerHTML) * parseInt(prixU.innerHTML);
    updateTotalPrice();
  });
}

//toggle heart

var heartBtn = document.getElementsByClassName("fas fa-heart");
for (let i = 0; i < heartBtn.length; i++) {
  heartBtn[i].addEventListener("click", function (event) {
    var togglebtn = event.target;
   
      togglebtn.classList.toggle("red")
  });
}

//remove Item 
var deleteBtn = document.getElementsByClassName("delete-btn")
for( let i=0; i< deleteBtn.length; i++){
    deleteBtn[i].addEventListener("click",function() {
         deleteBtn[i].parentElement.remove ()

         
    } )
}