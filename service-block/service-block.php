<?php
/**
 * Plugin Name:     Service Block
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     service-block
 *
 * @package         create-block
 */


function create_block_service_block_init() {

	// Back-end
	wp_register_script(
		'cgb-service-script',
		plugins_url( '/service-block/build/index.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __DIR__ ) . '/service-block/build/index.js' ),
		true
	);

	register_block_type(
		'create-block/service-block',
		array(
			'editor_script' => 'cgb-service-script',
			'editor_style'  => 'cgb-editor-style',
			'style'         => 'cgb-style',
		)
	);
}
add_action( 'init', 'create_block_service_block_init' );
