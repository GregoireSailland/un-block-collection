import { __ } from '@wordpress/i18n';
const {	InspectorControls,RichText,ColorPalette,MediaUpload,} = wp.blockEditor;
const {	Button,	IconButton,	PanelBody,	TextControl, SelectControl,Flex, FlexItem, FlexBlock} = wp.components;
const {	Fragment,} = wp.element;
import {InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import '../../editor.scss';
export default function Edit(props){
	const blockProps = useBlockProps()
	console.log(InnerBlocks)
	//console.log('_',blockProps,props)
	
	let SliderProps = () => {
		//<InnerBlocks allowedBlocks={['core/paragraph','core/heading']}	/>
		return (
			<Fragment key={'attributes'}>
			<label class="un-block__label">Min Height <TextControl className="un-block__minHeight" placeholder="50vh" value={ props.attributes.minHeight } onChange={ ( minHeight ) => handleSlideProp( minHeight, 'minHeight' ) } /></label>
			</Fragment>
			)
		}

		return ([
		<InspectorControls key="1">
		<PanelBody title={ __( 'Slideshow' ) }>
		{SliderProps}
		</PanelBody>
		</InspectorControls>
		,
		<div { ...blockProps } class={blockProps.className} style={{border:'10px solid #000'}}>
		<label class="un-block__label">Min Height <TextControl className="un-block__minHeight" placeholder="50vh" value={ props.attributes.minHeight } onChange={ ( minHeight ) => handleSlideProp( minHeight, 'minHeight' ) } /></label>
		<InnerBlocks allowedBlocks={[/*'core/paragraph','core/heading',*/'un-block/slide']} />
		</div>
		])

	}
	// renderAppender={ () => (<button className="custom-appender">Add new block...</button>)}
	//renderAppender={ InnerBlocks.ButtonBlockAppender }