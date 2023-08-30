let card = document.querySelector(".trend");
let mainpage = document.querySelector(".main");
let about = document.querySelector(".about");
let contact = document.querySelector(".Contact"); 
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let find = document.querySelector(".mainForm");

function Product() {
    mainpage.style.display = "none";
    card.style.display = "block";
    about.style.display = "none";
    contact.style.display="none";
    find.style.display="none";
    document.getElementById("shop").style.color = "rgb(231,151,3)";
    document.getElementById("home").style.color = "black";
    document.getElementById("abouts").style.color = "black";
    document.getElementById("contact").style.color = "black";
   
}


function home() {
    mainpage.style.display = "flex";
    card.style.display = "block";
    contact.style.display="none";
    find.style.display="none";
    document.getElementById("home").style.color = " rgb(231,151,3)";
    document.getElementById("shop").style.color = "black";
    document.getElementById("abouts").style.color = "black";
    document.getElementById("contact").style.color = "black";
}
function about1(){
    about.style.display ="block";
    mainpage.style.display ="none";
    card.style.display ="none";
    contact.style.display="none";
    find.style.display="none";
    document.getElementById("abouts").style.color = " rgb(231,151,3) ";
    document.getElementById("shop").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("contact").style.color = "black";
}
function contact1(){
    about.style.display = "none";
    mainpage.style.display = "none";
    card.style.display = "none";
    contact.style.display="block";
    find.style.display="none";
    document.getElementById("abouts").style.color = " black ";
    document.getElementById("shop").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("contact").style.color = "rgb(231,151,3)";
}
function find1(){
    about.style.display = "none";
    mainpage.style.display = "none";
    card.style.display = "none";
    contact.style.display="none";
    find.style.display="flex";
}

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
      }else{
        document.querySelector('#scroll-top').classList.remove('active');
      }
}
   menu.onclick = () => {
  
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
  }