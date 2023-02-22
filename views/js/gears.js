'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
    
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * search bar toggle
 */

const searchBar = document.querySelector("[data-search-bar]");
const searchTogglers = document.querySelector("[data-search-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleSearchBar = function () {
  searchBar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(searchTogglers, "click", toggleSearchBar);
// change the copyright year according to the year 
let date = new Date()
let year = date.getFullYear()
let copyright = document.querySelector('.copyright')
copyright.innerHTML = `
&copy; SinghExplains ${year}. Published by <a href="https://www.youtube.com/@SinghinUSA" target="_blank" class="copyright-link hover:underline">SinghInUsa</a>.`

// Redirect indians to somewhere and others to somewhere else 
const func = async ()=>{
  const request = await fetch("https://ipinfo.io/json?token=48fb69c09c1a3e");
  const jsonResponse = await request.json()
  console.log(jsonResponse.ip, jsonResponse.country);
  let buy = document.querySelector('.buy')
  buy.addEventListener("click", ()=>{
    if (jsonResponse.country == "IN") {
      window.location.replace("https://github.com/cleverhare")
    }
    else{ 
      window.location.replace("https://github.com/iharnoor")
  
    }

  })
}
func()