window.addEventListener("load", () => {
  const space = 2.75;
  const starWidth = 11
  handleRate(space, starWidth);
});

function handleRate(spaceSize, starWidth) {
  const rates = document.querySelectorAll(".card-info__user-ratingstar_active");
  if (!rates.length) return;
  rates.forEach((rate) => {
    const rateNum = parseFloat(rate.getAttribute("data-rate-num"));
    const exectStars = Math.floor(rateNum);
    const newWidth =
      starWidth * exectStars +
      spaceSize * (exectStars) +
      (rateNum - exectStars) * starWidth;
    rate.style.width = `${parseFloat(newWidth)}px`;
  });
}
