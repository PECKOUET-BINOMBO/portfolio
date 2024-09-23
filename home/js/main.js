document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.my-5');
  
    sections.forEach(section => {
      const header = section.querySelector('.flex.items-center.justify-between');
      const chevron = section.querySelector('.chevron');
      const content = section.querySelector('.content');
  
      if (header && chevron && content) {
        header.addEventListener('click', () => {
          // Toggle the rotation of the chevron
          chevron.classList.toggle('rotate');
          
          // Toggle the visibility of the content
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
      }
    });
  });