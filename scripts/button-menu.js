function button_menu() {
  const menuElement = document.querySelector("#menu-mobile ul");
  if (menuElement.classList.contains("hidden")) {
    menuElement.classList.remove("hidden");
  } else {
    menuElement.classList.add("hidden");
  }
}
