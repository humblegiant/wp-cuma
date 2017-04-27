<?php
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/*
Plugin Name: Core Updates Made Awesome
Plugin URI:  http://humblegiant.se/
Description: Show some nifty warnings to the user when they're performing core updates.
Version:     1.0.0
Author:      Humble Giant
Author URI:  http://humblegiant.se/
Text Domain: core-updates-made-awesome
Domain Path: /lang
*/

if (!function_exists('hmbl_load_safemaking_script') && is_admin()) {
	load_plugin_textdomain( 'core-updates-made-awesome', false, plugin_basename( dirname( __FILE__ ) ) . '/lang' );

	function hmbl_load_safemaking_script() {
		wp_register_script( 'hmbl-cuma-script', plugin_dir_url( __FILE__ ).'/js/script.js', array ( 'jquery' ), null, true );

		$translations = array(
			'warning_1' => __("Beware! You probably don't want to do this on your own", 'core-updates-made-awesome'),
			'warning_2' => __("No, seriously. Don't. It may break the site completely", 'core-updates-made-awesome'),
			'warning_3' => __("Fine. You have been warned ...", 'core-updates-made-awesome')
		);
		$translations['length'] = count($translations);

		wp_enqueue_script( 'hmbl-cuma-script' );

		wp_localize_script( 'hmbl-cuma-script', 'localized_warnings', $translations );
	}
	add_action( 'admin_enqueue_scripts', 'hmbl_load_safemaking_script', 10 );
}
