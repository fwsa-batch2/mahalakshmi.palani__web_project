let userlist = [];

function onPageLoad() {
  let listValue = JSON.parse(localStorage.getItem("fooditems")); // null

  if (listValue != null) {
    userlist = listValue;
  } else {
    // listvalue = null;
    userlist = [];
    localStorage.setItem("fooditems", JSON.stringify(userlist));
  }
  // return userlist;
}
onPageLoad();
function renderFood(addItems){
  let len = addItems.length;
  console.log(len);
  let adding ="";
  for (let i = 0; i < len; i++) {
    let obj = addItems[i];
    let food = `<div id = "img-div${JSON.stringify(i+1)}" class = "img-add">
                        <h2> ${obj.fname}</h2>
                        <img src=${obj.img} class = "foodimg" alt="foodname">
                        <p> RS.${obj.price}</p><button type = "button" data-food onclick = \"clickHandler('${obj.fname}','${obj.img}','${obj.price}')\">ADD CART</button>
                    </div>`;
    adding = adding + food;
    // console.log(add);
  }
  document.getElementById("addmenu").innerHTML = adding;
}

let getValue = JSON.parse(localStorage.getItem("fooditems"));
renderFood(getValue);
console.log(getValue);
let imgArray = [];
function clickHandler(name,url,price){
  console.log(name);
  console.log(url);
  console.log(price);
  let qty = prompt("enter the number of food quantity");
  let cartobj = {
    "imgname":name,
    "imgurl":url,
    "qty":qty,
    "imgprice":price
  }
  imgArray.push(cartobj);
  localStorage.setItem("cart",(JSON.stringify(imgArray)));
  
  

}

