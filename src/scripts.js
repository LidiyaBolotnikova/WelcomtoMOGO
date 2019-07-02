/*$(function() {
    $('input:checkbox').click(function() {

        $('#checkbox-1').toggle('slow');
        /*$('#checkbox-2').toggle('slow');
        $('#checkbox-3').toggle('slow');
    });
});*/


$(document).ready(function() {
    //прикрепляем клик по заголовкам acc-head
    $('.page-five-content__reviews .reviews-item').on('click', openReview);
});

function openReview(){
    $('.page-five-content__reviews .text-reviews').not($(this).next()).slideUp(400);
    $(this).next().slideToggle(400);
}