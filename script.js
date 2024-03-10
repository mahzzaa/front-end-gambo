function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex'
}

function hideSidebar(event) {
  if (event) event.preventDefault();
  if (event) event.stopPropagation();

  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}