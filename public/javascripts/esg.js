
// $('#carousel-esg').owlCarousel({
//   items: 4,
//   loop: false,
//   center: true,
//   margin: 10,
//   URLhashListener: true,
//   autoplayHoverPause: true,
//   startPosition: 'URLHash'
// });

// console.log('Function is loaded');
// //counterd
// function animateCounting() {
//   const activeItem = document.querySelector('.owl-item.active'); // Get the currently active Owl Carousel item
//   const counters = activeItem.querySelectorAll('.counter'); // Select counters within the active item

//   counters.forEach(counter => {
//     const startValue = 0; // Starting value for the counter
//     const endValue = parseFloat(counter.textContent); // Get the target end value from the element's text
//     const duration = 200000; // Duration in milliseconds (adjust as needed)
//     const increment = (endValue - startValue) / (duration / 1000); // Calculate the increment per second

//     let current = startValue;
//     const timer = setInterval(function () {
//       current += increment;
//       counter.textContent = current.toFixed(0); // Update the content without decimal places

//       if (current >= endValue) {
//         clearInterval(timer);
//         counter.textContent = endValue; // Ensure the final value is accurate
//       }
//     }, 1000 / 60); // 60 FPS
//   });
// }

// // Call the animateCounting function when the page is loaded
// window.addEventListener('load', animateCounting);


// // Function to animate counting for the active Owl Carousel item
// function animateCounting(activeItem) {
//   const counters = activeItem.querySelectorAll('.counter'); // Select counters within the active item

//   counters.forEach(counter => {
//     const startValue = 0; // Starting value for the counter
//     const endValue = parseFloat(counter.textContent); // Get the target end value from the element's text
//     const duration = 2000; // Duration in milliseconds (adjust as needed)
//     const increment = (endValue - startValue) / (duration / 1000); // Calculate the increment per second

//     let current = startValue;
//     const timer = setInterval(function () {
//       current += increment;
//       counter.textContent = current.toFixed(0); // Update the content without decimal places

//       if (current >= endValue) {
//         clearInterval(timer);
//         counter.textContent = endValue; // Ensure the final value is accurate
//       }
//     }, 1000 / 60); // 60 FPS
//   });
// }

// // Initialize Owl Carousel and attach event listeners
// $(document).ready(function () {
//   const owl = $('.carousel-esg-care').owlCarousel({
//     // Owl Carousel options
//     onChanged: handleCarouselChange, // Attach the onChanged event listener
//   });

//   // Function to handle the Owl Carousel change event
//   function handleCarouselChange(event) {
//     // Get the currently active item
//     const activeItem = event.item;

//     // Trigger the counting animation for the active item
//     animateCounting(activeItem);
//   }
// });

// console.log('Function is defined');