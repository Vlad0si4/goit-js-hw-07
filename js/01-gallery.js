import { galleryItems } from './gallery-items.js';
// Change code below this line

const newGalleryList = document.querySelector('.gallery');

const galleryItem = galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
<a class="gallery__link" href=${original}>
<img class="gallery__image"
 src=${preview}
data-source=${original}
alt='${description}'></a></li>`)

newGalleryList.insertAdjacentHTML('beforeend', galleryItem.join(''))

console.log(galleryItems);

const handlerClickImg = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`<img src=${event.target.dataset.source} alt=${event.target.alt} width="800" height="600">
  `, {onClose: (instance) => newGalleryList.removeEventListener('keydown', closeOnEsc)}
  );
  instance.show();

  const closeOnEsc = (event) => {
    if (event.code === 'Escape') {
      instance.close();
    }
  };

  newGalleryList.addEventListener('keydown', closeOnEsc);
};
newGalleryList.addEventListener('click', handlerClickImg)