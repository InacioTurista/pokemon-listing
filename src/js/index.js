const themeChangerButton = document.getElementById("theme-changer-button");

const body = document.querySelector("body");

const changeThemeImage = document.querySelector(".button-image");

themeChangerButton.addEventListener("click", () => {
  const darkModeIsOn = body.classList.contains("dark-mode");

  body.classList.toggle("dark-mode");

  if (darkModeIsOn) {
    // body.classList.remove("dark-mode");
    changeThemeImage.setAttribute("src", "./src/images/sun.png");
  } else {
    // body.classList.add("dark-mode");
    changeThemeImage.setAttribute("src", "./src/images/moon.png");
  }
});
