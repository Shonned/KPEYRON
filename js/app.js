$("#link").click(function() {
    $('html, body').animate({
        scrollTop: $("#service").offset().top
    }, 2000);
});

$("#link-1").click(function() {
    $('html, body').animate({
        scrollTop: $("#service").offset().top
    }, 2000);
});

function hide_loader() {
	document.querySelector(".loader-container").classList.add("hiddenLoader");
  //event.preventDefault();
}
setTimeout(hide_loader, 2000);