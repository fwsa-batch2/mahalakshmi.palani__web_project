let userlist = [];
function onPageLoad() {
  let listValue = JSON.parse(localStorage.getItem("foodlist")); // null

  if (listValue != null) {
    userlist = listValue;
  } 
  else {
    // listvalue = null;
    userlist = [];
    localStorage.setItem("foodlist", JSON.stringify(userlist));
  }
  return userlist;
}
onPageLoad();
function renderFood(addItems){
    let len = addItems.length;
    console.log(len);
    let add = "";
    for(let i = 0; i < len; i++){
        let obj = addItems[i];
        let food = `<div id = "img-div2" class = "img-add">
                         <h2> ${obj.fname}</h2>
                        <img src=${obj.img} class = "foodimg" alt="">
                        <p> RS.${obj.price}</p><button type = "button" onclick = "clickHandler()">ADD CART</button>
                    </div>`;
        add +=food;
    }
    document.getElementById("addmenu").innerHTML = add;
   
}


let getValue = JSON.parse(localStorage.getItem("list"));
renderFood(getValue);
console.log(getValue);

 function clickHandler(value){
   console.log(value);
 }
// console.log("hello");
// let getValue = JSON.parse(localStorage.getItem("list"));
// console.log(getValue);

