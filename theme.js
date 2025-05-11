const strgColorSchemeName="preferedColorScheme";
var themeSelector = document.getElementById("color-scheme");
var themeBtn = document.getElementById("theme-change-btn");
themeBtn = document.getElementById("theme-change-btn");
function switchTheme() {
  switch(themeSelector.value) {
    case "system":
      themeSelector.value = "dark";
      themeBtn.setAttribute("src", "https://xntk.ru/images/icons/moon.svg");
      break;
    case "dark":
      themeSelector.value = "light";
      themeBtn.setAttribute("src", "https://xntk.ru/images/icons/sun.svg");
      break;
    case "light":
      themeSelector.value = "oled";
      themeBtn.setAttribute("src", "https://xntk.ru/images/icons/eye.svg");
      break;
    case "oled":
      themeSelector.value = "system";
      themeBtn.setAttribute("src", "https://xntk.ru/images/icons/circle_with_tilda.svg");
      break;
  }
  localStorage.setItem(strgColorSchemeName, themeSelector.value);
}
function restoreThemePreference() {
  themeSelector = document.getElementById("color-scheme");
  themeBtn = document.getElementById("theme-change-btn");
  const scheme = localStorage.getItem(strgColorSchemeName);
  if(!scheme) return;
  const option = themeSelector.value;
  if(!option) {
    localStorage.removeItem(strgColorSchemeName);
    return;
  }
  option.selected = true;
  themeSelector.value=scheme;
  switch(themeSelector.value) {
    case "system":
      themeBtn.setAttribute("src", "https://xntk.ru/images/icons/circle_with_tilda.svg");
      break;
    case "dark":
      themeBtn.setAttribute("src", "https://xntk.ru/images/icons/moon.svg");
      break;
    case "light":
      themeBtn.setAttribute("src", "https://xntk.ru/images/icons/sun.svg");
      break;
    case "oled":
      themeBtn.setAttribute("src", "https://xntk.ru/images/icons/eye.svg");
      break;
  }
  document.documentElement.style.transitionDuration = 'var(--transition-duration, 200ms)';
  document.documentElement.style.transitionProperty = 'background';
}