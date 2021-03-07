<?php
/**
 * Plugin Name: Custom Gutenberg blocks 2
 * Author: Elizaveta Kozlovskaya
 * Author URI: https://www.linkedin.com/in/elizaveta-kozlovskaya-86b0b01a3/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer
 */
require_once plugin_dir_path( __FILE__ ) . 'service-block/service-block.php';
require_once plugin_dir_path( __FILE__ ) . 'slider-block/slider-block.php';
