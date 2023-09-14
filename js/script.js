
let user_info=document.querySelector("#user_info")
let user_data=document.querySelector("#user")
let links=document.querySelector("#link")

if (localStorage.getItem("username")){
  links.remove()
  user_info.style.display="flex"
  user_data.innerHTML=localStorage.getItem("username")
}
let logoutbtn=document.querySelector("#logout")
logoutbtn.addEventListener("click" , function(){
  localStorage.clear();
  setTimeout(()=>{
    window.location="login.html";
  },1500)
})
// ------------------------------------------------
let btn=document.querySelector(".sec_1_btnnn")

btn.addEventListener("click" , function(){
  setTimeout(()=>{
    window.location="details.html"
  },1000)
})

let btn1=document.querySelector(".sec_1_btnnn1")

btn1.addEventListener("click" , function(){
  setTimeout(()=>{
    window.location="details.html"
  },1000)
})
let btn2=document.querySelector(".sec_1_btnnn2")

btn2.addEventListener("click" , function(){
  setTimeout(()=>{
    window.location="details.html"
  },1000)
})

let btn5=document.querySelector(".sec_3_buttonnn")

btn5.addEventListener("click" , function(){
  setTimeout(()=>{
    window.location="details.html"
  },1000)
})
// ---------------------------------------slider----------------
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}













