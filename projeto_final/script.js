// animação de entrada dos elementos ao rolar a página
const revealEls = document.querySelectorAll(
  '.sobre-grid, .skills-grid, .projetos-grid, .contato-links'
);

revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

revealEls.forEach(el => revealObserver.observe(el));

// animação das barras de habilidades
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

skillFills.forEach(fill => skillObserver.observe(fill));