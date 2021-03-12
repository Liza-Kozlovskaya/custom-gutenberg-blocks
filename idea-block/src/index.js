( function( blocks, editor, i18n, element, components, _ ) {
	const __ = i18n.__;
	const el = element.createElement;
	const RichText = editor.RichText;
	const MediaUpload = editor.MediaUpload;

	blocks.registerBlockType( 'create-block/idea-block', {
		title: __( 'Idea Block', 'idea-block' ),
		icon: 'align-pull-right',
		category: 'media',
		attributes: {
			title_section: {
				type: 'string',
				selector: 'idea__aside-heading'
			},
			title: {
				type: 'string',
				selector: 'idea__heading'
			},
			description: {
				type: 'string',
				selector: 'idea__text',
			},
			btn_text: {
				source: 'children',
				selector: 'idea__button_text',
			},
			btn_url: {
				source: 'attribute',
				selector: 'idea__button_link',
				attribute: 'href',
			},

		},
		edit: function( props ) {
			let attributes = props.attributes;

			return el(
				'div',
				{ className: 'custom-block' },
				el( RichText, {
					tagName: 'h2',
					inline: true,
					placeholder: __(
						'— hey, buddy',
						'idea-block'
					),
					value: attributes.title_section,
					onChange: function( value ) {
						props.setAttributes( { title_section: value } );
					},
					className: 'h2',
				} ),
				el( RichText, {
					tagName: 'h1',
					inline: true,
					placeholder: __(
						'Got Idea?',
						'idea-block'
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
						'SENLA will provide your business with advanced solutions and help realize a unique business model in a competitive market.',
						'idea-block'
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
							'Get a free consultancy',
							'idea-block'
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
							'idea-block'
						),
						value: attributes.btn_url,
						onChange: function( value ) {
							props.setAttributes( { btn_url: value } );
						},
						className: 'block-editor-link',
					} )
				),
			)
		},
		save: function( props ) {
			const attributes = props.attributes;

			return el(
				'section', { className: 'idea' },
				el(
					'div',
					{ className: 'idea__container container'},
					el (
						'div',
						{ className: 'idea__wrapper'},
						el( RichText.Content, {
							tagName: 'span',
							value: attributes.title_section,
							className: 'idea__aside-heading fifth-heading',
						} ),
						el( RichText.Content, {
							tagName: 'h2',
							value: attributes.title,
							className: 'idea__heading first-heading',
						} ),
						el( RichText.Content, {
							tagName: 'p',
							value: attributes.description,
							className: 'idea__text first-text',
						} ),
						el( RichText.Content, {
							tagName: 'a',
							href: attributes.btn_url,
							value: attributes.btn_text,
							className: 'idea__button button',
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
