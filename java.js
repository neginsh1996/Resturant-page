let menu = document.querySelector ('#menu-bars'); /*تکه کد برای باز و بسته کردن دکمه منو*/
let navbar = document.querySelector('.navbar'); /*تکه کد برای باز و بسته کردن دکمه منو*/




menu.onclick = () => { /*تکه کد برای باز و بسته کردن دکمه منو*/
    menu.classList.toggle('bx-x'); /*تکه کد برای باز و بسته کردن دکمه منو*/
    navbar.classList.toggle('active'); /*تکه کد برای باز و بسته کردن دکمه منو*/
} 


let section = document.querySelectorAll('section'); /*تکه کد برای اسکرول شدن دکمه ها  */
let navLinks = document.querySelectorAll('header .navbar a'); /*تکه کد برای اسکرول شدن دکمه ها  */

window.onscroll = () => { /*تکه کد برای باز و بسته کردن دکمه منو*/

    menu.classList.remove('bx-x'); /*تکه کد برای باز و بسته کردن دکمه منو*/
    navbar.classList.remove('active'); /*تکه کد برای باز و بسته کردن دکمه منو*/

  section.forEach(sec => { /*تکه کد برای اسکرول شدن دکمه ها  */

    let top = window.scrollY; /*تکه کد برای اسکرول شدن دکمه ها  */
    let height = sec.offsetHeight; /*تکه کد برای اسکرول شدن دکمه ها  */
    let offset = sec.offsetTop - 150; /*تکه کد برای اسکرول شدن دکمه ها  */
    let id = sec.getAttribute('id'); /*تکه کد برای اسکرول شدن دکمه ها  */

    if(top >= offset && top < offset + height) { /*تکه کد برای اسکرول شدن دکمه ها  */
      navLinks.forEach(links => { /*تکه کد برای اسکرول شدن دکمه ها  */
        links.classList.remove('active'); /*تکه کد برای اسکرول شدن دکمه ها  */
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active'); /*تکه کد برای اسکرول شدن دکمه ها  */
      });
    };
  });  
}


/*تکه کد برای باز و بسته کردن دکمه سرچ*/
document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}



/* تکه کد برای اسلاید قسمت هوم*/
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });



  /* تکه کد برای اسلاید قسمت رویو*/
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });