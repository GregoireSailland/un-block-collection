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
	return(
	       <div { ...properties } className={alignmentClass,'background-wrapper'} /*onClick={($event)=>{
	       	//console.log('________block',$event,properties,props)
	       	//props.isSelected=true
	       	TRYING TO SHOW TOOLBAR HERE
	       }}*/ style={style}>
	       <div className="background-wrapper-container">
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
