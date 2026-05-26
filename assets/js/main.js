/**  
  Template Name: Reanty - Real Estate HTML Template
  Author: Themes Studio
  Description: Reanty - Real Estate HTML Template
  Version: 1.0.0
  File Description: Main JS file of the template
*/

(function ($) {
  ("use strict");

  var windowOn = $(window);

  windowOn.on("load", function () {
    wowAnimation();
  });

  /*=============================================
	=    		Preloader			      =
=============================================*/
  function preloader() {
    $("#preloader").delay(0).fadeOut();
  }

  windowOn.on("load", function () {
    preloader();
  });

  /*=============================================
	=    		Animation On Hover			 =
=============================================*/
  function animationOnHover() {
    let cards = document.querySelectorAll(".tmponhover, .tmponhover-two");
    cards.forEach((tmpOnHover) => {
      tmpOnHover.addEventListener("mousemove", (e) => {
        let rect = tmpOnHover.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        tmpOnHover.style.setProperty("--x", `${x}px`);
        tmpOnHover.style.setProperty("--y", `${y}px`);
      });
    });
  }

  animationOnHover();

  /*=============================================
	=        Mouse Active          =
=============================================*/
  $(".slider-drag").on("mouseenter", function () {
    $(".mouseCursor").addClass("cursor-big");
  });
  $(".slider-drag").on("mouseleave", function () {
    $(".mouseCursor").removeClass("cursor-big");
  });

  $("a,.sub-menu,button").on("mouseenter", function () {
    $(".mouseCursor").addClass("opacity-0");
  });
  $("a,.sub-menu,button").on("mouseleave", function () {
    $(".mouseCursor").removeClass("opacity-0");
  });

  // Mouse Custom Cursor
  function itCursor() {
    var myCursor = jQuery(".mouseCursor");
    if (myCursor.length) {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        ((window.onmousemove = function (s) {
          (o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX));
        }),
          $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
            (e.classList.add("cursor-hover"), t.classList.add("cursor-hover"));
          }),
          $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
            ($(this).is("a", "button") &&
              $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible"));
      }
    }
  }
  itCursor();

  /*=============================================
	=    		 Mobile Menu			      =
=============================================*/
  // offcanvas toogle
  $(".ts-offcanvas-toogle").on("click", function () {
    $(".ts-offcanvas").addClass("ts-offcanvas-open");
    $(".ts-offcanvas-overlay").addClass("ts-offcanvas-overlay-open");
  });
  $(".ts-offcanvas-close-toggle,.ts-offcanvas-overlay,.ts-click-close").on(
    "click",
    function () {
      $(".ts-offcanvas").removeClass("ts-offcanvas-open");
      $(".ts-offcanvas-overlay").removeClass("ts-offcanvas-overlay-open");
    },
  );

  // mobile menu
  var tsMenuWrap = $(".ts-mobile-menu-active > ul").clone();
  var tsSideMenu = $(".ts-offcanvas-menu nav");
  tsSideMenu.append(tsMenuWrap);
  if ($(tsSideMenu).find(".sub-menu, .ts-mega-menu").length != 0) {
    $(tsSideMenu)
      .find(".sub-menu, .ts-mega-menu")
      .parent()
      .append(
        '<button class="ts-menu-close"><i class="fas fa-chevron-right"></i></button>',
      );
  }

  var sideMenuList = $(
    ".ts-offcanvas-menu nav > ul > li button.ts-menu-close, .ts-offcanvas-menu nav > ul li.has-dropdown > a",
  );
  $(sideMenuList).on("click", function (e) {
    e.preventDefault();
    if (!$(this).parent().hasClass("active")) {
      $(this).parent().addClass("active");
      $(this).siblings(".sub-menu, .ts-mega-menu").slideDown();
    } else {
      $(this).siblings(".sub-menu, .ts-mega-menu").slideUp();
      $(this).parent().removeClass("active");
    }
  });

  /*=============================================
  	=    Menu sticky      =
=============================================*/
  windowOn.on("scroll", function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 245) {
      $("#ts-sticky-header").removeClass("ts-sticky-menu");
    } else {
      $("#ts-sticky-header").addClass("ts-sticky-menu");
    }
  });

  /*=============================================
	=    		Menu & Mobile Menu Home	Four		   =
=============================================*/
  // offcanvas toogle
  $(".ts-offcanvas-open-btn").on("click", function () {
    $(".ts-offcanvas-2-area").addClass("opened");

    setTimeout(() => {
      $(".ts-text-hover-effect-word").addClass("animated-text");
    }, 900);
  });

  $(".ts-offcanvas-2-close-btn").on("click", function () {
    setTimeout(() => {
      $(".ts-text-hover-effect-word").removeClass("animated-text");
    }, 1200);

    $(".ts-offcanvas-2-area").removeClass("opened");
    $(".body-overlay").removeClass("opened");
  });

  // mobile menu
  if ($(".ts-main-menu-content").length && $(".ts-main-menu-mobile").length) {
    let navContent = document.querySelector(".ts-main-menu-content").outerHTML;
    let mobileNavContainer = document.querySelector(".ts-main-menu-mobile");
    mobileNavContainer.innerHTML = navContent;

    let arrow = $(".ts-main-menu-mobile .has-dropdown > a");

    arrow.each(function () {
      let self = $(this);
      let arrowBtn = document.createElement("BUTTON");
      arrowBtn.classList.add("dropdown-toggle-btn");
      arrowBtn.innerHTML = "<i class='fa-light fa-plus'></i>";

      self.append(function () {
        return arrowBtn;
      });

      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("dropdown-opened");
        self.parent().toggleClass("expanded");
        self
          .parent()
          .parent()
          .addClass("dropdown-opened")
          .siblings()
          .removeClass("dropdown-opened");
        self.parent().parent().children(".ts-submenu").slideToggle();
      });
    });
  }

  /*=============================================
  	=    Scroll to top      =
=============================================*/
  // Page Scroll Percentage
  function scrollTopPercentage() {
    const scrollPercentage = () => {
      const scrollTopPos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollValue = Math.round((scrollTopPos / calcHeight) * 100);
      const scrollElementWrap = $("#scroll-percentage");

      scrollElementWrap.css(
        "background",
        `conic-gradient( var(--ts-white) ${scrollValue}%, var(--ts-theme-color) ${scrollValue}%)`,
      );

      // Scroll Progress
      if (scrollTopPos > 101) {
        scrollElementWrap.addClass("active");
      } else {
        scrollElementWrap.removeClass("active");
      }

      if (scrollValue < 96) {
        $("#scroll-percentage-value").text(`${scrollValue}%`);
      } else {
        $("#scroll-percentage-value").html(
          '<i class="far fa-angle-double-up"></i>',
        );
      }
    };
    window.onscroll = scrollPercentage;
    window.onload = scrollPercentage;

    // Back to Top
    function scrollToTop() {
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    $("#scroll-percentage").on("click", scrollToTop);
  }

  windowOn.on("load", function () {
    scrollTopPercentage();
  });

  /*=============================================
	=       Search Bar		      =
=============================================*/
  $(".ts-search-toggle").on("click", function () {
    $(".ts-header-search-bar").addClass("ts-search-open");
    $(".ts-header-search-bar-overlay").addClass(
      "ts-header-search-bar-overlay-open",
    );
  });

  $(".ts-search-close,.ts-header-search-bar-overlay").on("click", function () {
    $(".ts-header-search-bar").removeClass("ts-search-open");
    $(".ts-header-search-bar-overlay").removeClass(
      "ts-header-search-bar-overlay-open",
    );
  });

  /*=============================================
	=       Data Background  		      =
=============================================*/
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")",
    );
  });

  /*=============================================
	=       Data Background  Color		      =
=============================================*/
  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  /*=============================================
	=       Data  Color		      =
=============================================*/
  $("[data-color]").each(function () {
    $(this).css("color", $(this).attr("data-color"));
  });

  /*=============================================
	=    		Banner Swiper Slider	      =
=============================================*/
  var swiperThumbs = new Swiper(".tsBannerSwiperThumb", {
    spaceBetween: 0,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper = new Swiper(".tsBannerSwiper", {
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 1,
    pagination: {
      el: ".ts-banner-swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    scrollbar: {
      el: ".ts-banner-swiper-scrollbar",
      hide: false,
    },
    autoplay: {
      delay: 6000,
    },
    thumbs: {
      swiper: swiperThumbs,
    },
  });

  /*=============================================
  	=    		Banner Two Swiper Slider		      =
=============================================*/
  var swiper = new Swiper(".tsBanner2Swiper", {
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: ".ts-swiper-banner2-button-next",
      prevEl: ".ts-swiper-banner2-button-prev",
    },
  });

  /*=============================================
	=    		Sells Properties Swiper Slider	      =
=============================================*/
  var swiperThumbs = new Swiper(".tsSellsPropertiesSwiperThumb", {
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper = new Swiper(".tsSellsPropertiesSwiper", {
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 1,
    pagination: {
      el: ".ts-sells-properties-swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    scrollbar: {
      el: ".ts-sells-properties-swiper-scrollbar",
      hide: false,
    },
    autoplay: {
      delay: 6000,
    },
    thumbs: {
      swiper: swiperThumbs,
    },
  });

  /*=============================================
	=    		Testimonial Swiper Slider		     =
=============================================*/
  var swiper = new Swiper(".tsTestimonialSwiper", {
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: ".ts-swiper-testimonial-button-next",
      prevEl: ".ts-swiper-testimonial-button-prev",
    },
  });

  /*=============================================
	=    		Property Swiper Slider		      =
=============================================*/
  var swiper = new Swiper(".tsPropertySwiper", {
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 3,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: ".ts-swiper-property-button-next",
      prevEl: ".ts-swiper-property-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  /*=============================================
	=    		Property List Swiper Slider		      =
=============================================*/
  var swiper = new Swiper(".tsPropertyListSwiper", {
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: ".ts-swiper-property-list-button-next",
      prevEl: ".ts-swiper-property-list-button-prev",
    },
  });

  /*=============================================
  	=      Brand Title Swiper Slider        	=
=============================================*/
  var swiper = new Swiper(".tsBrandTitleSwiper", {
    slidesPerView: "auto",
    spaceBetween: 36,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 4000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
  });

  /*=============================================
	=    	Portfolio Slick Slider Home Four		 =
=============================================*/
  $(".ts-portfolio-slick-slider-active").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa-light fa-arrow-left-long"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa-light fa-arrow-right-long"></i></button>',
    arrows: true,
    asNavFor: ".ts-portfolio-slick-slider-nav-active",
    fade: true,
    speed: 1000,

    // autoplay
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  var helpers = {
    addZeros: function (n) {
      return n < 10 ? "0" + n : "" + n;
    },
  };

  function sliderInit() {
    var $slider = $(".ts-portfolio-slick-slider-nav-active");

    $slider.each(function () {
      var $sliderParent = $(this).parent();

      $(this).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".ts-portfolio-slick-slider-active",
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="fa-light fa-arrow-left-long"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="fa-light fa-arrow-right-long"></i></button>',
        dots: false,
        focusOnSelect: true,
        centerPadding: "0",
        speed: 600,

        // autoplay
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: false,
        pauseOnFocus: false,

        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 4,
            },
          },
        ],
      });

      if ($(this).find(".ts-portfolio-slick-slider-nav-item").length > 1) {
        $(this).siblings(".slides-numbers").show();
      }

      $(this).on("afterChange", function (event, slick, currentSlide) {
        $sliderParent
          .find(".slides-numbers .active")
          .html(helpers.addZeros(currentSlide + 1));
      });
    });
  }

  sliderInit();

  /*=============================================
	=    		Project Isotope Active 		      =
=============================================*/
  $(".ts-featured-property-area").imagesLoaded(function () {
    var grid = $(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
    });

    $(".ts-featured-property-menu").on("click", "li", function () {
      var filterValue = $(this).attr("data-filter");
      grid.isotope({ filter: filterValue });
    });

    // project menu active class
    $(".ts-featured-property-menu li").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  });

  /*=============================================
  	=    		Odometer Active  	       =
=============================================*/
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  /*=============================================
	=    		Magnific Popup		      =
=============================================*/
  // magnific popup image view
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: false,
    },
  });

  // magnific popup video view
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  /*=============================================
  	=    		Gsap All		      =
=============================================*/
  document.addEventListener("DOMContentLoaded", function () {
    if (typeof gsap !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, SplitText);
    }

    // Split text animation
    document.fonts.ready.then(() => {
      const splitTextEls = document.querySelectorAll(".split-text");

      if (splitTextEls.length) {
        splitTextEls.forEach((el) => {
          if (!el) return;

          let split = new SplitText(el, {
            type: "words,chars",
            linesClass: "ts-split-line",
          });

          gsap.set(el, { perspective: 400 });

          let chars = split.chars || [];

          if (el.classList.contains("right")) {
            gsap.set(chars, { opacity: 0, x: 50 });
          }
          if (el.classList.contains("left")) {
            gsap.set(chars, { opacity: 0, x: -50 });
          }
          if (el.classList.contains("up")) {
            gsap.set(chars, { opacity: 0, y: 80 });
          }
          if (el.classList.contains("down")) {
            gsap.set(chars, { opacity: 0, y: -80 });
          }

          if (chars.length) {
            gsap.to(chars, {
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
              },
              x: 0,
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.03,
            });
          }
        });
      }
    });

    // Image reveal animation
    const revealContainers = document.querySelectorAll(".reveal");

    revealContainers.forEach((container) => {
      if (!container) return;

      const image = container.querySelector("img");
      if (!image) return;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none none",
        },
      });

      tl.set(container, { autoAlpha: 1 });

      if (container.classList.contains("zoom-out")) {
        tl.from(image, {
          duration: 1.5,
          scale: 1.4,
          ease: "power2.out",
        });
      } else if (
        container.classList.contains("left") ||
        container.classList.contains("right")
      ) {
        let xPercent = container.classList.contains("left") ? -100 : 100;

        tl.from(container, {
          duration: 1.5,
          xPercent,
          ease: "power2.out",
        });

        tl.from(
          image,
          {
            duration: 1.5,
            xPercent: -xPercent,
            scale: 1,
            ease: "power2.out",
          },
          "-=1.5",
        );
      } else if (
        container.classList.contains("up") ||
        container.classList.contains("down")
      ) {
        let yPercent = container.classList.contains("up") ? 100 : -100;

        tl.from(container, {
          duration: 1.5,
          yPercent,
          ease: "power2.out",
        });

        tl.from(
          image,
          {
            duration: 1.5,
            yPercent: -yPercent,
            scale: 1,
            ease: "power2.out",
          },
          "-=1.5",
        );
      }
    });

    // Fade-up animation
    document.querySelectorAll(".content").forEach((section) => {
      const targets = section.querySelectorAll(".fade-up");

      if (!targets.length) return;

      gsap.from(targets, {
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 60,
        duration: 0.6,
        stagger: 0.2,
      });
    });
  });

  /*=============================================
	=    		Password Toggle		      =
=============================================*/
  $("#password-addon").click(function () {
    let input = $("#userpassword"); //
    let icon = $(this).find("i");

    input.attr("type", input.attr("type") === "password" ? "text" : "password");
    icon.toggleClass("fa-eye fa-eye-slash");
  });

  /*=============================================
	=    		Wow Animation		      =
=============================================*/
  function wowAnimation() {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }
})(jQuery);
