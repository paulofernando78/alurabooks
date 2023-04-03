var x = document.querySelector("#menu-mobile ul");
x.style.visibility === "hidden";

function button_menu() {
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}
