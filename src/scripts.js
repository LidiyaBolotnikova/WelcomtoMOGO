
$(document).ready(function() {
    $('.page-five-content__reviews .reviews-item').on('click', openReview);
});

function openReview(){
     /*$('.page-five-content__reviews .text-reviews').not($(this).next()).slideUp(400); если нужно сделать так чтобы открыт был только один,дописываем*/
    var location = $(this).parent();
    $(".page-five-content__reviews-arrow",location).toggleClass('rotated');
     $(this).next().slideToggle(400);

}


$('.text-reviews').perfectScrollbar({
        theme: "dark"
    }
);
