$(function() {

        $('#lightSlider').lightSlider({
            adaptiveHeight:true,
            item:1,
            slideMargin:0,
            loop:true,
            pager: false,
            prevHtml: "<i class='icon slider-center-left'></i>",
            nextHtml: "<i class='icon slider-center-right'></i>"
        });




        var vertical = $('#vertical').lightSlider({
            gallery:true,
            item:1,
            vertical:true,
            verticalHeight:410,
            vThumbWidth:235,
            thumbItem:3,
            thumbMargin:10,
            slideMargin:0,
            controls: false,
        });
        $(".osc-left").on('click',function(){
            vertical.goToPrevSlide();
        });
        $(".osc-right").on('click',function(){
            vertical.goToNextSlide();
        });
        $('#autoplay').lightSlider({
            item:4,
            loop:true,
            slideMove:2,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            pager: false,
            prevHtml: "<i class='icon icon-b-left'></i>",
            nextHtml: "<i class='icon icon-b-right'></i>",
            responsive : [
                {
                    breakpoint:800,
                    settings: {
                        item:2,
                        slideMove:1,
                        slideMargin:6,
                    }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:2,
                        slideMove:1
                    }
                }
            ]
        });

    $('.gamburger').on('click',function(){
                $(this).toggleClass('active');
                $(".mobile-menu").toggleClass('active');
                $("body").toggleClass("mobile-menu-active");
        });

        $(document).on("click",function(event){
                if( $(event.target).closest(".mobile-menu,.gamburger").length )return;
                $('.gamburger').removeClass('active');
                $(".mobile-menu").removeClass('active');
                $("body").removeClass("mobile-menu-active");
                event.stopPropagation();
        });



        $(".secondary-menu").on("click",function(){
           $(this).toggleClass('clicked');
        });
        $(".secondary-menu > a").unbind('click');



});
