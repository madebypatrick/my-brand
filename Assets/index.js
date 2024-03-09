document.addEventListener('DOMContentLoaded', function () {
  const toggleMenuButton = document.getElementById('toggleMenu');
  const navBar = document.querySelector('.navBar');

  // Function to close the menu
  function closeMenu() {
      navBar.classList.remove('show');
      toggleMenuButton.classList.remove('active');
  }

  // Toggle menu when hamburger button is clicked
  toggleMenuButton.addEventListener('click', function () {
      navBar.classList.toggle('show');
      toggleMenuButton.classList.toggle('active');
  });

  // Close menu when clicking outside of it
  document.addEventListener('click', function (event) {
      const isClickInsideMenu = navBar.contains(event.target);
      const isClickOnToggleButton = toggleMenuButton.contains(event.target);

      // Close the menu if the click is outside of the menu and not on the toggle button
      if (!isClickInsideMenu && !isClickOnToggleButton) {
          closeMenu();
      }
  });
});
