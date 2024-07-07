// Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Verifica se a parte de baixo do elemento está dentro da janela visível
    return rect.bottom >= 0 && rect.bottom <= windowHeight;
}

// Função para lidar com o scroll da página
function handleScroll() {
    var topicosElement = document.querySelector('.topicos-quem-somos');
    var paragraphs = topicosElement.querySelectorAll('p');
    
    // Verifica cada parágrafo
    paragraphs.forEach(function(paragraph) {
        if (isElementInViewport(paragraph)) {
            paragraph.classList.add('mostrar'); // Adiciona a classe 'mostrar' quando está visível
        }
    });
}

// Adiciona um ouvinte de evento para scroll e redimensionamento da janela
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
window.addEventListener('DOMContentLoaded', handleScroll);

// Chama handleScroll() inicialmente para verificar visibilidade ao carregar a página
handleScroll();

