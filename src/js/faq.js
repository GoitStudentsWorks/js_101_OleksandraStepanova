import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
document.addEventListener('DOMContentLoaded', function () {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const accordionItem = button.closest('.faq-element');
      const accordionContent =
        accordionItem.querySelector('.accordion-content');

      accordionContent.classList.toggle('active');

      const icon = button.querySelector('.accordion-button-icon');
      icon.classList.toggle('active');

      const useElement = button.querySelector('.accordion-button-icon use');
      if (accordionContent.classList.contains('active')) {
        useElement.setAttribute('href', './img/icons.svg#icon-less');
      } else {
        useElement.setAttribute('href', './img/icons.svg#icon-more');
      }

      if (accordionContent.classList.contains('active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
});
