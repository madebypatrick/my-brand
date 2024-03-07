document.addEventListener('DOMContentLoaded', function () {
    const toggleMenuButton = document.getElementById('toggleMenu');
    const navBar = document.querySelector('.navBar');
  
    toggleMenuButton.addEventListener('click', function () {
      navBar.classList.toggle('show');
      toggleMenuButton.classList.toggle('active');
    });
  });