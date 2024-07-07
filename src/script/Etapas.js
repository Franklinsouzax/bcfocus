function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Verifica se pelo menos metade do elemento está visível
    return rect.top >= 0 && rect.top <= windowHeight * 0.5;
}

function handleScroll() {
    var articles = document.querySelectorAll('.area-como-funciona');

    articles.forEach(function(article, index) {
        if (isElementInViewport(article)) {
            article.classList.add('aparecer');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);
window.addEventListener('DOMContentLoaded', handleScroll);

handleScroll(); // Verifica visibilidade ao carregar a página inicialmente
