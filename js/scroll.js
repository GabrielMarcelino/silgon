$(document).ready(function() {
$('a href="#"').on('click',function (e) {
e.preventDefault (); var target = this.hash,
$target = $(target); $('html, body').stop().animate ({
'scrollTop': $target.offset().top
}, 1000, 'swing', function () {
window.location.hash = target;
});
});
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });