
let head = document.getElementsByClassName("accordion-head"),
  panels = document.getElementsByClassName("panel");
  icons = document.getElementsByClassName("icon");

for (let i = 0; i < head.length; i++) {
  head[i].addEventListener("click", () => {
    // if (panels[i].style.display === "block") {
    //   panels[i].style.display == "none";
    // } else {
    //   panels[i].style.display = "block";
    // }
    icons[i].innerHTML = icons[i].style.display === "block" ? "-" : "+";
    panels[i].style.display = panels[i].style.display == "block" ? "none" : "block";
  });
}

// if (panels[i].style.display == "block") {
//   panels[i].style.display == "none";
// } else {
//   panels[i].style.display = "block";
// }