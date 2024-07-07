// Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Verifica se a parte de cima do elemento está dentro da janela visível
    return rect.top >= 0 && rect.top <= windowHeight * 0.8; // Ajuste o valor conforme necessário
}

// Função para lidar com o scroll da página
function handleScroll() {
    var articles = document.querySelectorAll('.quem-somos-detalhado');
    
    // Verifica cada artigo
    articles.forEach(function(article) {
        if (isElementInViewport(article)) {
            article.classList.add('aparecer'); // Adiciona a classe 'aparecer' quando está visível
        } else {
            article.classList.remove('aparecer'); // Remove a classe se não estiver visível
        }
    });
}

// Adiciona um ouvinte de evento para scroll e redimensionamento da janela
window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
window.addEventListener('DOMContentLoaded', handleScroll);

// Chama handleScroll() inicialmente para verificar visibilidade ao carregar a página
handleScroll();
