jQuery(document).ready(function ($) {
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 1000, 'easeInOutQuint', function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 1000, 'easeInOutQuint', function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('button.control_prev').click(function () {
        moveLeft();
        clearInterval(interval);
        interval = setInterval(function(){
            moveRight();
        }, 4000);
    });

    $('button.control_next').click(function () {
        moveRight();
        clearInterval(interval);
        interval = setInterval(function(){
            moveRight();
        }, 4000);
    });

    interval = setInterval(function(){
        moveRight();
    }, 4000);
});    
