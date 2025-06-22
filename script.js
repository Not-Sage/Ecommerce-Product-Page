document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ];
  let currentIndex = 0;

  function openLightbox() {
    document.getElementById("lightbox").classList.add("active");
    showSlide(currentIndex);
  }

  function closeLightbox() {
    document.getElementById("lightbox").classList.remove("active");
  }

  function changeSlide(n) {
    currentIndex = (currentIndex + n + images.length) % images.length;
    showSlide(currentIndex);
  }

  function currentSlide(index) {
    currentIndex = index;
    showSlide(index);
  }

  function showSlide(index) {
    document.getElementById("lightbox-image").src = images[index];
    const thumbs = document.querySelectorAll(".thumbnails img");
    thumbs.forEach((thumb, i) => {
      thumb.classList.toggle("active", i === index);
    });
  }

  // Quantity Logic
  let quantity = 0;
  const label = document.getElementById("label");
  const incbtn = document.getElementById("increase");
  const decbtn = document.getElementById("decrease");
  const cartCount = document.getElementById("cart-count"); // Optional, if added
  const cartDropdown = document.getElementById("cart-dropdown");
  const cartContent = document.getElementById("cart-content");

  incbtn.addEventListener("click", () => {
    quantity++;
    label.textContent = quantity;
  });

  decbtn.addEventListener("click", () => {
    if (quantity > 0) quantity--;
    label.textContent = quantity;
  });

  window.toggleCart = function () {
    cartDropdown.classList.toggle("hidden");
  };

  window.addToCart = function () {
    if (quantity === 0) return;

    if (cartCount) cartCount.textContent = quantity;
    cartContent.classList.remove("empty");
    cartContent.innerHTML = `
      <div class="cart-item">
        <img src="images/image-product-1-thumbnail.jpg" alt="Product" />
        <div class="cart-item-details" style="font-family: $font;">
          <p>Fall Limited Edition Sneakers</p>
          <p>$125.00 × ${quantity} <strong>$${(125 * quantity).toFixed(2)}</strong></p>
        </div>
        <img src="images/icon-delete.svg" alt="Delete" style="width: 20px; cursor: pointer;font-family: $font;" onclick="removeFromCart()" />
      </div>
    `;
  };

  window.removeFromCart = function () {
    quantity = 0;
    label.textContent = 0;
    if (cartCount) cartCount.textContent = 0;
    cartContent.classList.add("empty");
    cartContent.innerHTML = `<p>Your cart is empty.</p>`;
  };

  // Expose image functions globally
  window.openLightbox = openLightbox;
  window.closeLightbox = closeLightbox;
  window.changeSlide = changeSlide;
  window.currentSlide = currentSlide;
});
function toggleMobileNav() {
  const nav = document.getElementById("mobile-nav");
  nav.classList.toggle("active");
}


let main_img = document.getElementById("main-image");
let count = 1;

function prev() {
  count--;
  if (count < 1) {
    count = 4;
  }
  main_img.src = `images/image-product-${count}.jpg`;
}
function next() {
  count++;
  if (count > 4) {
    count = 1;
  }
  main_img.src = `images/image-product-${count}.jpg`;
}