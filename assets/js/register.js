// show password
function showPassword(){
    let check1 = document.getElementById("checkpassword");
    let check2 = document.getElementById("cpassword");
    if(check1.type == "password"){
        check1.type = "text";
    }
    if(check2.type == "password"){
        check2.type = "text";
    }

}
let userlist = [];
function onPageLoad(){
    let listValue = JSON.parse(localStorage.getItem("list"));
    console.log(listValue);
    if(listValue != null){
        userlist = listValue;
    }
}
onPageLoad();
// email validation
function submitHandler(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let password = document.getElementById("checkpassword").value;
    let cpassword = document.getElementById("cpassword").value;
    let emailId = isEmailExist(mail);
    if(password != cpassword){
        
        document.getElementById("text2").innerText = "password invalid";
    }
    else if(emailId){
        
        document.getElementById("text1").innerText = "this email already exist";
    } 
    else{
        let value = {
            "name": name,
            "email": mail,
            "password": password,
            "confirm password": cpassword
        }
        
        userlist.push(value);
        let value1 = JSON.stringify(userlist);
        console.log(value1);
        localStorage.setItem("list", value1);
        alert("succssfully your account created")
        window.location.href = "login.html";
    }

}


// checking the email exist or not
function isEmailExist(inputEmail) {
    let len = userlist.length
    let isExist = false;
    for (let i = 0; i < len; i++) {
        if (inputEmail == userlist[i].email) {
            isExist = true;
            break;
        }
    }
   
    return isExist;
}
