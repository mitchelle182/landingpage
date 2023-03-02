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
const sections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');
let navbarListNum = sections.length;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// navBuild function is to dynamically build the navigation bar at the top of the page. It populates every time a new section is added to the HTML page
function navBuild() {
    for (const section of sections){
        let sectionNum = section.getAttribute('data-nav');
        let sectionId = section.getAttribute('id');
        let navbarItem = document.createElement('li');
        navbarItem.id = `nav-item-${sectionId}`; 
        navbarItem.innerHTML += `<a href="#${sectionId}">${sectionNum}</a>`;
        navbarList.appendChild(navbarItem);
    }

}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
navBuild();
 
// Add class 'active' to section when near top of viewport

//sectionActiveView function is to highlight section that appears in the viewport
function sectionActiveView() {
    for (const section of sections){
        const rect = section.getBoundingClientRect(); 
        const navbarItemId = `nav-item-${section.id}`;
        const navlink = document.getElementById(navbarItemId);

        if (rect.top < 100 && rect.bottom > 200) {
            section.classList.add('live-view');
            navlink.classList.add('nav-link-active');
        } else {
            section.classList.remove('live-view');
            navlink.classList.remove('nav-link-active');
        }
   
       
    }
}
sectionActiveView();


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
document.addEventListener("scroll", sectionActiveView);
// // Set sections as active
sectionActiveView();