( function( blocks, editor, i18n, element, components, _ ) {
	var __ = i18n.__;
	var el = element.createElement;
	var RichText = editor.RichText;
	var MediaUpload = editor.MediaUpload;

	blocks.registerBlockType( 'create-block/development-block', {
		title: __( 'Development Block', 'development-block' ),
		icon: 'welcome-comments',
		category: 'layout',
		attributes: {
			title_h2: {
				type: 'string',
				selector: '.development-block-title-h2',
			},
			title_h1: {
				type: 'string',
				selector: '.development-block-title-h1',
			},
			description: {
				type: 'string',
				selector: '.development-block-description-p',
			},
			list_services: {
				type: 'array',
				source: 'children',
				selector: '.list_services',
			},
		},
		edit: function( props ) {
			var attributes = props.attributes;

			return el(
				'div',
				{ className: 'custom-block' },
				el( RichText, {
					tagName: 'h2',
					inline: true,
					placeholder: __(
						'— Interesting to read',
						'development-block'
					),
					value: attributes.title_h2,
					onChange: function( value ) {
						props.setAttributes( { title_h2: value } );
					},
					className: 'h2',
				} ),
				el( RichText, {
					tagName: 'h1',
					inline: true,
					placeholder: __(
						'Full-cycle iOS app development services',
						'development-block'
					),
					value: attributes.title_h1,
					onChange: function( value ) {
						props.setAttributes( { title_h1: value } );
					},
					className: 'h1',
				} ),
				el( RichText, {
					tagName: 'p',
					inline: true,
					placeholder: __(
						'Our experience goes beyond coding. SENLA is a full-cycle iOS development company, thus we can fully cover your requirements. We also provide the following services:',
						'development-block'
					),
					value: attributes.description,
					onChange: function( value ) {
						props.setAttributes( { description: value } );
					},
					className: 'p',
				} ),
				el( RichText, {
					tagName: 'ul',
					multiline: 'li',
					placeholder: __(
						'Fill in the list…',
						'development-block'
					),
					value: attributes.list_services,
					onChange: function( value ) {
						props.setAttributes( { list_services: value } );
					},
				} ),
			);
		},
		save: function( props ) {
			var attributes = props.attributes;

			return el(
				'section', { className: 'cycle-dev' },
				el(
					'div', { className: 'container' },
					el(
						'div',
						{ className: 'cycle-dev__wrapper' },
						el( RichText.Content, {
							tagName: 'h2',
							value: attributes.title_h1,
							className: 'cycle-dev__title second-heading'
						} ),
						el(
							'div',
							{ className: 'cycle-dev__text-container' },
							el( RichText.Content, {
								tagName: 'p',
								value: attributes.description,
								className: 'cycle-dev__info second-text',
							} ),
							el( RichText.Content, {
								tagName: 'ul',
								className: 'list_services cycle-dev__list',
								value: attributes.list_services,
							} ),
						),
						el( RichText.Content, {
							tagName: 'p',
							value: attributes.title_h2,
							className: 'cycle-dev__text cycle-dev__text--black third-text',
						} ),
					)
				)
			);
		},
	} );
} )(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element,
	window.wp.components,
	window._
);
