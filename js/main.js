$(document).ready(function () {
    $(".switch-btn").click(function () {
        $(".switch-btn").toggleClass("active");
        $("body").toggleClass("dark");
    });

    $(".slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,

        prevArrow: '<button class="btn btn-prev btn-slider"><img src="img/left-arrow.svg" alt=""></button>',
        nextArrow: '<button class="btn btn-next btn-slider active"><img src="img/right-arrow.svg" alt=""></button>',
        responsive: [{
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

    $(".btn-slider").click(function () {
        $(".btn-slider").removeClass("active");
        $(this).addClass("active");
    })

    $(".experience-item").click(function () {
        $(".experience-item").removeClass("active").eq($(this).index()).addClass("active");

        $(".experience-tab").hide().eq($(this).index()).fadeIn().addClass("active");
    }).eq(0).addClass("active")

    $(".testimonials-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,

        responsive: [{
            breakpoint: 1151,
            settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 769,
            settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
    });

    // Mobile Menu

    $(".burger").click(function () {
        $(".burger").toggleClass("open");
        $(".nav").toggleClass("active");
        $("body").toggleClass("hidden");
    })
});