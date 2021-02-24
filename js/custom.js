depth2 = document.querySelectorAll(".depth2");
depth1List = document.querySelectorAll(".depth1_list");
depth2Info = document.querySelectorAll(".depth2_info");
depth2Listbox = document.querySelectorAll(".depth2_listbox");

for (let i = 0; i < depth1List.length; i++) {
  depth1List[i].addEventListener("mouseover", () => {
    depth2[i].classList.add("on");
    depth2Info[i].classList.add("on");
    depth2Listbox[i].classList.add("on");
  });
}

for (let i = 0; i < depth1List.length; i++) {
  depth1List[i].addEventListener("mouseleave", () => {
    depth2[i].classList.remove("on");
    depth2Info[i].classList.remove("on");
    depth2Listbox[i].classList.remove("on");
  });
}

for (let i = 0; i < depth2.length; i++) {
  depth2[i].addEventListener("mouseleave", () => {
    depth2[i].classList.remove("on");
    depth2Info[i].classList.remove("on");
    depth2Listbox[i].classList.remove("on");  
  });
}


// scroll event dom
const headerTop = document.querySelector(".header_top");
const slider = document.querySelector(".slider");
const sliderHeight = slider.getBoundingClientRect().height;
const depth1 = document.querySelector(".depth1");
const contentTop = document.querySelector(".content_top");
const faBars = document.querySelector(".fa-bars");


// gnb & contentTop display show or none 
function scrollEvent() {
  if (window.scrollY > sliderHeight / 2) {
    contentTop.classList.add("show");
  } else {
    contentTop.classList.remove("show")
  }
}

scrollEvent();

document.addEventListener('scroll', scrollEvent);

// search icon click event
const searchIcon = document.querySelector(".fa-search");
const headerBottom = document.querySelector(".header_bottom");
const faTimes = document.querySelectorAll(".fa-times");
const headerNav = document.querySelector(".header_nav");

searchIcon.addEventListener("click", () => {
  headerBottom.classList.add("show");
  faTimes[1].style.display = "block";
  searchIcon.style.display = "none";
});

faTimes[1].addEventListener("click", () => {
  headerBottom.classList.remove("show");
  faTimes[1].style.display = "none";
  searchIcon.style.display = "block";
});


// navi bar click event 
faBars.addEventListener("click", (e) => {
  e.stopPropagation();
  faTimes[0].style.display="block";
  faBars.style.display="none";
  headerNav.classList.add("show");
});

faTimes[0].addEventListener("click", () => {
  faBars.style.display="block";
  faTimes[0].style.display="none";
  headerNav.classList.remove("show");
});

document.addEventListener("click", () => {
  let width = window.innerWidth;
  if (width < 910) {   
    faBars.style.display="block";
    faTimes[0].style.display="none";
    headerNav.classList.remove("show");
  } else {
    return false;
  }
});

// content_top click event
const wrap = document.querySelector(".wrap");
contentTop.addEventListener("click", () => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: wrap.offsetTop
  });
});

// resize event
function handleResize() {
  let width = window.innerWidth;
  if (width > 910) {
    headerNav.classList.remove("show");
    faBars.style.display="none";
    faTimes[0].classList.remove("show");
  } else {
    faBars.style.display="block";
    faTimes[0].style.display="none";
  }
}

window.addEventListener("resize", handleResize);