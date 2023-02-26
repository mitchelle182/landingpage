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
const navbar_list = document.getElementById('navbar__list');
let navbar_list_num = sections.length;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// navBuild function is to dynamically build the navigation bar at the top of the page. It populates every time a new section is added to the HTML page
function navBuild() {
    for (const section of sections){
        let section_num = section.getAttribute('data-nav');
        let section_id = section.getAttribute('id');
        let navbar_item = document.createElement('li');
        navbar_item.innerHTML += `<a href="#${section_id}">${section_num}</a>`;
        navbar_list.appendChild(navbar_item);
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
        if (rect.top < 100 && rect.bottom > 200) {
            section.classList.add('your-active-class');
        }else {
            section.classList.remove('your-active-class');
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