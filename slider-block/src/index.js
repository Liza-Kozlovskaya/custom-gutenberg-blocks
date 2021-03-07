( function ( blocks, editor, i18n, element, components, _ ) {
	const el = element.createElement;
	const __ = i18n.__;
	const RichText = editor.RichText;
	const MediaUpload = editor.MediaUpload;

	blocks.registerBlockType( 'create-block/slider-block', {
		title: __( 'Slider Block', 'slider-block' ),
		icon: 'align-wide',
		category: 'media',
		attributes: {
			images: {
				type: 'array',
			},
		},
		edit: function ( props ) {
			let attributes = props.attributes;

			let onSelectImage = function ( media ) {
				let images = [];
				media.forEach( function ( item ) {
					images.push( item );
				} );
				return props.setAttributes( {
					images: images,
				} );
			};

			// Генерация в админке
			let generateSliderMarkup = function ( images ) {
				if ( images !== undefined ) {
					return images.map( ( image ) =>
						el(
							'div',
							{ className: 'swiper-slide' },
							el( 'img', { src: image.url, alt: 'Слайд' } )
						)
					);
				}
			};

			let ids = '';
			if ( attributes.images !== undefined ) {
				ids = [];
				attributes.images.forEach( function ( image ) {
					ids.push( image.id );
				} );
			}

			return el(
				'div',
				{ className: props.className },
				el(
					'div',
					{ className: 'swiper-container' },
					el(
						'div',
						{ className: 'swiper-wrapper' },
						generateSliderMarkup( attributes.images )
					),
					el( 'div', { className: 'swiper-button-prev' } ),
					el( 'div', { className: 'swiper-button-next' } )
				),
				el(
					'div',
					{ className: 'slider-btn' },
					el( MediaUpload, {
						onSelect: onSelectImage,
						allowedTypes: 'image',
						multiple: true,
						gallery: true,
						value: ids,
						render: function ( obj ) {
							return el(
								components.Button,
								{
									className: 'button button-large',
									onClick: obj.open,
								},
								__( 'Upload/Manage Images', 'slider-block' )
							);
						},
					} )
				)
			);
		},
		save: function ( props ) {
			let attributes = props.attributes;

			// Генерация на Front End
			let generateSliderMarkup = function ( images ) {
				if ( images === undefined ) return;
				return images.map( ( image ) =>
					el(
						'div',
						{ className: 'swiper-slide' },
						el( 'img', { src: image.url, alt: 'Слайд' } )
					)
				);
			};

			return el(
				'div',
				{ className: props.className },
				attributes.images &&
				el(
					'div',
					{ className: 'swiper-container' },
					el( RichText.Content, {
						tagName: 'div',
						className: 'swiper-wrapper',
						value: generateSliderMarkup( attributes.images ),
					} ),
					el( 'div', { className: 'swiper-button-prev' } ),
					el( 'div', { className: 'swiper-button-next' } )
				)
			);
		},
	} );
} )(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element,
	window.wp.components
);
