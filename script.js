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




document.addEventListener("DOMContentLoaded", function() {
  ScrollReveal().reveal('.details-container-right', {
    origin: 'right',
    distance: '200px',
    duration: 2000,
    delay: 600,
    easing: 'ease-in-out'
  });

  ScrollReveal().reveal('.details-container-left', {
    origin: 'left',
    distance: '200px',
    duration: 2000,
    delay: 600,
    easing: 'ease-in-out'
  });
});





const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ;= ():-';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00FF00';
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const char = characters[Math.floor(Math.random() * characters.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(char, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drops.fill(1);
});

