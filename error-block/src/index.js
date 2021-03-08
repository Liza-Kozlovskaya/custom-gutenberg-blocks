( function( blocks, editor, i18n, element, components, _ ) {
	var __ = i18n.__;
	var el = element.createElement;
	var RichText = editor.RichText;
	var MediaUpload = editor.MediaUpload;

	blocks.registerBlockType( 'create-block/error-block', {
		title: __( '404 Block', 'service-block' ),
		icon: 'welcome-comments',
		category: 'layout',
		attributes: {
			title: {
				type: 'array',
				source: 'children',
				selector: 'h1',
			},
			description: {
				type: 'array',
				source: 'children',
				selector: 'p',
			},
			btn_text: {
				source: 'children',
				selector: 'a',
			},
			btn_url: {
				selector: 'a',
				source: 'attribute',
				attribute: 'href',
			},
		},
		edit: function( props ) {
			var attributes = props.attributes;

			var onSelectImage = function( media ) {
				return props.setAttributes( {
					mediaURL: media.url,
					mediaID: media.id,
				} );
			};

			return el(
				'div',
				{ className: props.className },
				el( RichText, {
					tagName: 'h1',
					inline: true,
					placeholder: __(
						'404',
						'service-block'
					),
					value: attributes.title,
					onChange: function( value ) {
						props.setAttributes( { title: value } );
					},
					className: 'h1',
				} ),
				el( RichText, {
					tagName: 'p',
					inline: true,
					placeholder: __(
						'Sorry, we can\'t find that page!',
						'service-block'
					),
					value: attributes.description,
					onChange: function( value ) {
						props.setAttributes( { description: value } );
					},
					className: 'p',
				} ),
				el(
					'div',
					{ className: 'block-editor__contents-btn' },
					el( RichText, {
						tagName: 'p',
						inline: true,
						placeholder: __(
							'Back to main',
							'service-block'
						),
						value: attributes.btn_text,
						onChange: function( value ) {
							props.setAttributes( { btn_text: value } );
						},
						className: 'block-editor-button',
					} ),
					el( RichText, {
						tagName: 'p',
						inline: true,
						placeholder: __(
							'https://senlainc.com/',
							'service-block'
						),
						value: attributes.btn_url,
						onChange: function( value ) {
							props.setAttributes( { btn_url: value } );
						},
						className: 'block-editor-link',
					} )
				),
			);
		},
		save: function( props ) {
			var attributes = props.attributes;

			return el(
				'section', { className: 'error' },
				el(
					'div', { className: 'error__wrapper', style: { backgroundImage: `url(/wp-content/uploads/2021/03/error-bg.svg)` } },
					el(
						'div', { className: 'error__grid container' },
						el(
							'div',
							{ className: 'error__container' },
							el( RichText.Content, {
								tagName: 'h1',
								value: attributes.title,
								className: 'error__title',
							} ),
							el( RichText.Content, {
								tagName: 'p',
								value: attributes.description,
								className: 'error__text fourth-heading',
							} ),
							el( RichText.Content, {
								tagName: 'a',
								href: attributes.btn_url,
								value: attributes.btn_text,
								className: 'error__button button',
							} ),
						)
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
