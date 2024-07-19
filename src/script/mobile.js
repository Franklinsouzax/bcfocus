function toggleMenu() {
    var listMobile = document.getElementById('list-mobile');
    
 
    if (listMobile.style.display === 'flex') {
        listMobile.style.display = 'none'; 
    } else {
        listMobile.style.display = 'flex'; 
    }
}