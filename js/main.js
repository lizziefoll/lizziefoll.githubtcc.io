(function ($) {
    "use strict";
    
    
// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
  } else {
      $('.back-to-top').fadeOut('slow');
  }
});
$('.back-to-top').click(function () {
  $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
  return false;
});

// Facts counter
$('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 2000
});


/* FILTRO */
/**
   * recomend isotope and filter
   */
let recomendIsotope = document.querySelector('.recomend-isotope');

if (recomendIsotope) {

  let recomendFilter = recomendIsotope.getAttribute('data-recomend-filter') ? recomendIsotope.getAttribute('data-recomend-filter') : '*';
  let recomendLayout = recomendIsotope.getAttribute('data-recomend-layout') ? recomendIsotope.getAttribute('data-recomend-layout') : 'masonry';
  let recomendSort = recomendIsotope.getAttribute('data-recomend-sort') ? recomendIsotope.getAttribute('data-recomend-sort') : 'original-order';

  window.addEventListener('load', () => {
    let recomendIsotope = new Isotope(document.querySelector('.recomend-container'), {
      itemSelector: '.recomend-item',
      layoutMode: recomendLayout,
      filter: recomendFilter,
      sortBy: recomendSort
    });

    let menuFilters = document.querySelectorAll('.recomend-isotope .recomend-flters li');
    menuFilters.forEach(function(el) {
      el.addEventListener('click', function() {
        document.querySelector('.recomend-isotope .recomend-flters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        recomendIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aos_init === 'function') {
          aos_init();
        }
      }, false);
    });

  });

}
    
})(jQuery);
