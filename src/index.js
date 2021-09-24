/**
* Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
* All files containing `style` keyword are bundled together. The code used
* gets applied both to the front of your site and to the editor.
*
* @see https://www.npmjs.com/package/@wordpress/scripts#using-css
*/
import './style.scss';
import { registerBlockType } from '@wordpress/blocks'
import * as backgroundWrapper from './blocks/background-wrapper'
const blocks = [
backgroundWrapper,
];
console.log(blocks,typeof blocks)
Array.prototype.forEach.call(blocks, block => {
	const { name, settings } = block
	registerBlockType( name, settings )
});
//blocks.forEach( registerBlock )
( function() {
	var el = wp.element.createElement;
	var SVG = wp.primitives.SVG;
	var circle = el( 'circle', { cx: 10, cy: 10, r: 10, fill: 'red', stroke: 'blue', strokeWidth: '10' } )
	var svgIcon = el( SVG, { width: 20, height: 20, viewBox: '0 0 20 20'}, circle)
	wp.blocks.updateCategory( 'un-block', { icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><title>un-block</title><path fill="currentColor" d="M443.98 96.25c-11.01-45.22-47.11-82.06-92.01-93.72-32.19-8.36-63 5.1-89.14 24.33-3.25 2.39-6.96 3.73-10.5 5.48l28.32 18.21c7.42 4.77 9.58 14.67 4.8 22.11-4.46 6.95-14.27 9.86-22.11 4.8L162.83 12.84c-20.7-10.85-43.38-16.4-66.81-10.31-44.9 11.67-81 48.5-92.01 93.72-10.13 41.62-.42 80.81 21.5 110.43 23.36 31.57 32.68 68.66 36.29 107.35 4.4 47.16 10.33 94.16 20.94 140.32l7.8 33.95c3.19 13.87 15.49 23.7 29.67 23.7 13.97 0 26.15-9.55 29.54-23.16l34.47-138.42c4.56-18.32 20.96-31.16 39.76-31.16s35.2 12.85 39.76 31.16l34.47 138.42c3.39 13.61 15.57 23.16 29.54 23.16 14.18 0 26.48-9.83 29.67-23.7l7.8-33.95c10.61-46.15 16.53-93.16 20.94-140.32 3.61-38.7 12.93-75.78 36.29-107.35 21.95-29.61 31.66-68.8 21.53-110.43z" class=""></path></svg> } )
} )()

