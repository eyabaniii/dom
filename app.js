//====LIKE ITEM
var favs=Array.from(document.querySelectorAll(".like-item"))

for (let fav of favs) {
  fav.addEventListener('click',function () {
if (fav.style.fill!="red") {
  fav.style.fill="red"
}
   else{
    fav.style.fill="#bbaa88"
   } 
  })
  
}
//====Delete item
var cards=Array.from(document.querySelectorAll(".card"))

var delbtn=Array.from(document.querySelectorAll(".delete-item"))
for (let i in delbtn) {
delbtn[i].addEventListener("click",function(){
  cards[i].remove();
  calculateTotalPrice();
})
  }


//====increase item
var counts=Array.from(document.querySelectorAll(".count"))

var plus=Array.from(document.querySelectorAll(".plus"))

for (let count in counts) {
  plus[count].addEventListener("click",function(){
    counts[count].innerHTML++;
    calculateTotalPrice();

  })
    }
  



//====decrease item
var moins=Array.from(document.querySelectorAll(".moins"))


for (let count in counts) {
  moins[count].addEventListener("click",function(){
  
          counts[count].innerHTML--;
          calculateTotalPrice();
    }
  )

  }

    
  var px=Array.from(document.querySelectorAll("#px"))

function calculateTotalPrice() {
  var totalPrice = 0;


  for (let i = 0; i < cards.length; i++) {
  
      const price = parseFloat(px[i].innerHTML);
      const quantity = parseInt(counts[i].innerHTML);
      totalPrice += price * quantity;
    
  }

  // Update the total price in the DOM (you should have an element with ID "total-price" to display the total)
  document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}