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
require_once plugin_dir_path( __FILE__ ) . 'error-block/error-block.php';
require_once plugin_dir_path( __FILE__ ) . 'development-block/development-block.php';
require_once plugin_dir_path( __FILE__ ) . 'idea-block/idea-block.php';
require_once plugin_dir_path( __FILE__ ) . 'case-studies-block/case-studies-block.php';


// Back-end
function cgb_editor_init(){
    wp_register_style('cgb-editor-style', plugin_dir_url(__FILE__).'editor.css', array( 'wp-edit-blocks' ));
}
add_action( 'init', 'cgb_editor_init' );


// Front-end
function cgb_style_scripts() {
    wp_enqueue_style('cgb-style', plugin_dir_url(__FILE__).'style.css');
}
add_action( 'wp_enqueue_scripts', 'cgb_style_scripts' );
