import memoize from 'memize';
import { times, merge } from 'lodash';

export const { registerBlockType, createBlock } = wp.blocks
export const { __ } = wp.i18n
export const { TextControl } = wp.components
const { useDispatch, useSelect } = wp.data;

export const {
    InspectorControls,
    BlockControls,
    RichText,
} = wp.editor

export const ALLOWED_BLOCKS = [ 'create-block/block-tabs-title', 'create-block/block-tabs-content' ];

export const getTabsTemplate = memoize( ( tabs ) => {
    var content = [
        ['create-block/block-tabs-titles', {blocktabs: tabs}, times( tabs, (i) => [ 'create-block/block-tabs-title', {tabid: i} ] ) ],
        ['create-block/block-tabs-contents', {blocktabs: tabs}, times( tabs, (i) => [ 'create-block/block-tabs-content', {tabid: i} ] ) ],
    ];
    return content;
} );

export const edit = ( props ) => {
    const {
        isSelected,
        setAttributes,
        className,
        focus,
        setFocus,
        clientId
    } = props

    const {
        blocktabs
    } = props.attributes
    
    const { replaceInnerBlocks } = useDispatch("core/block-editor");
    const { inner_blocks } = useSelect(select => ({
            inner_blocks: select("core/block-editor").getBlocks(clientId)
    }));
    let innerBlocks = inner_blocks;

    return [
        <div className={'custom-block'}>
            <wp.editor.InnerBlocks
                    template={ getTabsTemplate( blocktabs ) }
                    templateLock="all"
                    allowedBlocks={ ALLOWED_BLOCKS } />
            {
                isSelected &&
                <InspectorControls key='inspector'>
                    <TextControl
                        label={ __( 'Count of tabs' ) }
                        value={ blocktabs }
                        type='number'
                        onChange={ ( value ) => {
                            let countNewTabs = parseInt(value);
                            setAttributes( { blocktabs: countNewTabs } );
    
                            innerBlocks.forEach((i) => {
                                i.attributes.blocktabs = countNewTabs;
                                let iInnerBlocks = i.innerBlocks;
                                
                                replaceInnerBlocks(i.clientId, iInnerBlocks, false);
                            });
                        } }
                    />
                </InspectorControls>
            }
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
            <wp.editor.InnerBlocks.Content />
        </div>
    );
}

registerBlockType( 'create-block/block-tabs', {
    title: __( 'Services Tabs Block' ),
    icon: 'editor-kitchensink',
    category: 'senla-blocks',

    attributes: {
        blocktabs: {
            type: 'number',
            default: 1,
        },
    },
    edit: edit,
    save: save,
} )