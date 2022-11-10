const sidebar = document.querySelector('.sidebar');
const gallery = document.querySelector('.gallery');
document.querySelector('button').onclick = function () {
  sidebar.classList.toggle('sidebar_small');
  gallery.classList.toggle('gallery_large')
}