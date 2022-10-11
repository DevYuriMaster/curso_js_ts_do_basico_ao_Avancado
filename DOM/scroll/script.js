function initiScrolllSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  
  
    function scrollTosection(event) {
      event.preventDefault;
      const href = event.currentTarget.getAtribute('href');
      const section = document.querySelector(href);
  
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  
  
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollTosection);
    });
  }
  initiScrolllSuave();