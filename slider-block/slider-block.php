<?php
/**
 * Plugin Name:     Slider Block
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     slider-block
 *
 * @package         create-block
 */


function create_block_slider_block_block_init() {

	// Back-end
	wp_register_script(
		'cgb-script',
		plugins_url( '/slider-block/build/index.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __DIR__ ) . '/slider-block/build/index.js' ),
		true
	);

	// Front-end
	wp_register_script(
		'cgb-swiper-lib-script',
		plugins_url( '/slider-block/src/swiper-slider/swiper-bundle.min.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-element', 'wp-i18n', 'jquery' ),
		filemtime( plugin_dir_path( __DIR__ ) . '/slider-block/src/swiper-slider/swiper-bundle.min.js' ),
		true
	);
	wp_register_script(
		'cgb-swiper-init-script',
		plugins_url( '/slider-block/src/swiper-slider/swiper-init.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-element', 'wp-i18n', 'jquery', 'cgb-swiper-lib-script' ),
		filemtime( plugin_dir_path( __DIR__ ) . '/slider-block/src/swiper-slider/swiper-init.js' ),
		true
	);
	wp_register_style(
		'cgb-swiper-style',
		plugins_url( '/slider-block/src/swiper-slider/swiper-bundle.min.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __DIR__ ) . '/slider-block/src/swiper-slider/swiper-bundle.min.css' )
	);


	register_block_type(
		'create-block/slider-block',
		array(
			'style'         => array('cgb-style', 'cgb-swiper-style'),
			'script'		=> array('cgb-swiper-lib-script', 'cgb-swiper-init-script'),
			'editor_style'  => array('cgb-editor-style', 'cgb-swiper-style'),
			'editor_script' => array('cgb-script', 'cgb-swiper-lib-script', 'cgb-swiper-init-script'),
		)
	);
}
add_action( 'init', 'create_block_slider_block_block_init' );
