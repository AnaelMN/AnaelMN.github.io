(function($){
	$(function(){

		$('.sidenav').sidenav();
		$('#nav-mobile li').on('click', () => {
			$('.sidenav-overlay').click();
		});
		$('.nav-item').on('click', (e) => {
			$('.nav-item').removeClass('active');
			$(e.currentTarget).addClass('active');
		});

	});
})(jQuery);
