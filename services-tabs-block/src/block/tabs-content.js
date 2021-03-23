export const { registerBlockType } = wp.blocks
export const { __ } = wp.i18n
export const { TextControl } = wp.components

export const {
    BlockControls,
    InnerBlocks,
} = wp.editor.InspectorControls ? wp.editor : wp.blocks


export const edit = ( props ) => {
    const {
        isSelected,
        setAttributes,
        className,
        placeholder
    } = props

    const {
        tabid
    } = props.attributes
    
    return [
        <div className={'tabs__item'}>
        <p className={'tabs__item-title'}>{ __('Content tab ' + (parseInt(tabid) + 1)) }</p>
            <InnerBlocks templateLock={false} />
        </div>
    ];
}

export const save = ( props ) => {
    var tabid = props.attributes.tabid;
    
    const {
        className
    } = props
    
    var classN = className !== undefined ? className : '';
    classN += tabid == 0 ? ' show active' : '';
    
    return (
        <div className={ 'tab-pane fade ' + classN }
        role="tabpanel"
        id={tabid}
        aria-labelledby={ tabid + '-tab'}>
            <InnerBlocks.Content />
        </div>
    );
}

registerBlockType( 'create-block/block-tabs-content', {
    title: __( 'Tab content' ),
    icon: 'welcome-write-blog',
    category: 'common',
    parent: ['create-block/block-tabs-contents'],

    attributes: {
        tabid: {
            type: 'number'
        },
    },
    edit: edit,
    save: save,
} )