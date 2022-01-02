let userlist = [];
function onPageLoad() {
  let listValue = JSON.parse(localStorage.getItem("foodlist")); // null

  if (listValue != null) {
    userlist = listValue;
  } else {
    // listvalue = null;
    userlist = [];
    localStorage.setItem("foodlist", JSON.stringify(userlist));
  }
  // return userlist;
}
onPageLoad();
function renderFood(addItems){
  let len = addItems.length;
  console.log(len);
  let adding;
  for (let i = 0; i < len; i++) {
    let obj = addItems[i];
    let food = `<div id = "img-div${JSON.stringify(i+1)}" class = "img-add">
                         <h2> ${obj.fname}</h2>
                        <img src=${obj.img} class = "foodimg" alt="foodname">
                        <p> RS.${obj.price}</p><button type = "button" data-food onclick = \"clickHandler('img-div${JSON.stringify(i+1)}')\">ADD CART</button>
                    </div>`;
    adding = adding + food;
    // console.log(add);
  }
  document.getElementById("addmenu").innerHTML = adding;
}

let getValue = JSON.parse(localStorage.getItem("list"));
renderFood(getValue);
console.log(getValue);
function clickHandler(x){
  let img = x; // img-div1,img-div2
  console.log(img);
  

}
// renderFood(getValue)
// function clickHandler(){
//   let addfood = event.target.dataset.food;
//   console.log(addfood);
//   let objectfood = parsed.find()
// }

//
// foodArray = [];
//  function clickHandler(){
//   let foodDetails = JSON.parse(localStorage.getItem("list"));
//   foodArray.push(foodDetails);
//   console.log(foodArray);

//  }
// console.log("hello");
// let getValue = JSON.parse(localStorage.getItem("list"));
// console.log(getValue);
