( function( blocks, editor, i18n, element, components, _ ) {
	var __ = i18n.__;
	var el = element.createElement;
	var RichText = editor.RichText;

	blocks.registerBlockType( 'gutenberg-examples/start-project-block', {
		title: __( 'Start project Block', 'start-project-block' ),
		icon: 'external',
		category: 'senla-blocks',
		attributes: {
			btn_url: {
				selector: 'a',
				source: 'attribute',
				attribute: 'href',
			},
		},
		edit: function( props ) {
			var attributes = props.attributes;

			return el(
				'div',
				{ className: 'custom-block' },
				el(
					'h1', {className: 'h1'}, __('Start your project', 'start-project-block')
				),
				el(
					'div',
					{ className: 'block-editor__contents-btn' },
					el('p', {className: 'p'}, __('Link: ', 'start-project-block')),
					el( RichText, {
						tagName: 'p',
						inline: true,
						placeholder: __(
							'https://senlainc.com/',
							'start-project-block'
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
				'section', { className: 'projects-show'},
				el(
					'div', {className: 'conteiner'},
					el(
						'h2', { className: 'projects-show__title second-heading'},
						el( RichText.Content, {
							tagName: 'a',
							href: attributes.btn_url,
							value: 'Start',
						} ),
						__(' your project', 'start-project-block')
					)
				)
			)
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
