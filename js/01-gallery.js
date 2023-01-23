import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line
//1) Створення і рендер розмітки на підставі масиву даних 

const galleryContainerItems = document.querySelector('.gallery');
const createGalleryItems = galleryItemsCardsMarkup(galleryItems);
galleryContainerItems.insertAdjacentHTML('afterbegin', createGalleryItems);

function galleryItemsCardsMarkup(galleryItems) {
return galleryItems
	.map(({ description, original, preview}) => {
		return `
			<div class="gallery__item">
			<a class="gallery__link" href="${original}" />
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