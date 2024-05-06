let circle = document.querySelector("#text");
circle.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const ele = document.querySelectorAll("span");
for (let i = 1; i < ele.length; i++) {
  ele[i].style.transform = "rotate(" + i * 16 + "deg)";
}


let circle2 = document.querySelector("#text2");
circle2.innerHTML = text2.textContent.replace(/\S/g, "<span>$&</span>");
const ele2 = document.querySelectorAll("span");
for (let i = 1; i < ele2.length; i++) {
  ele2[i].style.transform = "rotate(" + i * 16 + "deg)";
}

let circle3 = document.querySelector("#text3");
circle3.innerHTML = text3.textContent.replace(/\S/g, "<span>$&</span>");
const ele3 = document.querySelectorAll("span");
for (let i = 1; i < ele3.length; i++) {
  ele3[i].style.transform = "rotate(" + i * 16 + "deg)";
}

function showSideBar(){
  let show = document.querySelector(".sideBar");
  show.style.display = "flex"
}

function hideSideBar(){
  let hide= document.querySelector(".sideBar");
  hide.style.display = "none"
}