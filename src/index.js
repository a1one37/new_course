import qq from './template_of_food.hbs'

import json_template from './menu.json' 

console.log( json_template);
console.log(qq);
const a = document.querySelector('#menu')


// проблема со строчками 13-14, строки 58-72 не относятся к коду


// const template = qq(JSON.parse(json_template))  
// console.log(template);




// =========================================THEME==========================================================================


const btn_switch_theme = document.querySelector('#theme-switch-toggle');
const theme = {
        light: 'light-theme',
        dark: 'dark-theme',
      };








const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  
  document.body.classList.add("dark-theme");
}


btn_switch_theme.addEventListener("change", function () {

  document.body.classList.toggle("dark-theme");

  let theme = "light";

  if (document.body.classList.contains("dark-theme")) {
 
    theme = "dark";
  }

  localStorage.setItem("theme", theme);
});


// const currentTheme = localStorage.getItem('theme')

// if(currentTheme == Theme.DARK){
//     document.body.classList.add('Theme.DARK')
// }

// btn_switch_theme.addEventListener('change', function(){
//     document.body.classList.toggle('Theme.DARK')
//     let theme = 'Theme.LIGHT'
//     if(document.body.classList.contains('Theme.DARK')){
//         theme = Theme.DARK
//     }

//     localStorage.setItem('theme', theme)
// })




























// const myObj = {
//     title: 'Languages, that i want to know',
//     arr: ['phyton', 'java script', 'java', 'kotlin', 'c++']

// }

// console.log(template);
// localStorage.setItem('title', myObj.title)
// localStorage.setItem('arr',JSON.stringify(myObj.arr))
// localStorage.removeItem('randid')


// const g = JSON.stringify(json_template)


// a.insertAdjacentHTML('afterbegin', template)
// console.log('object');
// document.addEventListener('DOMContentLoaded',() => {
// const q = localStorage.getItem('title')
// const w = localStorage.getItem('arr')
// const e = JSON.parse(w)
// console.log(q, e);
// })