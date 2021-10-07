
let mainTitleButtonUse = document.querySelector(".main-title__button__use"),
	popup = document.querySelector(".popup"),
	popupContentClose =  document.querySelector(".popup__content-close"),
	body =	document.getElementsByTagName("body");


/*===== Всплывающее окно ======= */
  mainTitleButtonUse.addEventListener("click", function(event) {
    popup.classList.toggle("popup-active");
	document.body.style.overflow = "hidden";

	
  });
  popupContentClose.addEventListener("click", function(event) {
      popup.classList.toggle("popup-active");
	  document.body.style.overflow = "visible";
	   document.body.style.overflowX = "hidden";

  });
  // Клик по фону, но не по окну.
  $('.popup').click(function(event) {
  	if ($(event.target).closest('.popup__dialog').length == 0) {
       popup.classList.toggle("popup-active");
	   document.body.style.overflow = "visible";
	   document.body.style.overflowX = "hidden";

  	}
  });	


/* ======= перевод иконок в svg формат ======= */
$("img.img-svg").each(function () {
  let $img = $(this);
  let imgClass = $img.attr("class");
  let imgURL = $img.attr("src");
  $.get(
    imgURL,
    function (data) {
      var $svg = $(data).find("svg");
      if (typeof imgClass !== "undefined") {
        $svg = $svg.attr("class", imgClass + " replaced-svg");
      }
      $svg = $svg.removeAttr("xmlns:a");
      if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
        $svg.attr(
          "viewBox",
          "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
        );
      }
      $img.replaceWith($svg);
    },
    "xml"
  );
});


/* ======= СЛАЙДЕР ======= */

$(document).ready(function(){
    $('.startups-slider').slick({
    	    infinite: true,
    	    slidesToShow: 3,
    	    slidesToScroll: 1,
			centerMode: true,
			arrows: false,
    	    responsive: [
    	        {
    	          breakpoint: 1100,
    	          settings: {
    	            slidesToShow: 2,
    	            slidesToScroll: 1,
    	          }
    	        },
    	        {
					
    	          breakpoint: 895,
    	          settings: {
    	            slidesToShow: 1,
    	            slidesToScroll: 1,
					
    	          }
    	        }
    	      ]
    	  });
});


