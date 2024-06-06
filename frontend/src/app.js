//when the user scrolls the page, execute myFunction
/*
window.onscroll = function() {
    myFunction()
};

// Get the header
var header = document.getElementById("myHeader");

//Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position.
function myFunction() {
    if(window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
} 
*/

// JavaScript to make the header sticky when scrolling
window.addEventListener("scroll", () => {
    const header = document.querySelector("#myHeader");
    if(window.scrollY > 0) {
        header.document.classList.add("scrolled");
    } else {
        header.document.classList.remove("scrolled");
    }
});
