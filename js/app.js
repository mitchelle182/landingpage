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
function navBuild() {
    for (section of sections){
        let section_num = section.getAttribute('data-nav');
        let section_id = section.getAttribute('id');
        let navbar_item = document.createElement('li');
        navbar_item.innerHTML += `<a href="#${section_id}">${section_num}</a>`;
        navbar_list.appendChild(navbar_item);
    }

};



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
navBuild();
 
// Add class 'active' to section when near top of viewport

//I know I definitely wrote this wrong but this is me writing out my thought process 
function sectionActiveView() {
        for (section of sections){
            let active_section = section.getBoundingClientRect();        
            if(active_section.style.top = 0 & active_section.style.left = 0;) {
                section.classList.add('your-active-class');

            }else {
                section.classList.remove('your-active-class');
            }
               
        }
       
           
} 

// Scroll to anchor ID using scrollTO event
function youSeeMeScrollin() {
    let section_anchor = document.querySelector('#section');
    section_anchor.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'

    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
document.addEventListener('scroll', youSeeMeScrollin);
// Set sections as active
sectionActiveView();