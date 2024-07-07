function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScroll() {
    var iconsElements = document.querySelectorAll('.icons');
    iconsElements.forEach(function(iconElement) {
      if (isElementInViewport(iconElement)) {
        iconElement.classList.add('aparecer');
      }
    });
  }
  
  // Adiciona um ouvinte de evento para scroll e redimensionamento da janela
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
  window.addEventListener('DOMContentLoaded', handleScroll);
  
  // Chama handleScroll() inicialmente para verificar visibilidade ao carregar a página
  handleScroll();
  