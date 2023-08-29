// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector('.gallery');


const galleryCreate = galleryItems.map(({ preview:small, original:large, description }) =>
 `
<li class="gallery__item ">
      <a class="gallery__link " href="${large}">
      <img class="gallery__image"
           src="${small}"
           alt="${description}" />
      </a>
</li>
`
).join(''); 

gallery.insertAdjacentHTML('afterbegin', galleryCreate);


let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt'});