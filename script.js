const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UI Designer',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

      //Javascript for Navigation effect on scroll
      window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
      });

      //Javascript for responsive navigation sidebar Nav
      var menu = document.querySelector('.menu');
      var menuBtn = document.querySelector('.menu-btn');
      var closeBtn = document.querySelector('.close-btn');

      menuBtn.addEventListener("click", () => {
        menu.classList.add('active');
      });

      closeBtn.addEventListener("click", () => {
        menu.classList.remove('active');
      });

/*Scroll Sections Active Link*/
let Sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });

        };
    });

};



/*Scroll Reveal*/
ScrollReveal({ 
    /* reset: true,*/
     distance: '80px',
     duration: 2000,
     delay: 200
 });
 
 ScrollReveal().reveal('.description, .heading, h1', { origin: 'top' });
 ScrollReveal().reveal('.home img, .about, .container, .port_container, .form', { origin: 'bottom' });
 ScrollReveal().reveal('.home_photo, .about_photo', { origin: 'left' });
 ScrollReveal().reveal('.about_section', { origin: 'right' });



 const form = document.getElementById("form");
 const result = document.getElementById("result");
 
 form.addEventListener("submit", function (e) {
   const formData = new FormData(form);
   e.preventDefault();
   var object = {};
   formData.forEach((value, key) => {
     object[key] = value;
   });
   var json = JSON.stringify(object);
   result.innerHTML = "Please wait...";
 
   fetch("https://api.web3forms.com/submit", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       Accept: "application/json"
     },
     body: json
   })
     .then(async (response) => {
       let json = await response.json();
       if (response.status == 200) {
         result.innerHTML = json.message;
         result.classList.remove("text-gray-500");
         result.classList.add("text-green-500");
       } else {
         console.log(response);
         result.innerHTML = json.message;
         result.classList.remove("text-gray-500");
         result.classList.add("text-red-500");
       }
     })
     .catch((error) => {
       console.log(error);
       result.innerHTML = "Something went wrong!";
     })
     .then(function () {
       form.reset();
       setTimeout(() => {
         result.style.display = "none";
       }, 5000);
     });
 });