$(document).ready(function() {
  $('#full-page').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: true,
    anchors: [
      'introduction',
      'crowdfunding',
      'whats-bravos',
      'roadmap',
      'team',
      'advisors',
      'contact',
    ],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: [
      'Introduction',
      'Crowdfunding',
      'What\'s Bravos',
      'Roadmap',
      'Team',
      'Advisors/Partners',
      'Contact',
    ],
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,

    //Design
    fixedElements: '#header',

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    afterLoad: function(anchor, index) {
      console.log(anchor);
      console.log(index);
      if (index === 2) {
        $('#fp-nav').addClass('red');
      } else {
        $('#fp-nav').removeClass('red');
      }
    },

  });
});
