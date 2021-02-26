// board js
// 카테고리즈 클릭하면 자식 etarget에 active, article의 첫번째에 show
const categories = document.querySelector(".categories");
const cateArti = document.querySelectorAll(".cate_arti");
let currentMenu;
let currentContent;

function activate(elem) {
  let tabNum = elem.getAttribute('data-tabnum');
  console.log(tabNum); // 0
  elem.classList.add("active");
  cateArti[tabNum].classList.add("show");
  currentMenu = elem;
  currentContent = cateArti[tabNum];
}

function inactivate(elem, elem2){
  elem.classList.remove("active");
  elem2.classList.remove("show");
}

function clickHandler(e) {
  let target = e.target.closest('li');
  if (currentMenu, currentContent) {
    inactivate(currentMenu, currentContent);
  }
  activate(target);
}





categories.addEventListener("click", clickHandler);
activate(document.querySelectorAll('.categories_btns')[0]);
// function clickHandler(e) {
//   let target = e.target.closest('li');
//   let tabNum = target.getAttribute('data-tabnum');

//   if (currentMenu) {
//     currentMenu.classList.remove("active");
//     currentContent.classList.remove("show");
//   } target.classList.add("active");
//   cateArti[tabNum].classList.add("show");
//   currentMenu = target;
//   currentContent = cateArti[tabNum];
// }

// currentMenu=cateArti[0].classList.add("show");
// currentContent = cateArti[0];

