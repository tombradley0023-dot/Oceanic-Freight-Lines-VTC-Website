function toggleMenu(){
document.getElementById("navLinks").classList.toggle("show");
}

function sendApplication(){

let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let tmpid = document.getElementById("tmpid").value;
let reason = document.getElementById("reason").value;

let subject = "Oceanic Freight Lines Application";

let body =
"Name: " + name + "%0D%0A" +
"Age: " + age + "%0D%0A" +
"TruckersMP ID: " + tmpid + "%0D%0A" +
"Reason: " + reason;

window.location.href =
"mailto:oceanicfreightlinesvtc@gmail.com?subject=" + subject + "&body=" + body;
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