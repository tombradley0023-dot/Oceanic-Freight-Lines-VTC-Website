function toggleMenu(){
document.getElementById("navLinks").classList.toggle("show");
}

let selectedItem = "";

function openShop(item){
selectedItem = item;
document.getElementById("shopTitle").textContent = item;
document.getElementById("shopBox").showModal();
}

function closeShop(){
document.getElementById("shopBox").close();
}

function submitShop(){

let user = document.getElementById("discordUser").value;

let subject = "Oceanic Shop Request";

let body =
"Item: " + selectedItem + "%0D%0A" +
"Discord Username: " + user;

window.location.href =
"mailto:oceanicfreightlinesvtc@gmail.com?subject=" + subject + "&body=" + body;

closeShop();
}