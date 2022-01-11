function showPassword(){
    let check1 = document.getElementById("checkpassword");
    if(check1.type === "password"){
        check1.type = "text";
    }
}
// let getlist = localStorage.getItem("list");
// console.log(getlist);
function login(){
    event.preventDefault();
    let currentName = document.getElementById("name").value;
    let currentMail = document.getElementById("mail").value;
    let currentPassword = document.getElementById("checkpassword").value;
    let userDetail = JSON.parse(localStorage.getItem("list"));
    

    if(userDetail != null){
        for(i = 0; i < userDetail.length; i++){
            console.log(i);
            console.log(userDetail[i]);

            if(userDetail[i].email == currentMail && userDetail[i].password == currentPassword){
                localStorage.setItem("loginlist",JSON.stringify(currentMail));
                window.location.href = "Home_page.html";
                break;
            }
            else if(userDetail[i].email != currentMail && userDetail[i].password == currentPassword){
                document.getElementById("text1").innerText = "enter valid Email";
            }
            else{
                document.getElementById("text2").innerText = "enter valid password";
                
            }
        }
    }
    else{
        alert("please sign up first");
    }
}
let userlist = [];
function onPageLoad(){
    let listValue = JSON.parse(localStorage.getItem("list"));
    userlist.push(listValue);
    if(listValue != null){
        userlist = listValue;
    }
}
onPageLoad();



