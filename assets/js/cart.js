let userlist = [];
function onPageLoad() {
    let listValue = JSON.parse(localStorage.getItem("cart"));
    if (listValue != null) {
        userlist = listValue;
    }
    else {
        // userlist = [];
        localStorage.setItem("cart", JSON.stringify([]));
    }
}
onPageLoad();
// added value in the cart page
function renderCart(addCart) {
    let len = addCart.length;
    let adding = "";
    console.log(len);
    for (i = 0; i < len; i++) {
        let obj = addCart[i];
        let food = `<div id = "img-div${JSON.stringify(i + 1)}" class = "img-add">
                            <h2> ${obj.imgname}</h2>
                            <img src=${obj.imgurl} class = "foodimg" alt="foodname">
                            <div id = "button-div">
                                <span class = "para1" id = "rate-${i}" value = "${obj.imgprice}"> RS.${obj.imgprice}</span>
                                <button type = "button" class = "button1"  value = ${i} onclick = \"decrease()\">-</button>
                                <input id="para-${i}" class="para2" value = "1"></input>
                                <button type = "button" class = "button2" value = ${i} onclick = \"increase()\">+</button>
                                <button type = "button" class = "button3" onclick = \"delete()\">Delete</button>
                            </div>
                            
                    </div>
                    `;
        adding = adding + food;
    }
    document.getElementById("addmenu").innerHTML = adding;
}
let getValue = JSON.parse(localStorage.getItem("cart"));
renderCart(getValue);
console.log(getValue+"1");
// increase the quantity value.
function increase() {
    let getattribute = event.target.value;
    console.log(getattribute);
    let value1 = document.getElementById("para-" + getattribute).value;
    console.log(value1);
    let typecasting = JSON.parse(value1);
    let qtyValue = typecasting + 1;
    if (qtyValue != null) {
        document.getElementById("para-" + getattribute).value = qtyValue;
    }
    let foodrate = document.getElementById("rate-" + getattribute).getAttribute("value");
    console.log(foodrate);
    let total = foodrate * qtyValue;
    if (total != null) {
        document.getElementById("rate-" + getattribute).innerText = "Rs"+total;
    }
}
// decrease the quantity value.
function decrease() {
    let getattribute = event.target.value;
    console.log(getattribute);
    let value1 = document.getElementById("para-" + getattribute).value;
    console.log(value1);
    let typecasting = JSON.parse(value1);
    let qtyValue = value1>1 ?typecasting -1:1; //condition ? true : false;
   

    if (qtyValue != null) {
        document.getElementById("para-" + getattribute).value = qtyValue;
    }
    let foodrate = document.getElementById("rate-" + getattribute).getAttribute("value");
    console.log(foodrate);
    let total = foodrate * qtyValue;
    if (total != null) {
        document.getElementById("rate-" + getattribute).innerText = "Rs"+total;
    }
}