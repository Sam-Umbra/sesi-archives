// script.js

document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
    const submenu = dropdown.querySelector('.submenu');
    const submenuItems = document.querySelectorAll('.submenu-item');
    
    // Controla o clique no submenu principal
    dropdown.addEventListener('click', function (event) {
        event.preventDefault();
        submenu.style.display = (submenu.style.display === 'block' ? 'none' : 'block');
    });

    // Controla o clique no submenu dentro do submenu (Consultoria)
    submenuItems.forEach(item => {
        const secondaryMenu = item.querySelector('.submenu .submenu');
        
        if (secondaryMenu) {
            item.addEventListener('click', function (event) {
                event.stopPropagation();  // Impede que o evento se propague para o menu pai
                secondaryMenu.style.display = (secondaryMenu.style.display === 'block' ? 'none' : 'block');
            });
        }
    });

    // Fecha o submenu se o usuário clicar fora do menu
    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target)) {
            submenu.style.display = 'none';
            submenuItems.forEach(item => {
                const secondaryMenu = item.querySelector('.submenu-secondary');
                if (secondaryMenu) {
                    secondaryMenu.style.display = 'none';
                }
            });
        }
    });
});