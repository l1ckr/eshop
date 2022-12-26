function checkout(){
    let fio = document.getElementById("fio").value;
    let phone = document.getElementById("phone").value;
    let selectedcity = document.getElementById("selectedcity").value;
    let address = document.getElementById("address").value;
    

    sessionStorage.setItem("fio", fio);
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("selectedcity", selectedcity);
    sessionStorage.setItem("address", address);
    sessionStorage.setItem("selectedcity", fio);
open("cart-checkout.html");
    
}

function additem(){

}