//total
function total() {
var prix =  Array.from(document.getElementsByClassName("price"));
var qte =  Array.from(document.getElementsByClassName("qte"));
var valeur_total=(document.getElementById("total"));
let valeur=0;
for(let i=0;i<prix.length;i++) {
valeur+=qte[i].innerHTML*prix[i].innerHTML;
}
return valeur_total.innerHTML=valeur;
}

//ADD
var buttonPlus = Array.from(document.getElementsByClassName("add"));
for(let i=0;i<buttonPlus.length;i++) {
    buttonPlus[i].addEventListener("click", function () {
        buttonPlus[i].nextElementSibling.innerHTML++;
        total();
    })
}

//Minus
var buttonMinus = Array.from(document.getElementsByClassName("minus"));
for(let i=0;i<buttonMinus.length;i++) {
    buttonMinus[i].addEventListener("click", function () {
      if (buttonMinus[i].previousElementSibling.innerHTML>0) {
        buttonMinus[i].previousElementSibling.innerHTML--;
        total();
      }
    })
}

//delete
var buttonDelete = Array.from(document.getElementsByClassName("fa-trash-alt"));
for(let i=0;i<buttonDelete.length;i++) {
  buttonDelete[i].addEventListener("click", function () {
  buttonDelete[i].parentNode.remove();
  total();
  })
}

//FAVORIT
var buttonFAV = Array.from(document.getElementsByClassName("fa-heart"));
for(let i=0;i<buttonFAV.length;i++) {
  buttonFAV[i].addEventListener("click", function () {
    //buttonFAV[i].classList.toggle("red");
  if (buttonFAV[i].style.color!= "red") {
    buttonFAV[i].style.color= "red";
  }
  else{
    buttonFAV[i].style.color="grey";
  }
  })
}






















































