document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert('Thank you for contacting us! We will get back to you soon.');
    document.getElementById('contact-form').reset();
  } else {
    alert('Please fill out all fields.');
  }
  
});
// Initialize the Swiper
var swiper = new Swiper('.swiper-container', {
  loop: true, // Infinite loop for the slideshow
  autoplay: {
    delay: 3000, // 3 seconds between slides
  },
  pagination: {
    el: '.swiper-pagination', // The dots navigation
    clickable: true, // Enable clicking on the dots
  },
  navigation: {
    nextEl: '.swiper-button-next', // Next button
    prevEl: '.swiper-button-prev', // Previous button
  },
});