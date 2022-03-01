const btnlist = document.querySelector('.btn-list');
const btnContactOn = document.querySelector('.header-contact');
const menulist = document.querySelector('.header-manu-list');
const menu = document.querySelector('.header-manu');
const startPaig =document.querySelector(".start-point");

function menuShow(e){
    menulist.classList.toggle('is-open');
}
function menuLinksClick(e){
    if(e.target.closest(".about-link")){
        var scrollItem = document.querySelector('.about');
        scrollItem.scrollIntoView();
        window.scrollBy(0,-50);
    }
    if(e.target.closest(".skills-link")){
        var scrollItem = document.querySelector('.skills');
        scrollItem.scrollIntoView();
        window.scrollBy(0,-50);
    }
    if(e.target.closest(".projects-link")){
        var scrollItem = document.querySelector('.project');
        scrollItem.scrollIntoView();
        window.scrollBy(0,-50);
    }
    menulist.classList.toggle('is-open');
}
btnlist.addEventListener("click", menuShow);
menu.addEventListener("click",menuLinksClick);
menulist.addEventListener("click",menuLinksClick);
// popup start
let modal;
const classNameBtn ="header-contact btn col-lg-1 offset-lg-3 col-md-2 offset-md-1 col-sm-3  offset-sm-4 col-3 offset-3";
document.addEventListener("click", (e) => {
 if (e.target.className == classNameBtn ) {
    modal = document.getElementById(e.target.dataset.id);
    openModal(modal);
  } else if (e.target.className === "Popup-model-close btn") {
    closeModal(modal);
  } else {
    return;
  }
});

const openModal = (modal) => {
  document.body.style.overflow = "hidden";
  modal.setAttribute("open", "true");
  document.addEventListener("keydown", escClose);
  let overlay = document.createElement("div");
  overlay.id = "Popup-modal-overlay";
  document.body.appendChild(overlay);
};

const closeModal = (modal) => {
  document.body.style.overflow = "auto";
  modal.removeAttribute("open");
  document.removeEventListener("keydown", escClose);
  document.body.removeChild(document.getElementById("Popup-modal-overlay"));
};

const escClose = (e) => {
    console.log(e.keyCode)
  if (e.keyCode == 27) {
    closeModal(modal);
  }
};
// popup end
var btn = document.querySelector(".start-point-btn");
document.addEventListener("DOMContentLoaded", (е) => {
  setTimeout(function() {
    var text1 = document.querySelector(".start-point-text1");
    text1.classList.add("start-open");
  }, 1000);
  setTimeout(function() {
    var text2 = document.querySelector(".start-point-text2");
    text2.classList.add("start-open");
  }, 3000);
  setTimeout(function() {
    btn.classList.add("start-open");
  }, 4000);
}); 
btn.addEventListener("click" , (e) => {
  startPaig.classList.add("start-close")});