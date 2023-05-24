import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
console.log(galleryItems);

const createGallery = () => {
  //"virtual" array
  let tempGallery = [];
  //creating each element
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
    //creating proper item
    li.appendChild(a).appendChild(img);
    tempGallery.push(li);
  });
  //push to real gallery
  gallery.append(...tempGallery);
};

function eventHandler(event) {
  //blocking unwanted click behaviour
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
  //modal
  const instance = basicLightbox.create(
    `<img src ="${event.target.dataset.source}">`
  );
  instance.show();
  const visible = instance.visible();
  if (visible) {
    document.addEventListener("keyup", ({ key }) => {
      if (key === "Escape") instance.close();
    });
  }
}
createGallery();
gallery.addEventListener("click", eventHandler);
