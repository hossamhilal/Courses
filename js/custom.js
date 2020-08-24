/*global $ */
(function($) {
    "use strict";

    $(window).on('load', function(){
        $('body').addClass('stopScroll');
        $('.loader').fadeOut(500, function () {
            $(this).remove();
            $('body').removeClass('stopScroll');
        }); 

        // Adjust Textarea Height
        var textArea = document.querySelectorAll('textarea[data-adaptheight]');
        textArea.forEach(function(el) {
            var innerHeight = $(textArea).prop('scrollHeight');
            $(textArea).css('min-height' , innerHeight );
        });
    });

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function(){
        $('.navMenu').toggleClass('show');
        $('.navOverlay').addClass('show');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // CLOSE SIDE MENU 
    $('.navOverlay').on('click', function(){
        $(this).removeClass('show');
        $('.navMenu').removeClass('show');  
        $('body').removeClass('stopScroll');  
    });

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
  
    // Toggle Password 
    $('.showPassword').click(function(){
        let passWord = $(this).parent().find('input');
        if($(passWord).attr('type') == 'password'){
             $(passWord).prop('type', 'text');
        }else{
             $(passWord).prop('type', 'password');
        }
    });

    // Upload Photo 
    function uploadImage(input , place) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                let preview = place;
                preview.hide();
                preview.html("");
                let src = e.target.result;
                let previewImage =  '<img src="'+ src +'"class="img-fluid">';    
                preview.append(previewImage); 
                console.log(src);       
                console.log(e.target.result);       
                preview.fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $('.uploadBtn input').change(function() {
        uploadImage(this , $(this).parent().next('.previewBox'));
    });

    // Tabs
    $('.tabBtn').on('click' , function(e){
        e.preventDefault();
        $('.tabBtn').removeClass('active');
        $(this).addClass('active');
        var itemId = $(this).attr("href"); 
        $('.tabContent').removeClass('show'); 
        $(itemId).addClass('show');
    });

    // Add Lecture 
    $('.lecturePopupAddBtn').on('click' , function(){
        let input = $(this).prev('.field').find('input');
        let LectureName = $(input).val();
        if ($(input).val()) {
            let newLecture = '<div class="lecture">' +
                                '<input type="text" disabled value="' + LectureName+ '">' +
                                '<div class="lectureAction">' +
                                    '<div class="lectureBtn editLecture"> <img src="images/icon-pencil.png" alt="icon"> <span> تعديل </span></div>' +
                                    '<div class="lectureBtn deleteLecture"> <img src="images/icon-trash.png" alt="icon"> <span> حذف </span> </div>' +
                                '</div>' +
                            '</div>';
            let lecturesList = $('.addedLectures');
            lecturesList.append(newLecture);
            $(input).val('');
        }
    });

    // Edit Lecture 
    $(document).on('click', '.editLecture' , function(){
        let textInput = $(this).parent().prev('input');
        if (textInput.attr('disabled')) {
            textInput.removeAttr('disabled'); 
            textInput.focus(); 
            textInput.addClass('focused');
        }
        else {
            textInput.attr('disabled', 'disabled'); 
            textInput.removeClass('focused');
        }
    });

    // Delete Lecture 
    $(document).on('click', '.deleteLecture' , function(){
        let lecture = $(this).parent().parent('.lecture');
        $(lecture).remove();
    });

    // Edit Lesson 
    $(document).on('click', '.lesson .editLecture' , function(){
        let textInput = $(this).parent().parent().find('input');
        if (textInput.attr('disabled')) {
            textInput.removeAttr('disabled'); 
            textInput.focus(); 
            textInput.addClass('focused');
        }
        else {
            textInput.attr('disabled', 'disabled'); 
            textInput.removeClass('focused');
        }
    });

    // Show Lesson Inputs Or Question Inputs 
    $('#lessonType').change(function(){
        $(this).find("option:selected").each(function(){
            let optionValue = $(this).attr("value");
            if(optionValue == 'Lesson'){
                $('.addlessonBox').show();
                $('.addQuestionBox').hide();
            } else{
                $('.addlessonBox').hide();
                $('.addQuestionBox').show();
            }
        });
    }).change();

    // Add Question 
    $('.addQuestion').on('click' , function(){
        let question = $(this).prev('input');
        let questionTitle = $(question).val();
        console.log('questionTitle' , questionTitle);

        if ($(question).val()) {
            let newQuestion =  '<div class="addedQuestion">' +
                                    '<div class="addedQuestionHead field">' +
                                        '<label> السؤال  </label>' +
                                        '<div class="addedForm">' +
                                            '<div class="questionTitle">' + questionTitle + '</div>' +
                                            '<div class="deleteQuestion btnRed"> <i class="icofont-ui-delete"></i> </div>' +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="answers">' +
                                        '<div class="answersHead field">' +
                                            '<label> الاجابة  </label>' +
                                            '<div class="addedForm">' +
                                                '<input type="text" class="form-control" placeholder="يتم كتابة الاجابة">' +
                                                '<div class="addAnswer btnOpacity"> <i class="icofont-plus"></i>  </div>' +
                                            '</div>' +
                                        '</div>' +
                                        '<div class="answersBody"></div>' +
                                    '</div>' +
                                '</div>';
            console.log(newQuestion);

            let questions = $('.addedQuestions');
            questions.append(newQuestion);
            $(question).val('');
        } 
    });

    // Delete Question 
    $(document).on('click', '.deleteQuestion' , function(){
        $(this).parents('.addedQuestion').remove();
    });

    // Add Answer 
    $(document).on('click', '.addAnswer' , function(){
        let answer = $(this).prev('input');
        let answerContent = $(answer).val();
        console.log('answerContent' , answerContent);

        if ($(answer).val()) {
            let newAnswer =  '<div class="answer">' +
                                '<div class="answerContent">' + answerContent + '</div>' +
                                '<div class="deleteAnswer btnGrey"> <i class="icofont-close"></i> </div>' +
                             '</div>'
            console.log(newAnswer);

            let answers = $(this).parents('.answersHead ').next('.answersBody');
            answers.append(newAnswer);
            $(answer).val('');
        } 
    });

    // Delete Answer 
    $(document).on('click', '.deleteAnswer' , function(){
        $(this).parent('.answer').remove();
    });


    // Profile Tabs
    $('.profileTab').on('click' , function(e){
        e.preventDefault();
        $('.profileTab').removeClass('active');
        $(this).addClass('active');
        var itemId = $(this).attr("href"); 
        $('.tabContent').removeClass('show'); 
        $(itemId).addClass('show');
    });

    // Edit Profile
    $(document).on('click', '.editField' , function(){
        let filedInput = $(this).prev('input');
        if (filedInput.attr('disabled')) {
            filedInput.removeAttr('disabled'); 
            filedInput.focus(); 
            filedInput.addClass('focused');
        }
        else {
            filedInput.attr('disabled', 'disabled'); 
            filedInput.removeClass('focused');
        }
    });

    // Upload Avatar 
    function uploadAvatar(input , place) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                let preview = place;
                let newSrc = e.target.result;
                $(preview).find('img').attr('src' , newSrc );
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $('.uploadAvatar input').change(function() {
        uploadAvatar(this , $(this).parent().prev('.profileAvatarPreview'));
    });
    

    // Animate Progress Bar
    $('.progressTab').on('click' , function() {
        $('.progress-bar').each(function(){
            let percent = $(this).attr("aria-valuenow") + "%";
            $(this).animate({
                "width": percent 
            }, {
                duration: 50,
                easing: 'linear'
            });
        });
    });

    // Courses Tabs
    $('.courseCatTab').on('click' , function(e){
        e.preventDefault();
        $('.courseCatTab').removeClass('active');
        $(this).addClass('active');
        var itemId = $(this).attr("href"); 
        $('.tabContent').removeClass('show'); 
        $(itemId).addClass('show');
    });
    
    // FaQ
    $('.questionHead').on('click' , function(){
        let parentFaq = $(this).parent('.question');
        if(parentFaq.hasClass('open')){
            $('.question').removeClass('open');
            $('.questionBody').slideUp();
        } else {
            $('.question').removeClass('open');
            $('.questionBody').slideUp();
            $(parentFaq).addClass('open');
            $(parentFaq).find('.questionBody').slideDown();
        }
    });

    // Lecture List 
    $('.listItemHead').on('click' , function(){
        let parentFaq = $(this).parent('.listItem');
        if(parentFaq.hasClass('open')){
            $('.listItem').removeClass('open');
            $('.listItemBody').slideUp();
        } else {
            $('.listItem').removeClass('open');
            $('.listItemBody').slideUp();
            $(parentFaq).addClass('open');
            $(parentFaq).find('.listItemBody').slideDown();
        }
    });
    
    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

