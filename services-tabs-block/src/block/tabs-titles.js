export const { registerBlockType } = wp.blocks
export const { __ } = wp.i18n
export const { TextControl } = wp.components

export const {
    InspectorControls,
    BlockControls,
    RichText,
} = wp.editor

export const ALLOWED_BLOCKS = [ 'create-block/block-tabs-title' ];

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
            <wp.editor.InnerBlocks
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
    } = props
    
    return (
        <div className={ className }>
            <ul class="nav nav-tabs" role="tablist">
                <wp.editor.InnerBlocks.Content />
            </ul>
        </div>
    );
}

registerBlockType( 'create-block/block-tabs-titles', {
    title: __( 'Tab title list' ),
    icon: 'editor-kitchensink',
    category: 'common',
    parent: ['create-block/block-tabs'],
    keywords: [],

    attributes: {
        blocktabs: {
            type: 'number',
            default: 1,
        },
    },
    
    getEditWrapperProps( attributes ) {
        return {
            'data-tab-titles': 'true',
        };
    },
    edit: edit,
    save: save,
} )