<?php
/**
 * Plugin Name:     Error Block
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     error-block
 *
 * @package         create-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_error_block_block_init() {

	// Back-end
	wp_register_script(
		'cgb-error-script',
		plugins_url( '/error-block/build/index.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( plugin_dir_path( __DIR__ ) . '/error-block/build/index.js' ),
		true
	);

	register_block_type(
		'create-block/error-block',
		array(
			'editor_script' => 'cgb-error-script',
			'editor_style'  => 'cgb-editor-style',
			'style'         => 'cgb-style',
		)
	);
}
add_action( 'init', 'create_block_error_block_block_init' );
