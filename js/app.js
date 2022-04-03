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

const loadSectionData = function () {

    const sections = document.querySelectorAll("section");
    for(let i = 0; i < sections.length; ++i){
        const sectionH2 = sections[i].getElementsByTagName("h2");
        console.log(sectionH2[0].textContent);
    }

};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

loadSectionData();

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

