( function( blocks, editor, i18n, element, components, _ ) {
	var __ = i18n.__;
	var el = element.createElement;
	var RichText = editor.RichText;
	var MediaUpload = editor.MediaUpload;

	blocks.registerBlockType( 'create-block/error-block', {
		title: __( '404 Block', 'service-block' ),
		icon: 'index-card',
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
			btn: {
				type: 'array',
				source: 'children',
				selector: 'a',
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
					tagName: 'h2',
					inline: true,
					placeholder: __(
						'Write Recipe title…',
						'service-block'
					),
					value: attributes.title,
					onChange: function( value ) {
						props.setAttributes( { title: value } );
					},
				} ),
				el(
					'div',
					{ className: 'recipe-image' },
					el( MediaUpload, {
						onSelect: onSelectImage,
						allowedTypes: 'image',
						value: attributes.mediaID,
						render: function( obj ) {
							return el(
								components.Button,
								{
									className: attributes.mediaID
										? 'image-button'
										: 'button button-large',
									onClick: obj.open,
								},
								! attributes.mediaID
									? __( 'Upload Image', 'service-block' )
									: el( 'img', { src: attributes.mediaURL } )
							);
						},
					} )
				),
				el( 'h3', {}, i18n.__( 'Ingredients', 'service-block' ) ),
				el( RichText, {
					tagName: 'ul',
					multiline: 'li',
					placeholder: i18n.__(
						'Write a list of ingredients…',
						'service-block'
					),
					value: attributes.ingredients,
					onChange: function( value ) {
						props.setAttributes( { ingredients: value } );
					},
					className: 'ingredients',
				} ),
				el( 'h3', {}, i18n.__( 'Instructions', 'service-block' ) ),
				el( RichText, {
					tagName: 'div',
					inline: false,
					placeholder: i18n.__(
						'Write instructions…',
						'service-block'
					),
					value: attributes.instructions,
					onChange: function( value ) {
						props.setAttributes( { instructions: value } );
					},
				} )
			);
		},
		save: function( props ) {
			var attributes = props.attributes;

			return el(
				'div',
				{ className: props.className },
				el( RichText.Content, {
					tagName: 'h2',
					value: attributes.title,
				} ),
				attributes.mediaURL &&
				el(
					'div',
					{ className: 'recipe-image' },
					el( 'img', { src: attributes.mediaURL } )
				),
				el( 'h3', {}, i18n.__( 'Ingredients', 'service-block' ) ),
				el( RichText.Content, {
					tagName: 'ul',
					className: 'ingredients',
					value: attributes.ingredients,
				} ),
				el( 'h3', {}, i18n.__( 'Instructions', 'service-block' ) ),
				el( RichText.Content, {
					tagName: 'div',
					className: 'steps',
					value: attributes.instructions,
				} )
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
