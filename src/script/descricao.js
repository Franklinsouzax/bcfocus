function isElementAlmostInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Define o offset para aparecer um pouco antes
    var offset = -100; // Ajuste o valor conforme necessário
    
    return (
        rect.bottom > 0 &&
        rect.top < windowHeight + offset
    );
}

function handleScroll() {
    var colunaElements = document.querySelectorAll('.coluna');
    colunaElements.forEach(function(colunaElement) {
        if (isElementAlmostInViewport(colunaElement)) {
            colunaElement.classList.add('aparecer');
        }
    });
}

// Adiciona um ouvinte de evento para scroll e redimensionamento da janela
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
window.addEventListener('DOMContentLoaded', handleScroll);

// Chama handleScroll() inicialmente para verificar visibilidade ao carregar a página
handleScroll();
