import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
console.log(galleryItems);

const createGallery = () => {
  let tempGallery = [];

  galleryItems.forEach((e, i) => {
    const { preview, original, description } = galleryItems[i];
    const li = document.createElement("li");
    const a = document.createElement("a");
    const img = document.createElement("img");
    // assign classes
    li.classList.add("gallery__item");
    a.classList.add("gallery__link");
    img.classList.add("gallery__image");
    // assign attributes
    a.setAttribute("href", original);
    img.setAttribute("src", preview);
    img.setAttribute("data-source", original);
    img.setAttribute("alt", description);

    li.appendChild(a).appendChild(img);
    tempGallery.push(li);
  });
  console.log(tempGallery);
  gallery.append(...tempGallery);
};
createGallery();
gallery.addEventListener("click", () => {
  event.preventDefault();
});
