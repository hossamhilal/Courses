/*global $ */
(function($) {
    "use strict";

    // $(window).on('load', function(){
    //     $('body').addClass('stopScroll');
    //     $('.loader').fadeOut(500, function () {
    //         $(this).remove();
    //         $('body').removeClass('stopScroll');
    //     }); 
    // });

    // // OPEN SIDE  MENU 
    // $('.menuBtn').on('click', function(){
    //     $('.navMenu').toggleClass('show');
    //     $('.navOverlay').addClass('show');  
    //     setTimeout(function(){
    //         $('body').addClass('stopScroll');
    //     }, 200); 
    // });

    // // CLOSE SIDE MENU 
    // $('.navOverlay').on('click', function(){
    //     $(this).removeClass('show');
    //     $('.navMenu').removeClass('show');  
    //     $('body').removeClass('stopScroll');  
    // });

    // Open Search 
    $('.openSearch').on('click', function() {
        $('.searchPopup').addClass('show');   
    });

    // Close Search 
    $('.searchPopup .close').on('click', function() {
        $('.searchPopup').removeClass('show');   
    });
    
    //  Open dropList
    $('.dropToggle').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        if($(this).find('.dropList').hasClass('show')){
            $('.dropList').removeClass('show');
        } else {
            $('.dropList').removeClass('show');
            $(this).find('.dropList').toggleClass('show');
        } 
    });

    //  Close dropList
    $(document).on('click', function(){
        $('.dropList').removeClass('show');
    });

    $('.dropList').on('click', function(e) {
        e.stopPropagation(); 
    });

    
    // Header OWL 
    $('.owlCourses').owlCarousel({
        rtl: true,
        margin: 10,
        autoplay: false,
        loop: true,
        nav: true,
        dots: false,
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        smartSpeed: 2000 ,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // // Ad Images OWL
    // var owlAdImages = $('.owlAdImages');
    // owlAdImages.owlCarousel({
    //     rtl: true,
    //     margin: 0,
    //     autoplay: false,
    //     loop: false,
    //     nav: false,
    //     dots: false,
    //     center : false ,
    //     autoplaySpeed : 1000,
    //     autoplayTimeout : 1000,
    //     smartSpeed: 1000 ,
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 1
    //         },
    //         1000: {
    //             items: 1
    //         }
    //     }
    // });
  
    // // Go to the next item
    // $('.next').click(function() {
    //     $(this).parents('.productSlider').find('.owlAdImages').trigger('next.owl.carousel');
    // });

    // // Go to the previous item
    // $('.prev').click(function() {
    //     $(this).parents('.productSlider').find('.owlAdImages').trigger('prev.owl.carousel', [300]);
    // });

    // // Get Total Count Of Items 
    // $('.owlAdImages').each(function(){
    //     let totalItems = $(this).find('.item').length;
    //     $(this).parent().find('.ImgCountNumber').text(totalItems);
    // })

    // Partners OWL 
    // $('.owlClients').owlCarousel({
    //     rtl: true,
    //     margin: 20,
    //     autoplay: true,
    //     loop: true,
    //     nav: false,
    //     dots: false,
    //     center : false ,
    //     autoplaySpeed : 3000,
    //     autoplayTimeout : 3000,
    //     smartSpeed: 3000 ,
    //     navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
    //     responsive: {
    //         0: {
    //             items: 2
    //         },
    //         600: {
    //             items: 4
    //         },
    //         1000: {
    //             items: 6
    //         }
    //     }
    // });

    // Related Owl owlRelated
    // $('.owlRelated').owlCarousel({
    //     rtl: true ,
    //     margin: 10,
    //     autoplay: true,
    //     loop: true,
    //     nav: true,
    //     dots: false,
    //     center : false ,
    //     autoplaySpeed : 1000,
    //     autoplayTimeout : 1000,
    //     smartSpeed: 1000 ,
    //     navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
    //     responsive: {
    //         0: {
    //             items: 2
    //         },
    //         600: {
    //             items: 5
    //         },
    //         1000: {
    //             items: 6
    //         }
    //     }
    // });

    // // Clients OWL 
    // $('.owlAdPage').owlCarousel({
    //     rtl: true ,
    //     margin: 10,
    //     autoplay: false,
    //     loop: true,
    //     nav: true,
    //     dots: false,
    //     center : true ,
    //     autoplaySpeed : 1000,
    //     autoplayTimeout : 1000,
    //     smartSpeed: 1000 ,
    //     navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
    //     responsive: {
    //         0: {
    //             items: 3
    //         },
    //         600: {
    //             items: 5
    //         },
    //         1000: {
    //             items: 5
    //         }
    //     }
    // });

    // Add To Favourite 
    // $('.addToFav').on('click' , function(){
    //     $(this).toggleClass('addedToFav');
    // });

    // Filter List
    $('.productsTab').on('click' , function(e){
        e.preventDefault();

        $('.productsTab').removeClass('active');
        $(this).addClass('active');
        
        var itemId = $(this).attr("href"); 
        $('.tabContent').removeClass('show'); 
        $(itemId).addClass('show');
    });

    // // Upload Photo 
    // function uploadImage(input , place) {
    //     if (input.files && input.files[0]) {
    //         let reader = new FileReader();
    //         reader.onload = function(e) {
    //             let preview = place;
    //             preview.hide();
    //             preview.html("");
    //             let src = e.target.result;
    //             let previewImage =  '<img src="'+ src +'"class="img-fluid">';    
    //             preview.append(previewImage); 
    //             console.log(src);       
    //             console.log(e.target.result);       
    //             preview.fadeIn(650);
    //         }
    //         reader.readAsDataURL(input.files[0]);
    //     }
    // }
    // $('.uploadImage input').change(function() {
    //     uploadImage(this , $(this).parent().next('.previewBox'));
    // });


    // Allow Edit Profile 
    // $('.editProfile').on('click' , function(){
    //     let allInputs = $('.profileInfoBox input');
    //     if (allInputs.attr('disabled'))  {
    //         allInputs.removeAttr('disabled');
    //     } else {
    //         allInputs.attr('disabled', 'disabled');
    //     }
    // });

    // Toggle Password 
    // $('.showPass').click(function(){
    //     let pass = $('#password');
    //     if($(pass).attr('type') == 'password'){
    //          $(pass).prop('type', 'text');
    //     }else{
    //          $(pass).prop('type', 'password');
    //     }
    // });
    
    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

