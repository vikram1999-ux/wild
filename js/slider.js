var windowWidth = 0;
$(window).on('load', initSlider);
function initSlider() {    
    if ($(window).width() === windowWidth) return;
	$(window).on('resize', initSlider);
    windowWidth = $(window).width();
    $(".Slider").each(function () {
        var s = $(this);
        
        s.find(".cycle-next,.cycle-prev").addClass("d-none");
        s.find(".slideshow").each(function () {
            var ss = $(this);
            ss.css("maxHeight", "none");
            if (ss.find(".cycle-sentinel").length > 0)
                ss.cycle('destroy').find(".cycle-sentinel").remove();

            var ssw = ss.outerWidth();
            var is = ss.find(">.isItem");
            if (is.length > 0) {
                var iw = is.first().outerWidth();
                var ih = is.outerHeight();
				var isw = iw * is.length;
                var cv = Math.round(ssw / iw);

                //ss.css("maxHeight", ih + "px");
                if (isw > ssw) {
                    iw = parseInt(ssw / cv);

                  /*  if (windowWidth < 1199.98) {
                        iw -= parseInt(40 / cv);
                        if (s.find(".cycle-prev").length === 1)
                            s.css("paddingLeft", "20px").css("paddingRight", "20px");
                    }*/

                    is.css("width", iw).css("float", "none");
                    s.find(".cycle-next,.cycle-prev").removeClass("d-none");

                    ss.cycle({
                        fx: "carousel",
                        log: false,
                        slides: ">.isItem",
                        timeout:0,
                        next: s.find(".cycle-next"),
                        prev: s.find(".cycle-prev"),
                        carouselVisible: cv
                    });

                }
            }
        });
    });
}