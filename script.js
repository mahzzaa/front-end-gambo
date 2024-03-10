document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.querySelector('.sidebar');
  const hamburger = document.querySelector('.hamburger');
  const closeIcon = sidebar.querySelector('div:first-child'); // Assuming the close icon is the first child of the sidebar

  function showSidebar(event) {
    sidebar.style.display = 'flex';
    event.stopPropagation(); // Prevent click from immediately propagating to the document
  }

  function hideSidebar() {
    sidebar.style.display = 'none';
  }

  hamburger.addEventListener('click', showSidebar);

  closeIcon.addEventListener('click', function (event) {
    hideSidebar();
    event.stopPropagation(); // Prevent click from propagating to the document
  });

  document.addEventListener('click', function (event) {
    if (!sidebar.contains(event.target) && sidebar.style.display === 'flex' && !hamburger.contains(event.target)) {
      hideSidebar();
    }
  });

  sidebar.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent sidebar click from propagating to the document
  });
});
