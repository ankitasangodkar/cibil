$(document).ready(function() {
    $('#interstitial-modal1 .show-slideup').on('click', function (e) {
        $('.custom-slildeup').addClass('up');
        $('.custom-backdrop').addClass('up');
    });
    $(".plans-radio-row input[name='radio-group-1']").on('click', function(){
        if($('.plans-radio-row input:radio[name=radio-group-1]:checked').val() == "1monthc"){
            $('.1monthstrikeout').addClass('crossed');
        } else {
            $('.1monthstrikeout').removeClass('crossed');
        }
    });
    $(".plans-radio-row input[name='radio-group']").on('click', function(){
        if($('.plans-radio-row input:radio[name=radio-group]:checked').val() == "1month"){
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
    } else {
        $("#upgrade").show();
        $("#free").hide();
    }
    $('#switcher-1').change(function () {
        if($('#switcher-1').prop('checked')) {
            $("#upgrade").hide();
            $("#free").show();
        } else {
            $("#upgrade").show();
            $("#free").hide();
        }
    });	
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
});