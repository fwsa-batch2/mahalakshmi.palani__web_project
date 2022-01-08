function adminPage(){
    let getItem = localStorage.getItem("loginlist");
    if(getItem !== "mahalakshmi@gmail.com"){
        alert("only admin can access this page");
        window.history.back();
    }

}
adminPage();