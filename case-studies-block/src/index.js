( function( blocks, editor, i18n, element, components, _ ) {
	const __ = i18n.__;
	const el = element.createElement;
	const RichText = editor.RichText;

	blocks.registerBlockType( 'create-block/case-studies-block', {
		title: __( 'Related case studies Block', 'case-studies-block' ),
		icon: 'format-gallery',
		category: 'media',
		attributes: {
			main_title: {
				type: 'string',
				selector: 'h2.cases__heading',
			},
			card1_card_text: {
				type: 'string',
				selector: 'p.cases__card-text',
			},
			card1_card_title: {
				type: 'string',
				selector: 'h3.cases__sixth-heading',
			},
			card1_card_subtitle: {
				type: 'string',
				selector: 'h3.cases__sixth-heading',
			},
			card2_card_text: {
				type: 'string',
				selector: 'p.cases__card-text',
			},
			card2_card_title: {
				type: 'string',
				selector: 'h3.cases__sixth-heading',
			},
			card2_card_subtitle: {
				type: 'string',
				selector: 'h3.cases__sixth-heading',
			},
			card3_card_text: {
				type: 'string',
				selector: 'p.cases__card-text',
			},
			card3_card_title: {
				type: 'string',
				selector: 'h3.cases__sixth-heading',
			},
			card3_card_subtitle: {
				type: 'string',
				selector: 'h3.cases__sixth-heading',
			},
			card4_card_text: {
				type: 'string',
				selector: 'p.cases__card-text',
			},
			card4_card_title: {
				type: 'string',
				selector: 'h3.cases__sixth-heading',
			},
			card4_card_subtitle: {
				type: 'string',
				selector: 'h3.cases__sixth-heading',
			},
		},
		edit: function( props ) {
			const attributes = props.attributes;

			return el(
				'div',
				{ className: 'custom-block' },
				el( RichText, {
					tagName: 'h2',
					inline: true,
					placeholder: __(
						'Related case studies',
						'case-studies-block'
					),
					value: attributes.main_title,
					onChange: function( value ) {
						props.setAttributes( { main_title: value } );
					},
					className: 'h1',
				} ),
				el(
					'div',
					{ className: 'cases__card-row' },
					el(
						'div',
						{ className: 'cases__card' },
						el( 'p', { className: 'h6' }, __( '01', 'case-studies-block' ) ),
						el( RichText, {
							tagName: 'p',
							inline: true,
							placeholder: __(
								'Digital tools analization for future projects',
								'case-studies-block'
							),
							value: attributes.card1_card_text,
							onChange: function( value ) {
								props.setAttributes( { card1_card_text: value } );
							},
							className: 'p',
						} ),
						el(
							'div',
							{ className: 'cases__sixth-heading' },
							el( RichText, {
								tagName: 'p',
								inline: true,
								placeholder: __(
									'Digital',
									'case-studies-block'
								),
								value: attributes.card1_card_title,
								onChange: function( value ) {
									props.setAttributes( { card1_card_title: value } );
								},
								className: 'h4'
							} ),
							el( 'span', { className: 'h6' }, __( '|', 'case-studies-block' ) ),
							el( RichText, {
								tagName: 'p',
								inline: true,
								placeholder: __(
									'Event',
									'case-studies-block'
								),
								value: attributes.card1_card_subtitle,
								onChange: function( value ) {
									props.setAttributes( { card1_card_subtitle: value } );
								},
								className: 'h4'
							} ),
						)
					),
					el(
						'div',
						{ className: 'cases__card' },
						el( 'p', { className: 'h6' }, __( '02', 'case-studies-block' ) ),
						el( RichText, {
							tagName: 'p',
							inline: true,
							placeholder: __(
								'The design is intended to have you blink to control its interface',
								'case-studies-block'
							),
							value: attributes.card2_card_text,
							onChange: function( value ) {
								props.setAttributes( { card2_card_text: value } );
							},
							className: 'p',
						} ),
						el(
							'div',
							{ className: 'cases__sixth-heading' },
							el( RichText, {
								tagName: 'p',
								inline: true,
								placeholder: __(
									'Production',
									'case-studies-block'
								),
								value: attributes.card2_card_title,
								onChange: function( value ) {
									props.setAttributes( { card2_card_title: value } );
								},
								className: 'h4'
							} ),
							el( 'span', { className: 'h6' }, __( '|', 'case-studies-block' ) ),
							el( RichText, {
								tagName: 'p',
								inline: true,
								placeholder: __(
									'Brand',
									'case-studies-block'
								),
								value: attributes.card2_card_subtitle,
								onChange: function( value ) {
									props.setAttributes( { card2_card_subtitle: value } );
								},
								className: 'h4'
							} ),
						)
					),
					el(
						'div',
						{ className: 'cases__card' },
						el( 'p', { className: 'h6' }, __( '03', 'case-studies-block' ) ),
						el( RichText, {
							tagName: 'p',
							inline: true,
							placeholder: __(
								'A piece of paper with some distinct shapes can be used',
								'case-studies-block'
							),
							value: attributes.card3_card_text,
							onChange: function( value ) {
								props.setAttributes( { card3_card_text: value } );
							},
							className: 'p',
						} ),
						el(
							'div',
							{ className: 'cases__sixth-heading' },
							el( RichText, {
								tagName: 'p',
								inline: true,
								placeholder: __(
									'Art direction',
									'case-studies-block'
								),
								value: attributes.card3_card_title,
								onChange: function( value ) {
									props.setAttributes( { card3_card_title: value } );
								},
								className: 'h4'
							} ),
							el( 'span', { className: 'h6' }, __( '|', 'case-studies-block' ) ),
							el( RichText, {
								tagName: 'p',
								inline: true,
								placeholder: __(
									'-',
									'case-studies-block'
								),
								value: attributes.card3_card_subtitle,
								onChange: function( value ) {
									props.setAttributes( { card3_card_subtitle: value } );
								},
								className: 'h4'
							} ),
						)
					),
					el(
						'div',
						{ className: 'cases__card' },
						el( 'p', { className: 'h6' }, __( '04', 'case-studies-block' ) ),
						el( RichText, {
							tagName: 'p',
							inline: true,
							placeholder: __(
								'Patients could all resolve smaller lines in several line tests',
								'case-studies-block'
							),
							value: attributes.card4_card_text,
							onChange: function( value ) {
								props.setAttributes( { card4_card_text: value } );
							},
							className: 'p',
						} ),
						el(
							'div',
							{ className: 'cases__sixth-heading' },
							el( RichText, {
								tagName: 'p',
								inline: true,
								placeholder: __(
									'Video',
									'case-studies-block'
								),
								value: attributes.card4_card_title,
								onChange: function( value ) {
									props.setAttributes( { card4_card_title: value } );
								},
								className: 'h4'
							} ),
							el( 'span', { className: 'h6' }, __( '|', 'case-studies-block' ) ),
							el( RichText, {
								tagName: 'p',
								inline: true,
								placeholder: __(
									'Creative',
									'case-studies-block'
								),
								value: attributes.card4_card_subtitle,
								onChange: function( value ) {
									props.setAttributes( { card4_card_subtitle: value } );
								},
								className: 'h4'
							} ),
						)
					)
				)
			);
		},
		save: function( props ) {
			const attributes = props.attributes;

			const check_subtitle = function (subtitle, title){
				let vertical_bar = el( 'span', {}, __( '|', 'case-studies-block' ) );

				if(subtitle === undefined){
					return el(
						'h3', {className: 'cases__sixth-heading sixth-heading'},
						[title]
					)
				}
				else{
					return el(
						'h3', {className: 'cases__sixth-heading sixth-heading'},
						[title, vertical_bar, subtitle]
					)
				}
			}

			return el(
				'section', { className: 'cases'},
				el(
					'div', { className: 'cases__wrapper' },
					el(
						'div', { className: 'cases__container container' },
						el( RichText.Content, {
							tagName: 'h2',
							value: attributes.main_title,
							className: 'cases__heading second-heading',
						} ),
						el(
							'div', { className: 'cases__cards' },
							el(
								'div', { className: 'cases__card cases__card--first' },
								el( 'p', { className: 'cases__card-number sixth-heading' }, __( '01', 'case-studies-block' ) ),
								el( RichText.Content, {
									tagName: 'p',
									value: attributes.card1_card_text,
									className: 'cases__card-text fourth-heading',
								} ),
								check_subtitle(attributes.card1_card_subtitle, attributes.card1_card_title)
							),
							el(
								'div', { className: 'cases__card cases__card--second' },
								el( 'p', { className: 'cases__card-number cases__card-number--white sixth-heading' }, __( '02', 'case-studies-block' ) ),
								el( RichText.Content, {
									tagName: 'p',
									value: attributes.card2_card_text,
									className: 'cases__card-text cases__card-text--white fourth-heading',
								} ),
								check_subtitle(attributes.card2_card_subtitle, attributes.card2_card_title)
							),
							el(
								'div', { className: 'cases__card cases__card--third' },
								el( 'p', { className: 'cases__card-number sixth-heading' }, __( '03', 'case-studies-block' ) ),
								el( RichText.Content, {
									tagName: 'p',
									value: attributes.card3_card_text,
									className: 'cases__card-text fourth-heading',
								} ),
								check_subtitle(attributes.card3_card_subtitle, attributes.card3_card_title)
							),
							el(
								'div', { className: 'cases__card cases__card--fourth' },
								el( 'p', { className: 'cases__card-number sixth-heading' }, __( '04', 'case-studies-block' ) ),
								el( RichText.Content, {
									tagName: 'p',
									value: attributes.card4_card_text,
									className: 'cases__card-text fourth-heading',
								} ),
								check_subtitle(attributes.card4_card_subtitle, attributes.card4_card_title)
							),
						)
					)
				)
			);
		},
	} );
} )( window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element,
	window.wp.components,
	window._
);
