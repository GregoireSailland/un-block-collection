import '../../editor.scss'
import { __ } from '@wordpress/i18n'
const {
	AlignmentToolbar,
	BlockControls,
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	RichText,
	useBlockProps,
	ButtonBlockerAppender,
} = wp.blockEditor
const {
	Button,
	CheckboxControl,
	ColorPicker,
	IconButton,
	PanelBody,
	PanelRow,
	SelectControl,
	ToggleControl,
	Toolbar,
	ResizableBox,
} = wp.components

import { stretchFullWidth, positionCenter, stretchWide } from '@wordpress/icons';
import { withSelect, select,useSelect } from '@wordpress/data';
import {syntaxHighlight} from '../../helpers.js'
export default function Edit(props) {
	const { blockCount } = useSelect(select => ({
		blockCount: select('core/block-editor').getBlockCount(props.clientId)
	}))
	let properties=useBlockProps()
	const { attributes, setAttributes, toggleSelection} = props;
	props.toggleSelection(true)
	var imageThumbURL = (props.imageObj &&
	                     props.imageObj.media_details &&
	                     props.imageObj.media_details.sizes &&
	                     props.imageObj.media_details.sizes.large &&
	                     props.imageObj.media_details.sizes.large.source_url
	                     )?'url("'+props.imageObj.media_details.sizes.large.source_url+'")':null
	const handleSlideProp = (value,prop)=>{
		if(prop=='backgroundImage'){
			//console.log(value.sizes.large.source_url)
			props.setAttributes( {[prop]:value.id} )
			imageThumbURL=value.sizes.large.source_url
			return
		}
		props.setAttributes( {[prop]:value} )

	}
	const style={
		backgroundImage:(
		                 imageThumbURL?imageThumbURL:
		                 (
		                  props.backgroundImage?('url("'+select("core").getMedia(props.backgroundImage).media_details.sizes.large.source_url+'")'):null
		                  )
		                 )
	}
	const alignmentClass = (attributes.textAlignment != null) ? 'has-text-align-' + attributes.textAlignment : '';
	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( {
			contentAlignment: newAlignment === undefined ? 'none' : newAlignment,
		} );
	};
	function setIcon() {
		if ( properties.contentAlignment ) return properties.contentAlignment.icon;
		return stretchFullWidth;
	}
	return(
	       <div { ...properties } style={style}>
	       <div className={"background-wrapper-container wp-block align"+attributes.contentAlignment}>
	       <BlockControls>
	       <AlignmentToolbar
	       icon={ setIcon() }
	       value={ attributes.contentAlignment }
	       onChange={ onChangeAlignment }
	       label = { __( 'Align' )}
	       describedBy={ __( 'Change content alignment' )}
	       alignmentControls={[
	       	{
	       		icon: positionCenter,
	       		title: __( 'Center content' ),
	       		align: 'center',
	       	},
	       	{
	       		icon: stretchWide,
	       		title: __( 'Wide width content' ),
	       		align: 'wide',
	       	},
	       	{
	       		icon: stretchFullWidth,
	       		title: __( 'Full width' ),
	       		align: 'full',
	       	},
	       	]}
	       	/>
	       	</BlockControls>
	       	<InnerBlocks renderAppender={blockCount?false:InnerBlocks.ButtonBlockAppender}/>
	       	</div>
	       	{
	       		props.isSelected &&
	       		(
	       		<MediaUpload
	       		onSelect={
	       			(newImage) => handleSlideProp( newImage,'backgroundImage' )
	       		} type="image" value={ attributes.backgroundImage }
	       		render={
	       			( { open } ) => ( <Button className="editor-media-placeholder__button is-button is-default is-large" icon="upload" onClick={ open }>Background</Button> )
	       		} />
	       		)
	       	}
	       	<div>blockCount:{blockCount}</div>
	       	</div>
	       	)
	       }
