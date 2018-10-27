
$(function(){
	// misc adjustments
	
	// backbg
	$('.backbg').each(function(){
	   var backbgPath = $(this).attr('src');  
	   $(this).parent('.backbgbox').css('background-image', 'url(' + backbgPath + ')');
	});
	
	// matchheight
    $('.smheight').matchHeight();
	
	// search input
	$('.search-input').on('focus',function(){
		$('.search_box').addClass('open');
	});
	$('.search-input').on('blur',function(){
		$('.search_box').removeClass('open');
	});
	
	// gallery 
	$('.gallery_box').flexslider({
		slideshow: false,
		directionNav: false,
		manualControls: ".gallery_thumbs ul li"
	});
	
	// custom selectbox
	$(".std_select").each(function () {
		var sb = new SelectBox({
			selectbox: $(this)
		});
	});
	$('.selectedValue').on('click',function(){
        $(this).parents('.customSelect ').toggleClass('select-open');
    });
	

	// video play/pause
    $('.embed-responsive').on('click','.play_btn',function(){
        var $this = $(this);
        $this.addClass('paused');
        $this.parents('.media_box').find('video')[0].play();
    });
    $('.embed-responsive').on('click','.play_btn.paused',function(){
        var $this = $(this);
        $this.removeClass('paused');
        $this.parents('.media_box').find('video')[0].pause();
    });
	
	// scroll to
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').stop().animate({scrollTop:($(this.hash).offset().top)},2000,'easeOutExpo');
	});
	

	// Dropdown menu	
	$('.mainnav > ul > li:has(>ul) > a').addClass('listarrow');
	$('.mainnav > ul > li:has(>ul)').doubleTapToGo();
		
	var	mouseIN = function(){
		$(this).find('>ul').show();
		$(this).addClass('menudown');
	};
	var mouseOUT = function(){
		$(this).find('>ul').hide(1);
		$(this).removeClass('menudown');
	}
	
		if($(window).width() > 959) { // runs for desktop version
			$('.mainnav > ul > li:has(>ul)').hoverIntent({
			over: mouseIN,
			out: mouseOUT,
			timeout:400
			});
		}
		
	
	if($(window).width() < 960) {
		$('.mainnav > ul > li:has(>ul)').on('click',function(){
			$(this).find('>ul').slideToggle();
			$(this).siblings('li:has(>ul)').find('>ul').hide();
		});	
	}
	
	
	// mobile menu
	$('.mobile_menubtn').on('click',function(){
		$(this).toggleClass('open');
        $('body').toggleClass('menuopen');
		if($('.mainnav ul li ul').is(':visible')) {
    		$('.mainnav ul li ul').slideUp();
			$('.mainnav > ul > li').removeClass('menudown');
		}
	});
    
	if($('.tween').length) {
	
		// init controller
		var controller = new ScrollMagic.Controller();
		var sceneHeight = $('.tween').innerHeight();
		var scene1Height = $('.tween ul').innerHeight();
		var winH = $(window).height();
		var sceneHeightFinal = sceneHeight - winH;
		//alert(sceneHeightFinal);

		var pinScene = new ScrollMagic.Scene({
			triggerElement: '#intro',
			triggerHook: 0,
			duration: sceneHeightFinal
		})
//		.addIndicators({
//				name: 'parent scene',
//				colorTrigger: 'black',
//				colorStart: '#75C695',
//				colorEnd: 'red'
//		})
		.setClassToggle('.pr_vline','scrollin')
		.setPin('#intro', {pushFollowers: false})
		.addTo(controller);

		$('.project').each(function(i){
			var ourScene = new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: 0
			})
			.setClassToggle(this,'fade-in')
//			.addIndicators({
//				name: 'fade scene '+ (i+1),
//				colorTrigger: 'black',
//				colorStart: '#75C695',
//				colorEnd: 'red'
//			})
			.addTo(controller);	
		});
		$('.project2').each(function(i){
			var ourScene2 = new ScrollMagic.Scene({
				triggerElement: this,
				triggerHook: 0
			})
			.setClassToggle(this,'fade-in')
//			.addIndicators({
//				name: 'fade scene '+ (i+1),
//				colorTrigger: 'black',
//				colorStart: '#75C695',
//				colorEnd: 'red'
//			})
			.addTo(controller);	
		});
		

			var ourScene1End = new ScrollMagic.Scene({
				triggerElement: '.tween ul',
				triggerHook: 0,
				duration: scene1Height
			})
			.setClassToggle('.tween ul', 'start')
//			.addIndicators({
//				name: 'fade ul',
//				colorTrigger: 'black',
//				colorStart: '#75C695',
//				colorEnd: 'red',
//				indent: 150
//			})
			.addTo(controller);	



		pinScene.on("leave", function (event) {
			$('.tween ol').addClass('end');
		});
		pinScene.on("enter", function (event) {
			$('.tween ol').removeClass('end');
		});
		
	} // end if
	 
	
}); // end document ready

$(window).load(function(e) {
	
	// matchheight
    $('.smheight').matchHeight();

}); // end window load
