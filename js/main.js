const sidebar = document.querySelector('.sidebar');
const gallery = document.querySelector('.gallery');
const intro1 = document.querySelector('.intro1');
const intro2 = document.querySelector('.intro2');
document.querySelector('button').onclick = function () {
  sidebar.classList.toggle('sidebar_small');
  gallery.classList.toggle('gallery_large');
  intro1.classList.toggle('intro1_large');
  intro2.classList.toggle('intro2_large');
}