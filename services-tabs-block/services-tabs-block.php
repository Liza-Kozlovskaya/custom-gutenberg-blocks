<?php
/**
 * Plugin Name:     Services Tabs Block
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     services-tabs-block
 *
 * @package         create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_services_tabs_block_init() {
    // Back-end
    wp_register_script(
        'cgb-services_tabs-script',
        plugins_url( '/services-tabs-block/build/index.js', dirname( __FILE__ ) ),
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
        filemtime( plugin_dir_path( __DIR__ ) . '/services-tabs-block/build/index.js' ),
        true
    );

    register_block_type(
        'create-block/services-tabs-block',
        array(
            'editor_script' => 'cgb-services_tabs-script',
            'editor_style'  => 'cgb-editor-style',
        )
    );
}
add_action( 'init', 'create_block_services_tabs_block_init' );
