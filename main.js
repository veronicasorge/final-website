function changeImage() {
  var cartImage = document.getElementById("cart1");
  if (cartImage.src.match("photos/bag.png")) {
    cartImage.src = "photos/bag-with-item.png";
  } else {
    cartImage.src = "photos/bag.png";
    cartImage.classList.add("changed-image");
  }
}
