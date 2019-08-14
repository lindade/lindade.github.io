//Get the current year for the copyright with: <span id="year"></span>
$('#year').text(new Date().getFullYear());

// default bootstrap scrollspy
$('body').scrollspy({
  target: '#main-nav'
});

// Add smooth scrolling
$('#main-nav a').on('click', function (e) {
  // Check for a hash value: #home, #about, ...
  // if the link that is clicked is not equeal to an empty string
  if (this.hash !== '') {
    // Prevent default behavior of the a tag
    e.preventDefault();

    // Store hash value in a variable
    const hash = this.hash;
    // Get fixed header height, + 10 px to move 10px more down
    var menuHeight = $('#main-nav').height() + 10;

    // Animate smooth scroll
    $('html, body').animate({
      scrollTop: $(hash).offset().top - menuHeight
    }, 900, function () {
      // Add hash to the url after the scroll
      window.location.hash = hash - menuHeight;
    });
  }
});