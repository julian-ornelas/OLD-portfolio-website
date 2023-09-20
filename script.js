keystone-sections.forEach(link => {
    link.addEventListener('click', (section) => {
        section.preventDefault();

         // Removes the "#" from id
        const target_id = link.getAttribute('href').substring(1);

        // Accesses element via id
        const target_section = document.getElementById(target_id);
        
        // Scrolls to target section
        if (target_section) {
            target_section.scrollIntoView({behavior: 'smooth'});
        }
    });
  });