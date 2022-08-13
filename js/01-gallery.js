import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryElement = document.querySelector(".gallery");

const itemsToInsert = galleryItems
  .map(
    (item) =>
      `<div class = "gallery__item"><a class = "gallery__link" href = "${item.original}"><img class = "gallery__image"src = "${item.preview}"data-source="${item.original}"alt = "${item.description}"></div>`
  )
  .join("");

galleryElement.insertAdjacentHTML("beforeend", itemsToInsert);

galleryElement.addEventListener("click", onImageHandler);

function onImageHandler(e) {
  e.preventDefault();
  if (e.target.className !== "gallery__image") {
    return;
  }

  const highResolutionImageUrl = e.target.dataset.source;

  const instance = basicLightbox.create(`
  <img src="${highResolutionImageUrl}">
`);

  instance.show();
}
