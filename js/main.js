const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.gallery');
document.querySelector('button').onclick = function () {
  sidebar.classList.toggle('sidebar_small');
  mainContent.classList.toggle('gallery_large')
}