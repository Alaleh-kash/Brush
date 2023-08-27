/*fancy box*/
Fancybox.bind("[data-fancybox]", {
    // Custom options for all galleries
    });

    Fancybox.bind('[data-fancybox="gallery-a"]', {
    // Custom options for the first gallery
    });

    Fancybox.bind('[data-fancybox="gallery-b"]', {
    // Custom options for the second gallery
    });
    
    /*carousel*/
    const container = document.getElementById("myCarousel");
    const options = {
      Dots: false,
      Thumbs: {
        type: "classic",
      },
    };
    new Carousel(container, options, { Thumbs });

   /*panzoom*/
    function panzoomImage(instance, current) {
      var $panzoomContainer = current.find('.panzoom-container');
      $panzoomContainer.panzoom();
  }
      
  $(document).ready(function(){
  $('[data-fancybox]').fancybox();

      $(".panzoom-container").on('mouseup', function(event) {
          event.stopPropagation();
      });
  })

new Carousel(document.getElementById('cardSlider'), {
  Navigation: {
    prevTpl:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 5l-7 7 7 7"/><path d="M4 12h16"/></svg>',
    nextTpl:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 12h16"/><path d="M13 5l7 7-7 7"/></svg>',
  },

  infinite: true,
  center: false,
  slidesPerPage: 'auto',
  transition: false,
});


    window.addEventListener("scroll", function() {
      var content = document.querySelector(".scroll-content");
      var contentPosition = content.getBoundingClientRect().top;
      var screenPosition = window.innerHeight / 1.5;

      if (contentPosition < screenPosition) {
        content.classList.add("show-content");
      }
    });
  
    