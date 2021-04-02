function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  
  burger.addEventListener("click", () => {
      //Toggle Nav
      nav.classList.toggle("nav-active");
      
      //Animate Links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ""
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
      });
      //Burger Animation
      burger.classList.toggle("toggle");
  });
  
}

navSlide();


//Back to top button
mybutton = document.getElementById("button-top");
mybutton.style.display = "none";
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var pixelValue = 500;
  if (document.body.scrollTop > pixelValue || document.documentElement.scrollTop > pixelValue) {
     mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
//End: Fucntions for Back to Top button *****/
$(document).ready(function(){
    //Create Back to Top Button and append to breadcrumb side bar
    $('<button/>',{
        text: 'Back to Top',
        id: 'button-top',
        on: {
            click: function(){
                topFunction();
            }
        }
    }).appendTo('footer');

});