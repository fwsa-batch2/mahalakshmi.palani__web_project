let code = alert( prompt("please enter the secret code = "))
function adminPage(){
    // let getItem = localStorage.getItem("loginlist");
    if(code !== "HelloimMaha"){
        alert("only admin can access this page");
        window.history.back();
        break;
    }
    else if(code == "HelloimMaha"){
        window.location.href = "addmenu.html";
    }

}
adminPage();