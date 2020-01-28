// Ratings
const ratings = {
  life: 4.8,
  love: 4,
  dream: 4.2
};

const starsTotal = 5;

document.addEventListener("DOMContentLoaded", getRating);

// Select and Change Products
const productSelect = document.querySelector("#product-select");
const ratingControl = document.querySelector("#rating-control");

let product;

productSelect.addEventListener("change", e => {
  product = e.target.value;

  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
});

ratingControl.addEventListener("blur", e => {
  const rating = e.target.value;

  if (rating > 5) {
    alert("~Please rate 1 - 5~");
    return;
  }

  ratings[product] = rating;
  getRating();
});

// Get Rating
function getRating() {
  for (let rating in ratings) {
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    const starPercentageRound = `${Math.round(starPercentage / 10) * 10}%`;

    document.querySelector(
      `.${rating} .stars-inner`
    ).style.width = starPercentageRound;

    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
}
