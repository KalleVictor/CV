// // Accordion toggle functionality
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.accordion-title').forEach(title => {
//     title.addEventListener('click', () => {
//       const content = title.nextElementSibling;
//       const isVisible = content.style.display === 'block';

//       document.querySelectorAll('.accordion-content').forEach(el => el.style.display = 'none');
//       content.style.display = isVisible ? 'none' : 'block';
//     });
//   });
// });

// // Smooth scrolling functionality
// Accordion toggle functionality
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.accordion-title').forEach(title => {
//     title.addEventListener('click', () => {
//       const content = title.nextElementSibling;
//       const isOpen = content.classList.contains('open');

//       if (isOpen) {
//         content.classList.remove('open');
//         title.classList.remove('active');
//       } else {
//         content.classList.add('open');
//         title.classList.add('active');
//       }
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', (e) => {
      // Prevent double toggling when clicking links or interactive elements
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;

      const title = item.querySelector('.accordion-title');
      const content = item.querySelector('.accordion-content');
      const isOpen = content.classList.contains('open');

      if (isOpen) {
        content.classList.remove('open');
        title.classList.remove('active');
      } else {
        content.classList.add('open');
        title.classList.add('active');
      }
    });
  });
});