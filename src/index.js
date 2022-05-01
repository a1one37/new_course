import qq from './template_of_food.hbs'
import json_template from './menu.json' 
localStorage.removeItem('randid')

const a = document.querySelector('#menu')
json_template.forEach((elem)=>{
 const template = qq(elem)  
a.insertAdjacentHTML('beforeend', template)
})





// =========================================THEME==========================================================================

const btn_switch_theme = document.querySelector('#theme-switch-toggle');
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  
  document.body.classList.add("dark-theme");
  btn_switch_theme.checked = true
}


btn_switch_theme.addEventListener("change", function () {

  document.body.classList.toggle("dark-theme");

  let theme = "light";

  if (document.body.classList.contains("dark-theme")) {
 
    theme = "dark";
    
  }

  localStorage.setItem("theme", theme);
});

























