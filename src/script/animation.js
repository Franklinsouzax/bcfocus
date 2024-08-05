document.addEventListener('DOMContentLoaded', function() {
    const areaTopo = document.querySelector('.area-topo');

    function checkScroll() {
        const rect = areaTopo.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.9) { // Ajuste o valor conforme necessário
            areaTopo.classList.add('visible');
        }
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    checkScroll(); // Verifica o scroll inicial
});
document.addEventListener('DOMContentLoaded', function() {
    const etapas = document.querySelector('.etapas');

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Não parar a observação para permitir o efeito gradual enquanto rola
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Usa o viewport como root
        rootMargin: '0px',
        threshold: 0.1 // Percentual do elemento que precisa estar visível para o callback ser chamado
    });

    observer.observe(etapas);
});