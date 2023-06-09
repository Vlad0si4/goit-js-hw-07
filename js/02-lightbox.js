import { galleryItems } from './gallery-items.js';
// Change code below this line


const newGalleryList = document.querySelector('.gallery');

const galleryItem = galleryItems.map(({ preview, original, description }) =>
  `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img class="gallery__image" src=${preview} alt=' ${description}' />
  </a>
</li>`);

newGalleryList.insertAdjacentHTML('beforeend', galleryItem.join(''))


const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});


