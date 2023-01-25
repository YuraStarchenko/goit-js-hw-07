import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line

// 1) Створення і рендер розмітки на підставі масиву даних 
const galleryContainerItems = document.querySelector('.gallery');
const createGalleryItems = galleryItemsCardsMarkup(galleryItems);
galleryContainerItems.insertAdjacentHTML('afterbegin', createGalleryItems);
galleryContainerItems.addEventListener('click', imgClickZoomModal);

function galleryItemsCardsMarkup(galleryItems) {
return galleryItems
	.map(({ description, original, preview}) => {
		return `
		<div class="gallery__item">
  <a class="gallery__link"  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}" 
      alt="${description}"
    />
  </a>
</div>
	`;
})
	.join('');
}
// 2) Реалізація делегування на div.gallery і отримання url великого зображення.
function imgClickZoomModal(event) {
	event.preventDefault();

	if(event.target.tagName !== 'IMG') {
		return;
	}

	const dataSrc = event.target.dataset.source;
	const instance = basicLightbox.create(`<img src="${dataSrc}">`);

	instance.show();

	// 3) Закриття з клавіатури Escape.
	galleryContainerItems.addEventListener('keydown', function(event) {
		if (event.code === 'Escape') {
			galleryContainerItems.removeEventListener('keydown', imgClickZoomModal)
		instance.close();
	}
});
}


