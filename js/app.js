/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

console.log("Starting to run app.js ...");

/*
Funtion will query all sections of the main page (index.html) to get the section tiltle
wich will become the menu's name, then append list items to the anchored unordered list
with all attibutes needed to display the styled list as a menu.
*/

const renderMenu = () => {

    const sections = document.body.querySelectorAll("section");
    const menuList = document.querySelector("#navbar__list");

    for(let i = 0; i < sections.length; ++i){
        const menuName = sections[i].getElementsByTagName("h2");
        const textSection = menuName[0].textContent;
        const menuId = sections[i].id;
        const newMenuItem = `<li><a class="menu__link" href="#${menuId}" >${textSection}</a></li>`
        menuList.insertAdjacentHTML('beforeend', newMenuItem)
    }

};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

renderMenu();

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

