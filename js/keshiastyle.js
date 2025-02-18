 // Array to store signed up emails
 let signedUpEmails = [];

 // Function to handle form submission
 document.getElementById('signupForm').addEventListener('submit', function(event) {
     event.preventDefault(); // Prevent form submission

     let email = document.getElementById('emailInput').value;

     if (signedUpEmails.includes(email)) {
         alert('You are already signed up!');
     } else {
         signedUpEmails.push(email);
         console.log('New signup:', email);
         // Optionally, you can close the popup after signup
         closePopup();
     }
 });

 // Function to close the popup
 function closePopup() {
     document.getElementById('popup').style.display = 'none';
 }

 // Carousel
 document.addEventListener("DOMContentLoaded", function () {
    const carouselElement = document.querySelector("#homeCarousel");
    const carousel = new bootstrap.Carousel(carouselElement);

    document.querySelector("#carouselPause").addEventListener("click", function () {
        carousel.pause();
    });

    document.querySelector("#carouselPlay").addEventListener("click", function () {
        carousel.cycle();
    });
});
