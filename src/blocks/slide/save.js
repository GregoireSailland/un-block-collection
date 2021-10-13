/**
* Retrieves the translation of text.
*
* @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
*/
import { __ } from '@wordpress/i18n';
/**
* React hook that is used to mark the block wrapper element.
* It provides all the necessary props like the class name.
*
* @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
*/
import { InnerBlocks,useBlockProps } from '@wordpress/block-editor';

/**
* The save function defines the way in which the different attributes should
* be combined into the final markup, which is then serialized by the block
* editor into `post_content`.
*
* @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
*
* @return {WPElement} Element to render.
*/
export default function save({attributes}) {
	//console.log(attributes,useBlockProps)
	let backgroundLandscape
	if(attributes.backgroundLandscape)backgroundLandscape = attributes.backgroundLandscape.url
		let backgroundStyleLandscape = {}
	if(backgroundLandscape && backgroundLandscape.trim()!='')backgroundStyleLandscape={
		backgroundImage:`url(${backgroundLandscape})`,
		backgroundSize:'cover',
		backgroundPosition:'center center',
		'minHeight':(attributes.minHeight!='undefined'?attributes.minHeight:'100%')
	}

	let backgroundPortrait
	if(attributes.backgroundPortrait)backgroundPortrait = attributes.backgroundPortrait.url
		let backgroundStylePortrait = {}
	if(backgroundPortrait && backgroundPortrait.trim()!='')backgroundStylePortrait={
		backgroundPortrait:`url(${backgroundPortrait})`,
		backgroundSize:'cover',
		backgroundPosition:'center center',
		'minHeight':(attributes.minHeight!='undefined'?attributes.minHeight:'100%')
	}

	return (
		<div { ...useBlockProps.save() } /*style={backgroundStyleLandscape}*/>
		{attributes.backgroundLandscape && attributes.backgroundLandscape.url?<img src={attributes.backgroundLandscape.url} /*srcset={attributes.backgroundLandscape.srcset}*/ class="slide-background landscape{!attributes.backgroundPortrait || attributes.backgroundPortrait.url?' portrait':''}"/>:''}
		{attributes.backgroundPortrait && attributes.backgroundPortrait.url?<img src={attributes.backgroundPortrait.url} /*srcset={attributes.backgroundPortrait.srcset}*/ class="slide-background portrait{!attributes.backgroundLandscape || attributes.backgroundLandscape.url?' landscape':''}"/>:''}
		<div className={
			`slick-slide-caption
			vertical-${attributes.v}
			horizontal-${ attributes.h}`
		} style={{background:attributes.bgColorLandscape}}>
		<InnerBlocks.Content />
		</div>
		</div>
		);
}
