// JavaScript for the accordion functionality
// This script toggles the accordion items when clicked

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const clickedItem = e.target.closest('.accordion-item');
      if (!clickedItem) return;

      const content = clickedItem.querySelector('.accordion-content');
      const title = clickedItem.querySelector('.accordion-title');

      const isOpen = content.classList.contains('open');

      // Close all others if you want (optional):
      // document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
      // document.querySelectorAll('.accordion-title').forEach(t => t.classList.remove('active'));

      content.classList.toggle('open', !isOpen);
      title.classList.toggle('active', !isOpen);
    });
  });
});