import './block/tabs-content.js';
import './block/tabs-title.js';
import './block/tabs-contents.js';
import './block/tabs-titles.js';
import './block/tabs.js';

( function( blocks, editor, i18n, element, components, _ ) {
    const __ = i18n.__;
    const el = element.createElement;
    const RichText = editor.RichText;

	blocks.registerBlockType( 'gutenberg-examples/services-tabs-block', {
		title: __( 'Services Tabs Block', 'services-tabs-block' ),
		icon: 'category',
		category: 'senla-blocks',
		attributes: {
			tabs__info_title: {
			    type: 'string',
				selector: 'tabs__info_title',
			},
            tabs__info_description: {
			    type: 'string',
                selector: 'tabs__info-description',
            }
		},
		edit: function( props ) {
			var attributes = props.attributes;

			return el(
				'div',
				{ className: 'tabs__info' },
                el( RichText, {
                    tagName: 'h2',
                    inline: true,
                    placeholder: __(
                        'We offer a huge variety of services',
                        'start-project-block'
                    ),
                    value: attributes.tabs__info_title,
                    onChange: function( value ) {
                        props.setAttributes( { tabs__info_title: value } );
                    },
                    className: 'tabs__info-title',
                } ),
                el( RichText, {
                    tagName: 'p',
                    inline: true,
                    placeholder: __(
                        'We assess your idea and prepare a roadmap of our further steps, then move to the product design stage',
                        'start-project-block'
                    ),
                    value: attributes.tabs__info_description,
                    onChange: function( value ) {
                        props.setAttributes( { tabs__info_description: value } );
                    },
                    className: 'tabs__info_description',
                } )
			);
		},
		save: function( props ) {
			var attributes = props.attributes;

			return el(
                'div', {className: 'tabs__info'},
                el(
                    el( RichText.Content, {
                        tagName: 'h2',
                        value: attributes.tabs__info_title,
                        className: 'tabs__info-title'
                    } ),
                    el( RichText.Content, {
                        tagName: 'p',
                        value: attributes.tabs__info_description,
                        className: 'tabs__info-description'
                    } ),
                )
			)
		},
	});
})(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element,
	window.wp.components,
	window._
);
