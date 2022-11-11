const sidebar = document.querySelector('.sidebar');
const gallery = document.querySelector('.gallery');
const intro2 = document.querySelector('.intro2');
const copyright = document.querySelector('.copyright');
const intable = document.querySelector('.intable');
const footer = document.querySelector('.footer');
const intro1 = document.querySelector('.intro1');
document.querySelector('button').onclick = function () {
  sidebar.classList.toggle('sidebar_small');
  gallery.classList.toggle('gallery_large');
  intro2.classList.toggle('intro2_large');
  copyright.classList.toggle('copyright_large');
  intro1.classList.toggle('intro1_large');
  intable.classList.toggle('intable_large');
  footer.classList.toggle('footer_large');
}