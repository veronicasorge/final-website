function changeImage() {
  var cartImage = document.getElementById("cart1");
  if (cartImage.src.match("photos/bag.png")) {
    cartImage.src = "photos/bag-with-item.png";
  } else {
    cartImage.src = "photos/bag.png";
    cartImage.classList.add("changed-image");
  }
}

function updateImages() {
  const dropdown = document.getElementById("dropdown");
  const mainProductPicture = document.getElementById("main-product-picture");
  const detailPicture3 = document.getElementById("detail-picture-3");

  if (dropdown.value === "option2") {
    mainProductPicture.src = "photos/detail-3.jpg";
    detailPicture3.src = "photos/main-rainbow-earrings.jpg";
  } else {
    mainProductPicture.src = "photos/main-rainbow-earrings.jpg";
    detailPicture3.src = "photos/detail-3.jpg";
  }
}

const images = document.querySelectorAll(".earrings-pictures");

images.forEach((image) => {
  image.addEventListener("mouseover", () => {
    const imageName = dropearrings.id; // Get the ID of the hovered image
    image.src = `/photos/drop.webp${imageName}-hover.jpg`; // Change source to the hover image
  });

  image.addEventListener("mouseout", () => {
    const imageName = image.id; // Get the ID of the hovered image
    image.src = `photos/${imageName}.jpg`; // Change source back to the original image
  });
});
