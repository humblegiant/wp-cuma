jQuery(document).ready(function($) {
	if ($('body.wp-admin.wp-core-ui').length) {
		var $buttons = $('.core-updates #upgrade');

		var shiny_colors = {
			'background-color': '#f33',
			'border-color': "#800",
			'box-shadow': 'inset 0 1px 0 #a88,0 1px 0 rgba(0,0,0,.08)',
			'color': 'white'
		};

		$buttons.click(function(e) {
			// If it's the first click, eg click_count isn't set. Setup some defaults
			if (!$(this).data('click_count')) {
				$(this)
					.css(shiny_colors)
					.data({
						'click_count': 1,
						'original_value': $(this).val()
					});
			}
			var count = $(this).data('click_count');

			// If we haven't reached the last warning
			if (count < localized_warnings.length) {
				e.preventDefault();
				$(this).val( localized_warnings['warning_'+count] );

			// Last warning, then reset the button
			} else if (count == localized_warnings.length) {
				e.preventDefault();
				$(this).val( localized_warnings['warning_'+count] );

				setTimeout(function (button){
					button.removeAttr('style').val(button.data('original_value'));
				}, 1300, $(this));
			}

			// Increment the counter
			$(this).data('click_count', (count+1));
		});
	}
});
