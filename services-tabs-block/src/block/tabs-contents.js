export const { registerBlockType } = wp.blocks
export const { __ } = wp.i18n
export const { TextControl } = wp.components

export const {
    InspectorControls,
    BlockControls,
    RichText,
    InnerBlocks
} = wp.editor

export const ALLOWED_BLOCKS = [ 'create-block/block-tabs-content' ];

export const edit = ( props ) => {
    const {
        isSelected,
        setAttributes,
        className,
    } = props

    const {
        blocktabs
    } = props.attributes
    
    return [
        <div>
            <InnerBlocks
                templateLock="all"
                allowedBlocks={ ALLOWED_BLOCKS } />
        </div>
    ];
}

export const save = ( props ) => {
    const {
        blocktabs,
    } = props.attributes;
    
    const {
        className
    } = props;
    
    var classN = className !== undefined ? className : '';
    
    return (
        <div className={ 'tab-content ' + classN }>
            <InnerBlocks.Content />
        </div>
    );
}

registerBlockType( 'create-block/block-tabs-contents', {
    title: __( 'Tab content list' ),
    icon: 'editor-kitchensink',
    category: 'common',
    parent: ['create-block/block-tabs'],

    attributes: {
        blocktabs: {
            type: 'number',
            default: 1,
        },
    },
    edit: edit,
    save: save,
} )