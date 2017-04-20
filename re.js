$(document).ready(function () {

    // When a link is clicked
    $("a.tab").click(function () {


        // switch all tabs off
        $(".active").removeClass("active");

        // switch this tab on
        $(this).addClass("active");

        // slide all content up
        $(".content").slideUp();

        // slide this content up
        var content_show = $(this).attr("title");
        $("#" + content_show).slideDown();

    });

    $('#slider').nivoSlider({
		controlNavThumbs:true,
        pauseTime: 6000,
		controlNavThumbsSearch: '.png', //Replace this with...
		controlNavThumbsReplace: '_thumb.png', //...this in thumb Image src
	});

});