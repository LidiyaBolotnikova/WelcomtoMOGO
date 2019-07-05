
$(document).ready(function() {
    $('.page-five-content__reviews .reviews-item').on('click', openReview);
    $('.text-reviews').each(function()
    { const ps = new PerfectScrollbar($(this)[0]);
        });

    var leftUIEl= $(document.querySelector(".carousel-arrow-left"));
    var rightUiEl = $(document.querySelector(".carousel-arrow-right"));

    var elementsList = $(".carousel-content");
    var elemWidth = 1046,
        elemOffset = 20,
        elemTotalWidth = 1046,
        currentLeftValue = 0,
        elementsCount = elementsList.find(".carousel-content__child").length,
        listWidth=(elementsCount-1) * elemWidth,
        maximumOffset = 0;

    leftUIEl.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += listWidth;
            elementsList.animate({ marginLeft : currentLeftValue + "px"}, 500);
        }
    });

    rightUiEl.click(function(){
        if (Math.abs(currentLeftValue) < listWidth) {
            currentLeftValue -= listWidth;
            elementsList.animate({ marginLeft : currentLeftValue + "px"}, 500);
        }
    });

});

function openReview(){
     /*$('.page-five-content__reviews .text-reviews').not($(this).next()).slideUp(400); если нужно сделать так чтобы открыт был только один,дописываем*/
    var location = $(this).parent();
    $(".page-five-content__reviews-arrow",location).toggleClass('rotated');
     $(this).next().slideToggle(400);

}



