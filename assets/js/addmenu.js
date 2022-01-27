let foodList = []; // foodList = JSON.parse(localStorage.getItem("fooditems")) ?? []; //Nullish
function onPageLoad() {
  let listValue = JSON.parse(localStorage.getItem("fooditems"));
  console.log(listValue);

  if (listValue != null) {
    foodList = listValue;
  } else {
    localStorage.setItem("fooditems", JSON.stringify([])); // store [] ??
  }
}
onPageLoad();
function submitHandler(event) {
  event.preventDefault();

  //1. form values
  let name = document.getElementById("name").value;
  let img = document.getElementById("url").value;
  let price = document.getElementById("price").value;

  //2. validation - name,img,price
  let imgName = foodName(name); //itemNameExists = true/false

  let imgUrl = foodUrl(img);

  // todo: Need to implement price field validation => price <= 0 then invalid price
  if (imgName) {
    document.getElementById("error1").innerText = "this name already exist";
  } else if (imgUrl) {
    document.getElementById("error2").innerText = "this url already exist"; //image accepts only png format
  } else {
    // itemObj

    //fname ==> itemName (or ) name
    // img => imgUrl => contains or endsWith => .png,.jpeg
    let foodOPJ = {
      fname: name,
      img: img,
      price: price,
    };

    //check if item already exists
    // Adding a food item to []
    //
    foodList.push(foodOPJ);
    console.log(foodList);
    let value = JSON.stringify(foodList);
    localStorage.setItem("fooditems", value);

    // Notification - Menu added successfully
    // redirect to list menu => amdin want to see whether newly added item is displayed
  }
}
// This function checks whether the food item name already exists
function foodName(name) {
  let len = foodList.length;
  let isExist = false;
  //foodList = [] = 1lakh =>
  //search - when the result is found, stop the search activity
  for (let i = 0; i < len; i++) {
    if (foodList[i].fname == name) {
      isExist = true;
      //break; //performance issue
    }
  }
  return isExist;
}
function foodUrl(url) {
  let len = foodList.length;
  let isExist = false;
  for (let i = 0; i < len; i++) {
    if (foodList[i].img == url) {
      isExist = true;
    }
  }
  return isExist;
}
