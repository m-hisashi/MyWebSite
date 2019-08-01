var $j = jQuery;

/* drawer */
$j('.drawer-icon').on('click', function () {
	$j('.drawer').toggleClass('m_checked');
});

$j(window).on('scroll', function ($) {
	if (100 < $j(this).scrollTop()) {
		$j('.floating').show();
	} else {
		$j('.floating').hide();
	}
});

/* SmoothScroll */
$j('a[href^="#"]').click(function () {
	var header = 0; // $j( '#header' ).height();
	var speed = 300;
	var id = $j(this).attr('href');
	var target = $j('#' == id ? 'html' : id);
	var position = $j(target).offset().top - header;
	if (0 > position) {
		position = 0;
	}
	$j('html, body').animate(
		{
			scrollTop: position
		},
		speed
	);
	return false;
});


//ヘッダーアクション
$j(function() {
	var $win = $j(window),
		$header = $j('header'),
		headerHeight = $header.outerHeight(),
		startPos = 0;
  
	$win.on('load scroll', function() {
	  var value = $j(this).scrollTop();
	  if ( value > startPos && value > headerHeight ) {
		$header.css('top', '-' + headerHeight + 'px');
	  } else {
		$header.css('top', '0');
	  }
	  startPos = value;
	});
  });

  //wow
new WOW().init();

$j(function() {
	var pagetop = $j('.btn-to-top');
	  $j(window).scroll(function () {
		 if ($j(this).scrollTop() > 100) {
			  pagetop.fadeIn();
		 } else {
			  pagetop.fadeOut();
			  }
		 });
		 
  });
