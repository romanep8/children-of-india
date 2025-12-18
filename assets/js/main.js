const burger = document.querySelector('.hbg');
const navmenu = document.querySelector('.nav-menu');
  
burger.addEventListener('click', function(e) {
    e.preventDefault();
    navmenu.classList.toggle('open');
    burger.classList.toggle('hbgcross');
});

function closeMenuOnResize() {
    if (window.innerWidth > 1050) {
        navmenu.classList.remove('open');
        burger.classList.remove('hbgcross');
    }
}

window.addEventListener('resize', closeMenuOnResize);


const zoomInButton = document.getElementById('zoom-in');
const zoomOutButton = document.getElementById('zoom-out');
const toggleThemeButton = document.getElementById('toggle-theme');
let currentZoom = 1;
const maxZoom = 2;
const minZoom = 0.5;

zoomInButton.addEventListener('click', function() {
    if (currentZoom < maxZoom) {
        currentZoom += 0.1;
        document.body.style.zoom = currentZoom;
    }
});

zoomOutButton.addEventListener('click', function() {
    if (currentZoom > minZoom) {
        currentZoom -= 0.1;
        document.body.style.zoom = currentZoom;
    }
});

toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});