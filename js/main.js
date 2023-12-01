function changeImage() {
  const cartImage = document.getElementById("cart1");

  if (cartImage.src.includes("photos/bag.png")) {
    cartImage.src = "photos/bag-with-item.png";

    cartImage.classList.add("changed-image");

    document.querySelector(".add-to-cart-button button").disabled = true;
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
