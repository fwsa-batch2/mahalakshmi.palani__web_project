// show password
function showPassword(){
    let check1 = document.getElementById("checkpassword");
    if(check1.type === "password"){
        check1.type = "text";
    }
}
// checking email and password match with the local storage content.
function login(event){
    event.preventDefault();
    let currentMail = document.getElementById("mail").value;
    let currentPassword = document.getElementById("checkpassword").value;
    let userDetail = JSON.parse(localStorage.getItem("list"));
    

    if(userDetail != null){
        for(let i = 0; i < userDetail.length; i++){
            console.log(i);
            console.log(userDetail[i]);

            if(userDetail[i].email == currentMail && userDetail[i].password == currentPassword){
                if(currentMail == "mahalakshmiragavi@gmail.com"){
                    window.location.href = "adminmenu.html"
                }
                else{
                    window.location.href = "customer_menu.html";
                }
                break;
            }
            else if(userDetail[i].email != currentMail && userDetail[i].password == currentPassword){
                document.getElementById("text1").innerText = "enter valid Email";
            }
            else if(userDetail[i].email == currentMail && userDetail[i].password != currentPassword){
                document.getElementById("text2").innerText = "enter valid password";
                
            }
            else{
                alert("please sign up first1");
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
    if(listValue != null){
        userlist = listValue;
    }
}
onPageLoad();



