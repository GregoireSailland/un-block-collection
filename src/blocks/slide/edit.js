import { __ } from '@wordpress/i18n';
const {	InspectorControls,RichText,MediaUpload } = wp.blockEditor;
const {	Button,	IconButton,	PanelBody,	TextControl, SelectControl,Flex, FlexItem, FlexBlock,ColorPalette,ColorPicker,Dropdown,Tooltip } = wp.components;
const {	Fragment,} = wp.element;
import {InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import '../../editor.scss';
export default function Edit(props){
	const blockProps = useBlockProps()
	console.log('_',blockProps,props)
	
	const handleSlideProp =(value,prop)=>{
		console.log(value)
		props.setAttributes( {[prop]:value} )
	}

	const colors=[
	{ name: 'transparent black', color: 'rgba(0,0,0,.85)' },
	{ name: 'transparent white', color: 'rgba(255,255,255,.85)' },
	{ name: 'transparent grey', color: 'rgba(145,144,133,.85)' },
	];
	
	let backgroundLandscape
	if(props.attributes.backgroundLandscape)backgroundLandscape = props.attributes.backgroundLandscape.url
		let backgroundStyleLandscape
	backgroundStyleLandscape = {}
	if(backgroundLandscape && backgroundLandscape.trim()!='')backgroundStyleLandscape={
		backgroundImage:`url(${backgroundLandscape})`,
		backgroundSize:'cover',
		backgroundPosition:'center center',
		alignSelf: 'stretch'
	}

	let backgroundPortrait
	if(props.attributes.backgroundPortrait)backgroundPortrait = props.attributes.backgroundPortrait.url
		let backgroundStylePortrait
	backgroundStylePortrait = {}
	if(backgroundPortrait && backgroundPortrait.trim()!='')backgroundStylePortrait={
		backgroundImage:`url(${backgroundPortrait})`,
		backgroundSize:'cover',
		backgroundPosition:'center center',
		alignSelf: 'stretch'
	}

	return ([
		<InspectorControls key="1">
		<PanelBody title={ __( 'Slideshow' ) }>
		<Fragment key={'attributes'}>
		</Fragment>
		</PanelBody>
		</InspectorControls>
		,
		<div { ...blockProps } class={blockProps.className} style={backgroundStyleLandscape}>
		<div className={
			`slick-slide-caption-editor
			vertical-${props.attributes.v}
			horizontal-${ props.attributes.h}`
		} style={{background:props.attributes.bgColorLandscape}}>
		<InnerBlocks /* allowedBlocks={['core/paragraph','core/heading']}*/
		/>
		</div>
		<Flex style={{flexWrap:'wrap'}}>

		<FlexItem style={backgroundStyleLandscape}>

		<MediaUpload onSelect={ (newImage) => handleSlideProp( newImage,'backgroundLandscape' ) } type="image" value={ props.attributes.backgroundLandscape } render={ ( { open } ) => (<Button	className="editor-media-placeholder__button is-button is-default is-large" icon="upload" onClick={ open } >Background Landscape</Button>)}/>

			<Dropdown className="components-color-palette__item-wrapper components-color-palette__custom-color" contentClassName="components-color-palette__picker"
			renderToggle={ ( { isOpen, onToggle } ) => (
				<Tooltip text={ 'color' }><button type="button" aria-expanded={ isOpen } className="components-color-palette__item"	onClick={ onToggle } aria-label={ 'color' } style={{backgroundColor:props.attributes.bgColorLandscape}}></button></Tooltip>
				)}
			renderContent={ () => (
				<div>
				<ColorPalette
				colors={ 
					colors
				}
				disableCustomColors = {true}
				clearable = {true}
				value={ props.attributes.bgColorLandscape }
				onChange={ ( color ) => {
					handleSlideProp( color , 'bgColorLandscape' )
				} }
				/>
				<ColorPicker color={ props.attributes.bgColorLandscape } onChangeComplete={ ( color ) => handleSlideProp( 'rgba('+color.rgb.r+','+color.rgb.g+','+color.rgb.b+','+color.rgb.a+')', 'bgColorLandscape') } disableAlpha={false}/>
				</div>
				) }
				/>

				</FlexItem>



				<FlexItem style={backgroundStylePortrait}>

				<MediaUpload onSelect={ (newImage) => handleSlideProp( newImage,'backgroundPortrait' ) } type="image" value={ props.attributes.backgroundPortrait } render={ ( { open } ) => (<Button className="editor-media-placeholder__button is-button is-default is-large" icon="upload" onClick={ open } >Background Portrait</Button>)}/>

				<Dropdown className="components-color-palette__item-wrapper components-color-palette__custom-color" contentClassName="components-color-palette__picker"
				renderToggle={ ( { isOpen, onToggle } ) => (
					<Tooltip text={ 'color' }><button type="button" aria-expanded={ isOpen } className="components-color-palette__item"	onClick={ onToggle } aria-label={ 'color' } style={{backgroundColor:props.attributes.bgColorPortrait}}></button></Tooltip>
					)}
				renderContent={ () => (
					<div>
					<ColorPalette
					colors={ 
						colors
					}
					disableCustomColors = {true}
					clearable = {true}
					value={ props.attributes.bgColorPortrait }
					onChange={ ( color ) => {
						handleSlideProp( color , 'bgColorPortrait' )
					} }
					/>
					<ColorPicker color={ props.attributes.bgColorPortrait } onChangeComplete={ ( color ) => handleSlideProp( 'rgba('+color.rgb.r+','+color.rgb.g+','+color.rgb.b+','+color.rgb.a+')', 'bgColorPortrait') } disableAlpha={false}/>
					</div>
					) }
					/>

					</FlexItem>


					<FlexBlock class="un-block-params-align">

					<SelectControl className="un-block-select"
					label={ __( 'Vertical' ) }
					labelPosition={'top'}
					value={ props.attributes.v }
					onChange={ ( newContent ) => handleSlideProp( newContent, 'v' ) }
					options={
						[
						{ value: 'top', label: 'Top' },
						{ value: 'middle', label: 'Middle' },
						{ value: 'bottom', label: 'Bottom' },
						]
					}
					/>


					<SelectControl className="un-block-select"
					label={ __( 'Horizontal' ) }
					labelPosition={'top'}
					value={ props.attributes.h }
					onChange={ ( newContent ) => handleSlideProp( newContent, 'h' )}
					options={
						[
						{ value: 'left', label: 'Left' },
						{ value: 'center', label: 'Center' },
						{ value: 'right', label: 'Right' },
						]
					}
					/>
					</FlexBlock>
					</Flex>
					</div>
					])
			}
			/*
			<pre>
			{JSON.stringify(props.attributes)}
			{JSON.stringify(props.attributes.backgroundLandscape?props.attributes.backgroundLandscape.url:'')}
			</pre>
			disableAlpha
			*/