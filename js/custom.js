function openCity(evt, cityName) {
  let i, depth1List, depth2;
  
  depth2 = document.querySelectorAll(".depth2");
  for (i = 0; i <  depth2.length; i++) {
    depth2[i].style.display = "none";
    depth2[i].className =  depth2[i].className.replace(" active", "");
  }
  
 depth1List = document.querySelectorAll(".depth1_list");
  for (i = 0; i < depth1List.length; i++) {
    depth1List[i].className = depth1List[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// function openCity(evt, cityName) {
//   let i, depth1List, depth2;

//   depth2 = document.querySelectorAll(".depth2");
//   depth1List = document.querySelectorAll(".depth1_list");
//   depth2Info = document.querySelectorAll(".depth2_info");
//   depth2Listbox = document.querySelectorAll(".depth2_listbox");

//   for (let i = 0; i < depth2.length; i++){
//     depth2[i].style.display = "none";
//   }

//   for (let i = 0; i < depth1List.length; i++){
//     depth1List[i].className = depth1List[i].className.replace(" on", "");

//   }

//   document.getElementById(cityName).style.display = "block";
//   evt.depth2.className += " on";
// }

//   for (let i = 0; i < depth1List.length; i++){
//     depth1List[i].addEventListener("mouseover", function () {
        
//       }
//     });
    
//     depth1List[i].classList.remove("on");
//   }


//   for (let i = 0; i < depth1List.length; i++){
//     depth2[i].className.replace(" on", "depth2");
//   }

// }




// for(let i = 0; i < depth1List.length; i++) {
//   depth1List[i].addEventListener("mouseover", function () {
//     depth2[i].classList.add("on");
//     depth2Info[i].classList.add("on");
//     depth2Listbox[i].classList.add("on");

//     depth2[1].classList.remove("on");
//     depth2Info[1].classList.remove("on");
//     depth2Listbox[1].classList.remove("on");
//     depth2[2].classList.remove("on");
//     depth2Info[2].classList.remove("on");
//     depth2Listbox[2].classList.remove("on");
//     depth2[3].classList.remove("on");
//     depth2Info[3].classList.remove("on");
//     depth2Listbox[3].classList.remove("on");
//   });
// }


// depth1List[0].addEventListener("mouseover", function () {
//   depth2[0].classList.add("on");
//   depth2Info[0].classList.add("on");
//   depth2Listbox[0].classList.add("on");

//   depth2[1].classList.remove("on");
//   depth2Info[1].classList.remove("on");
//   depth2Listbox[1].classList.remove("on");
//   depth2[2].classList.remove("on");
//   depth2Info[2].classList.remove("on");
//   depth2Listbox[2].classList.remove("on");
//   depth2[3].classList.remove("on");
//   depth2Info[3].classList.remove("on");
//   depth2Listbox[3].classList.remove("on");
// });

// depth1List[1].addEventListener("mouseover", function () {
//   depth2[1].classList.add("on");
//   depth2Info[1].classList.add("on");
//   depth2Listbox[1].classList.add("on");

//   depth2[0].classList.remove("on");
//   depth2Info[0].classList.remove("on");
//   depth2Listbox[0].classList.remove("on");
//   depth2[2].classList.remove("on");
//   depth2Info[2].classList.remove("on");
//   depth2Listbox[2].classList.remove("on");
//   depth2[3].classList.remove("on");
//   depth2Info[3].classList.remove("on");
//   depth2Listbox[3].classList.remove("on");
// });


// depth1List[2].addEventListener("mouseover", function () {
//   depth2[2].classList.add("on");
//   depth2Info[2].classList.add("on");
//   depth2Listbox[2].classList.add("on");

//   depth2[0].classList.remove("on");
//   depth2Info[0].classList.remove("on");
//   depth2Listbox[0].classList.remove("on");
//   depth2[1].classList.remove("on");
//   depth2Info[1].classList.remove("on");
//   depth2Listbox[1].classList.remove("on");
//   depth2[3].classList.remove("on");
//   depth2Info[3].classList.remove("on");
//   depth2Listbox[3].classList.remove("on");
// });

// depth1List[3].addEventListener("mouseover", function () {
//   depth2[3].classList.add("on");
//   depth2Info[3].classList.add("on");
//   depth2Listbox[3].classList.add("on");

//   depth2[0].classList.remove("on");
//   depth2Info[0].classList.remove("on");
//   depth2Listbox[0].classList.remove("on");
//   depth2[1].classList.remove("on");
//   depth2Info[1].classList.remove("on");
//   depth2Listbox[1].classList.remove("on");
//   depth2[2].classList.remove("on");
//   depth2Info[2].classList.remove("on");
//   depth2Listbox[2].classList.remove("on");
// });

// depth2[0].addEventListener("mouseleave", function () {
//   depth2[0].classList.remove("on");
//   depth2Info[0].classList.remove("on");
//   depth2Listbox[0].classList.remove("on");
// })


// depth2[1].addEventListener("mouseleave", function () {
//   depth2[1].classList.remove("on");
//   depth2Info[1].classList.remove("on");
//   depth2Listbox[1].classList.remove("on");
// });

// depth2[2].addEventListener("mouseleave", function () {
//   depth2[2].classList.remove("on");
//   depth2Info[2].classList.remove("on");
//   depth2Listbox[2].classList.remove("on");
// });

// depth2[3].addEventListener("mouseleave", function () {
//   depth2[3].classList.remove("on");
//   depth2Info[3].classList.remove("on");
//   depth2Listbox[3].classList.remove("on");
// });
