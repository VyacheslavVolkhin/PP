$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};


    //btn tgl
    $('.js-btn-tgl').on('click', function () {
        $(this).toggleClass('active');
        return false;
    })
    
    
	//popup block
	$('.js-popup-wrap .js-btn-toggle').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('menu-show');
		} else {
			$('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
			$(this).addClass('active');
			if ($(this).parent().hasClass('main-menu-wrap')) {
				$('body').addClass('menu-show');
			}
		}
		return false;
	})
	$('.js-popup-wrap .js-btn-close').on('click', function() {
		$(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
		$('body').removeClass('menu-show');
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".js-popup-block").length) return;
	    $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
	    $('body').removeClass('menu-show');
	    event.stopPropagation();
	});
	$('.js-popup-wrap').each(function() {
		if ($(this).hasClass('js-popup-select')) {
			// alert(1)
			if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
				$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
			}
			var currentSelect = $(this).find('.js-popup-block').find('.active').html();
			$(this).find('.js-btn-toggle').html(currentSelect);
		}
	})
	$('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
			$(this).addClass('active');
		}
		$('.js-popup-wrap').each(function() {
			if ($(this).hasClass('js-popup-select')) {
				if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
					$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
				}
				var currentSelect = $(this).find('.js-popup-block').find('.active').html();
				$(this).find('.js-btn-toggle').html(currentSelect);
			}
		})
		$(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
		return false;
	})

	//tabs
	$('.js-tabs-nav').each(function() {
		$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
	})
	$('.js-tab-title').each(function() {
		if ($(this).hasClass('active')) {
			$(this).next('.js-tab-content').show(0);
		}
	})
	$('.js-tabs-nav li a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$('.js-tab-block').removeClass('active');
			$(this).parents('.js-tabs-nav').find('.active').removeClass('active');
			$(this).addClass('active');
			$('.js-tabs-nav').each(function() {
				$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
			})
		}
		return false;
	})
	$('.js-tab-title').on('click' , function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next('.js-tab-content').slideUp(200);
		} else {
			$(this).addClass('active').next('.js-tab-content').slideDown(200);
		}
	})


    //frm counter   
    $('.js-counter .js-button-counter-minus').on('click', function () {
        var cnt = $(this).parents('.js-counter').find('.js-input-counter').val();
        cnt = parseInt(cnt);
        if (cnt > 0) {
            $(this).parents('.js-counter').find('.js-input-counter').val(cnt - 1);
        }
        return false;
    })
    $('.js-counter .js-button-counter-plus').on('click', function () {
        var cnt = $(this).parents('.js-counter').find('.js-input-counter').val();
        $(this).parents('.js-counter').find('.js-input-counter').val(cnt - 1 + 2);
        return false;
    })


    //select content toggle
    $('input[data-select]').each(function () {
        if ($(this).is(':checked')) {
            let selectContent = $(this).attr('data-select');
            $('.frm-select-content[data-select="' + selectContent + '"]').addClass('active');
        }
    })
    $('input[data-select]').on('click', function () {
        $('.frm-select-content.active').removeClass('active');
        $('input[data-select]').each(function () {
            if ($(this).is(':checked')) {
                let selectContent = $(this).attr('data-select');
                $('.frm-select-content[data-select="' + selectContent + '"]').addClass('active');
            }
        })
    })


    //mobile menu
    $('.catalog-menu-box li ul').each(function () {
        $(this).parent().addClass('submenu');
    })
    $('.catalog-menu-box li.open ul').show(0);
    $('.catalog-menu-box li a').on('click', function () {
        if ($(this).next('ul').length > 0) {
            if ($(this).parent().hasClass('open')) {
                $(this).parent().removeClass('open').children('ul').slideUp(200);
            } else {
                $('.main-menu-wrap li.open').removeClass('open').children('ul').slideUp(200);
                $(this).parent().addClass('open').children('ul').slideDown(200);
            }
            return false;
        }
    })

    //filter catalog toggle
    $('.js-filter-toggle').on('click', function() {
        $('body').removeClass('catalog-show');
        $('body').toggleClass('filter-show');
        return false;
    })
    $('.js-catalog-toggle').on('click', function() {
        $('body').removeClass('filter-show');
        $('body').toggleClass('catalog-show');
        return false;
    })
    $('.filter-section-wrap .link-wrap a').on('click', function() {
        $(this).parents('.filter-section-wrap').toggleClass('filter-showed');
        return false;
    })

    //more
    $('.text-more-box .text-link a').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').parents('.text-more-box').find('.text-hidden-wrap').slideUp(200);
        } else {
            $(this).addClass('active').parents('.text-more-box').find('.text-hidden-wrap').slideDown(200);
        }
        return false;
    })

    //main-actions-box
    if (!!$('.main-actions-box').offset()) {
        $('.main-actions-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        dots: true,
                        infinite: true,
                    }
                },
            ]
        });
    }


    //brands-box
    if (!!$('.brands-box').offset()) {
        $('.brands-box .slider').slick({
            dots: false,
            slidesToShow: 5,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: true,
                        infinite: true,
                    }
                },
            ]
        });
    }


    //card slider
    if (!!$('.photos-slider-box').offset()) {
        $('.photos-slider-box .slider-wrap .slider').slick({
            dots: false,
            slidesToShow: 1,
            infinite: false,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
        $('.photos-slider-box .slider-wrap .slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.photos-slider-box .slider-preview-wrap .sl-wrap.active').removeClass('active');
            $('.photos-slider-box .slider-preview-wrap .elm-photo[data-slide="' + currentSlide + '"]').parent().addClass('active');
        });
        $('.photos-slider-box .slider-preview-wrap .slider').slick({
            dots: false,
            slidesToShow: 4,
            vertical: false,
            infinite: true,
            variableWidth: false,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        variableWidth: true,
                    }
                },
            ]
        });
        $('.photos-slider-box .slider-preview-wrap .slider .elm-photo').click(function () {
            let newSlide = $(this).attr('data-slide');
            $('.photos-slider-box .slider-preview-wrap .sl-wrap.active').removeClass('active');
            $(this).parent().addClass('active');
            $('.photos-slider-box .slider-wrap .slider').slick('slickGoTo', newSlide);
            return false;
        })
    }


    //#range-slider
    if (!!$('#range-slider').offset()) {
        $('#range-slider').slider({
            range: true,
            min: 0,
            max: 40000,
            values: [12000, 25000],
            slide: function (event, ui) {
                $('#range-slider-min').val(ui.values[0]);
                $('#range-slider-max').val(ui.values[1]);
            }
        })
        $('#range-slider-min').val($('#range-slider').slider('values', 0));
        $('#range-slider-max').val($('#range-slider').slider('values', 1));
        $('#range-slider-min').bind('focusout', function () {
            if ($(this).val() > $('#range-slider').slider('values', 1)) {
                $(this).val($('#range-slider').slider('values', 0));
            }
            $('#range-slider').slider('values', 0, $(this).val());
        })
        $('#range-slider-max').bind('focusout', function () {
            if ($(this).val() < $('#range-slider').slider('values', 0)) {
                $(this).val($('#range-slider').slider('values', 1));
            }
            $('#range-slider').slider('values', 1, $(this).val());
        })
        $('#range-slider-min').bind('keypress', function (e) {
            if (e.keyCode == 13) {
                if ($(this).val() > $('#range-slider').slider('values', 1)) {
                    $(this).val($('#range-slider').slider('values', 0));
                }
                $('#range-slider').slider('values', 0, $(this).val());
            }
        })
        $('#range-slider-max').bind('keypress', function (e) {
            if (e.keyCode == 13) {
                if ($(this).val() < $('#range-slider').slider('values', 0)) {
                    $(this).val($('#range-slider').slider('values', 1));
                }
                $('#range-slider').slider('values', 1, $(this).val());
            }
        })
    }
    $('#widget').draggable();
    
	
});


