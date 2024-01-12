const progressLine = $(".card-info__progress-line");
const progressbarNumber =
  $(".card-info__progressbar-number").attr("data-number") / 4.55;
const progressbarCircle = $("#progressbar-circle");

let progressbarNumberCalculation = 547 - 440 * progressbarNumber;
progressbarCircle.attr("stroke-dashoffset", progressbarNumberCalculation);

progressLine.each(function () {
  const ratingNumber = $(this).attr("data-number");
  const ratingNumberPercent = (ratingNumber / 5) * 100 + "%";
  $(this).css("width", ratingNumberPercent);
});

const text = $(".card-info__text");
$(".card-info__button").on("click", function () {
  if ($(".card-info__text").hasClass("card-info__text--active")) {
    $(this).text("Читать далее");
    text.removeClass("card-info__text--active");
  } else {
    $(this).text("Скрыть");
    text.addClass("card-info__text--active");
  }
});

Fancybox.bind("[data-fancybox]", {});
