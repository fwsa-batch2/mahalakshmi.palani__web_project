function showPassword(){
    let check1 = document.getElementById("checkpassword");
    let check2 = document.getElementById("cpassword");
    if(check1.type === "password"){

        check1.type = "text";
    }
    else if(check1 === "text"){
        document.getElementById('password').type="password";
    }
    if(check2.type === "password"){
        check2.type = "text";
    }
    
    
    else if(check2 === "text"){
        document.getElementById('password').type="password";
    }
    
    
    
}
let userlist = [];
function onPageLoad(){
    let listValue = JSON.parse(localStorage.getItem("list"));
    if(listValue != null){
        userlist = listValue;
    }
}
onPageLoad();

function submitHandler() {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let mail = document.getElementById("mail").value;
    let password = document.getElementById("checkpassword").value;
    let cpassword = document.getElementById("cpassword").value;
    let emailId = isEmailExist(mail);
    if(password != cpassword){
        //alert("password invalid");
        document.getElementById("text2").innerText = "password invalid";
    }
    else if(emailId){
        //alert("this email already exist");
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
        window.location.href = "login.html";
    }

}


// this function will return true or false
// this function will take an email as input
function isEmailExist(inputEmail) {
    console.group(isEmailExist)
    let isExist = false;
    for (let i = 0; i < userlist.length; i++) {
        if (inputEmail == userlist[i].email) {
            isExist = true;
            break;
        }
    }
    console.groupEnd(isEmailExist)
    return isExist;
}