jQuery(document).ready(function($) {
	if ($('body.wp-admin.wp-core-ui').length) {
		var $buttons = $('.core-updates #upgrade');

		var shinyColors = {
			'background-color': '#f33',
			'border-color': '#800',
			'box-shadow': 'inset 0 1px 0 #a88,0 1px 0 rgba(0,0,0,.08)',
			'color': 'white',
			'text-shadow': 'none'
		};

		$buttons.click(function(e) {
			// If it's the first click, eg click_count isn't set. Setup some defaults
			if (!$(this).data('click_count')) {
				$(this)
					.css(shinyColors)
					.data({
						'click_count': 1,
						'original_value': $(this).val()
					});
			}
			var count = parseInt( $(this).data('click_count') );
			var warningsLength = parseInt( cumaLocalizedWarnings.length );

			// If we haven't reached the last warning
			if (count < warningsLength) {
				e.preventDefault();
				$(this).val( cumaLocalizedWarnings['warning_'+count] );

			// Last warning, then reset the button
			} else if (count === warningsLength) {
				e.preventDefault();
				$(this).val( cumaLocalizedWarnings['warning_'+count] );

				setTimeout(function (button){
					button.removeAttr('style').val(button.data('original_value'));
				}, 1300, $(this));
			}

			// Increment the counter
			$(this).data('click_count', (count+1));
		});
	}
});
