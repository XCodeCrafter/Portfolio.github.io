function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}







$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
}); // Missing closing bracket


document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector("#menuToggle input");
    const menu = document.querySelector("#menu");
    const menuToggleContainer = document.querySelector("#menuToggle");

    // Toggle menu visibility when checkbox is clicked
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menuToggleContainer.contains(event.target)) {
            menuToggle.checked = false;
            menu.classList.remove("active");
        }
    });

    // Close menu when clicking a menu item
    menu.addEventListener("click", (event) => {
        if (event.target.closest(".menu-btn")) {
            menuToggle.checked = false;
            menu.classList.remove("active");
        }
    });
});






// script.js

document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.getElementById('job-title');
  const texts = ['CNC PROGRAMMER', 'IT PROGRAMMER'];
  let currentTextIndex = 0;
  let currentText = texts[currentTextIndex];
  let isDeleting = false;
  let index = 0;

  function typeWriter() {
      if (isDeleting) {
          currentText = texts[currentTextIndex].slice(0, index--);
      } else {
          currentText = texts[currentTextIndex].slice(0, ++index);
      }

      textElement.innerHTML = currentText;

      if (!isDeleting && index === texts[currentTextIndex].length) {
          setTimeout(() => isDeleting = true, 1000);
      } else if (isDeleting && index === 0) {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          setTimeout(() => {}, 500); // Optional delay before switching texts
      }

      setTimeout(typeWriter, isDeleting ? 50 : 100);
  }

  typeWriter();
});






(function($) {
  $.fn.timeline = function() {
      var selectors = {
          id: $(this),
          item: $(this).find(".timeline-item"),
          activeClass: "timeline-item--active",
          img: ".timeline__img"
      };
      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css(
          "background-image",
          "url(" +
              selectors.item
                  .first()
                  .find(selectors.img)
                  .attr("src") +
              ")"
      );
      var itemLength = selectors.item.length;
      $(window).scroll(function() {
          var max, min;
          var pos = $(this).scrollTop();
          selectors.item.each(function(i) {
              min = $(this).offset().top;
              max = $(this).height() + $(this).offset().top;
              var that = $(this);
              if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
                  selectors.item.removeClass(selectors.activeClass);
                  selectors.id.css(
                      "background-image",
                      "url(" +
                          selectors.item
                              .last()
                              .find(selectors.img)
                              .attr("src") +
                          ")"
                  );
                  selectors.item.last().addClass(selectors.activeClass);
              } else if (pos <= max - 40 && pos >= min) {
                  selectors.id.css(
                      "background-image",
                      "url(" +
                          $(this)
                              .find(selectors.img)
                              .attr("src") +
                          ")"
                  );
                  selectors.item.removeClass(selectors.activeClass);
                  $(this).addClass(selectors.activeClass);
              }
          });
      });
  };
})(jQuery);

$(document).ready(function() {
  $("#timeline-1").timeline();
});












// Initialize the canvas
var canvas = document.getElementById('matrixCanvas'),
    ctx = canvas.getContext('2d');

// Define commonly used display dimensions
const sizes = {
  small: { width: 390, height: 844 },     // Typical smartphone size (e.g., iPhone 12)
  medium: { width: 768, height: 1024 },   // Typical tablet size (e.g., iPad)
};

// Function to set canvas size based on screen width
function setInitialCanvasSize() {
  if (window.innerWidth <= sizes.small.width) {
    // Small screens (e.g., smartphones)
    canvas.width = sizes.small.width;
    canvas.height = sizes.small.height;
    fontSize = 10; // Default font size for small screens
  } else if (window.innerWidth <= sizes.medium.width) {
    // Medium screens (e.g., tablets)
    canvas.width = sizes.medium.width;
    canvas.height = sizes.medium.height;
    fontSize = 14; // Slightly larger font for medium screens
  } else {
    // Large screens (e.g., desktops)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    fontSize = Math.max(16, Math.floor(canvas.width / 100)); // Scale font for large screens
  }
  
  // Set up columns and drops array based on initial size
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1); // Reset drops for new column count
}

// Initial setup
var fontSize = 10;
var columns, drops;
setInitialCanvasSize(); // Set size once on load

// Custom text setup
const customText = `G91
D1
G90
G40
G0 
X0 
Y0
G41
G1 
AP
RP
G3 
AP
RP 
TURN
G40
G0
IC(1)
IF
R602 
GOTOF 
ENDIF:`;
const letters = customText.split(/\r?\n/); // Split by new line to create an array of lines

// Track the first appearance of words in each column
let firstAppearance = Array(columns).fill(false);

// Draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < drops.length; i++) {
    // Choose a random line from custom text
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = firstAppearance[i] ? '#0f0' : '#f5f5f0'; // Highlight the first appearance

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Mark the first appearance
    if (!firstAppearance[i] && drops[i] * fontSize < canvas.height) {
      firstAppearance[i] = true; // Set first appearance to true
    }

    // Reset or increment drop position
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
      drops[i] = 0;
      firstAppearance[i] = false; // Reset the first appearance when it drops off
    }
  }
}

// Loop the animation
setInterval(draw, 100);
