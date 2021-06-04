$(document).ready(function() {
    $('#interstitial-modal1 .show-slideup').on('click', function (e) {
        e.preventDefault();
        $('.custom-slildeup').addClass('up');
        $('.custom-backdrop').addClass('up');
    });
    $(".plans-radio-row input[name='radio-group-1']").on('click', function(){
        if($('.plans-radio-row input:radio[name=radio-group-1]:checked').val() == "1M550RM"){
            $('.1monthstrikeout').addClass('crossed');
        } else {
            $('.1monthstrikeout').removeClass('crossed');
        }
    });
    $(".plans-radio-row input[name='radio-group']").on('click', function(){
        if($('.plans-radio-row input:radio[name=radio-group]:checked').val() == "1M550RM"){
            $('.1monthtrikeout').addClass('crossed');
        } else {
            $('.1monthtrikeout').removeClass('crossed');
        }
    });
    $('.custom-slildeup').on('click', function(event) { 
        var $target = $(event.target);
        if(!$target.closest('.block-option').length && 
        $('.block-option').is(":visible")) {
            $('.custom-slildeup').removeClass('up');
            $('.custom-backdrop').removeClass('up');
        }        
    });
    if($('#switcher-1').prop('checked')) {
        $("#upgrade").hide();
        $("#free").show();
        $("#upgrade-btn").text("CONTINUE");
        $("#upgrade-btn").attr("href", '/cibil/enrollShort-page?offer=FACRAA');
        $(".show-link").show();
        $(".show-slideup").hide();
    } else {
        $("#upgrade").show();
        $("#free").hide();
        $("#upgrade-btn").text("UPGRADE");
        $("#upgrade-btn").attr("href", "/cibil/enrollShort-page?offer="+($('#switcher-1').prop('checked')?'FACRAA':$('.plans-radio-row input:radio[name=radio-group-1]:checked').val()));
        $(".show-link").hide();
        $(".show-slideup").show();
    }
    $('#switcher-1').change(function () {
        if($('#switcher-1').prop('checked')) {
            $("#upgrade").hide();
            $("#free").show();
            $("#upgrade-btn").text("CONTINUE");
            $("#upgrade-btn").attr("href", '/cibil/enrollShort-page?offer=FACRAA');
            $(".show-link").show();
            $(".show-slideup").hide();
        } else {
            $("#upgrade").show();
            $("#free").hide();
            $("#upgrade-btn").text("UPGRADE");
            $("#upgrade-btn").attr("href", "/cibil/enrollShort-page?offer="+($('#switcher-1').prop('checked')?'FACRAA':$('.plans-radio-row input:radio[name=radio-group-1]:checked').val()));
            $(".show-link").hide();
            $(".show-slideup").show();
        }
    });	
    $(".plans-radio-row input[name='radio-group']").on('change', function(){
        $("#upgrade-link").attr("href", "/cibil/enrollShort-page?offer="+$('.plans-radio-row input:radio[name=radio-group]:checked').val());
    });
    $(".plans-radio-row input[name='radio-group-1']").on('change', function(){
        $("#upgrade-btn").attr("href", "/cibil/enrollShort-page?offer="+($('#switcher-1').prop('checked')?'FACRAA':$('.plans-radio-row input:radio[name=radio-group-1]:checked').val()));
    });
    $(".custom-slildeup input[name='flexRadioDefault']").on('change', function(){
        $("#upgrade-btn-mobile").attr("href", "/cibil/enrollShort-page?offer="+$('.custom-slildeup input:radio[name=flexRadioDefault]:checked').val());
    });
    $('#myTabs li').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
    $('.review-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-custom-arrow slick-prev"></div>',
        nextArrow: '<div class="slick-custom-arrow slick-next"></div>',
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });	    
    $('.score-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    if ($(window).width() < 992) {
        $('.report-slider').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="slick-custom-arrow slick-prev"></div>',
            nextArrow: '<div class="slick-custom-arrow slick-next"></div>',
        }); 
    }
    if ($(window).width() < 768) {
        $('.myths-slider').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }); 
        $('.plans-row').slick({
            arrows: true,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="slick-custom-arrow slick-prev"></div>',
            nextArrow: '<div class="slick-custom-arrow slick-next"></div>',
        });               
    }    
});