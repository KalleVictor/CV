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
      // Make sure we always find the right parent .accordion-item
      const clickedItem = e.target.closest('.accordion-item');
      if (!clickedItem) return;

      const content = clickedItem.querySelector('.accordion-content');
      const title = clickedItem.querySelector('.accordion-title');

      const isOpen = content.classList.contains('open');

      // Toggle the open class
      content.classList.toggle('open', !isOpen);
      title.classList.toggle('active', !isOpen);
    });
  });
});