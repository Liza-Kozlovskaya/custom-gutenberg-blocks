( function( blocks, editor, i18n, element, components, _ ) {
	const __ = i18n.__;
	const el = element.createElement;
	const RichText = editor.RichText;
	const MediaUpload = editor.MediaUpload;

	blocks.registerBlockType( 'create-block/service-block', {
		title: __( 'Service Block', 'service-block' ),
		icon: 'align-pull-right',
		category: 'media',
		attributes: {
			title_h2: {
				type: 'array',
				source: 'children',
				selector: 'h2',
			},
			title_h1: {
				type: 'array',
				source: 'children',
				selector: 'h1',
			},
			description: {
				type: 'array',
				source: 'children',
				selector: 'p',
			},
			mediaID: {
				type: 'number',
			},
			mediaURL: {
				type: 'string',
				source: 'attribute',
				selector: 'img',
				attribute: 'src',
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
		styles: [
			{
				name: "right",
				label: __("Image Right"),
				isDefault: true
			},
			{
				name: "left",
				label: __("Image Left")
			},
		],
		edit: function( props ) {
			let attributes = props.attributes;

			let onSelectImage = function( media ) {
				return props.setAttributes( {
					mediaURL: media.url,
					mediaID: media.id,
				} );
			};

			return el(
				'div', { className: 'custom-block' },
				el( RichText, {
					tagName: 'h2',
					inline: true,
					placeholder: __(
						'Services',
						'service-block'
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
						'Services',
						'service-block'
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
						'SENLA solutions will provide your business with significant advantages and help realize a unique business model in a competitive market.',
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
								? __( 'Upload/Manage Images', 'service-block' )
								: el( 'img', { src: attributes.mediaURL } )
						);
					},
				} ),
			)
		},
		save: function( props ) {
			let attributes = props.attributes;

			return el(
				'section', { className: 'section-preview section-preview--services' },
				el(
					'div',
					{ className: 'section-preview__container section-preview__container--services container', style: { backgroundImage: `url(${ attributes.mediaURL })` } },
					el(
						'div',
						{ className: 'section-preview__wrapper' },
						el( RichText.Content, {
							tagName: 'h2',
							value: attributes.title_h2,
							className: 'section-preview__heading-first sixth-heading',
						} ),
						el( RichText.Content, {
							tagName: 'h1',
							value: attributes.title_h1,
							className: 'section-preview__heading-second first-heading'
						} ),
						el( RichText.Content, {
							tagName: 'p',
							className: 'section-preview__text second-text',
							value: attributes.description,
						} ),
						el( RichText.Content, {
							tagName: 'a',
							href: attributes.btn_url,
							value: attributes.btn_text,
							className: 'section-preview__button button',
						} ),
						el(
							'img',
							{ src: attributes.mediaURL }
						),
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
