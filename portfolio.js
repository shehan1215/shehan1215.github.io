//----------- Menu ----------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//----------- Scroll sections active navigation links ----------
let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href *=' + id + ']').classList.add('active');
            });
        };
    });   
//----------- navBar ------------
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

//----------- Menu Icon Modification ----------
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
};

//----------- Swiper ------------
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// readMore and readLess
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

//------------- Dark Mode ---------------------

let darkModeIcon = document.querySelector('#darkMode');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

//................ Scroll .......................

ScrollReveal({ 
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .skills-container, .portfolio-box, .testimonial-wrapper, contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

//----------------- Contact ----------------------

function contactForm(){
  var fields = {
     fullName: document.getElementById("name").value,
     email: document.getElementById("email").value,
     companyname: document.getElementById("cName").value,
     subject: document.getElementById("subject").value,
     message: document.getElementById("message").value,
  };
const servcId = "service_njoneus";
const tempId = "template_norwxom";

emailjs.send(servcId,tempId,fields).then(
  res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("cName").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your Message Sent Successfully, Thank You!")
      })
      .catch((err) => console.log(err));
}
