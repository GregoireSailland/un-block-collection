<?php
/**
* Plugin Name:       Un Block
* Description:       Gutenberg extra blocks.
* Requires at least: 5.8
* Requires PHP:      7.0
* Version:           0.1.0
* Author:            Grégoire Sailland
* License:           none
* License URI:       none
* Text Domain:       un-block
*
* @package           create-block
*/

/**
* Registers the block using the metadata loaded from the `block.json` file.
* Behind the scenes, it registers also all assets so they can be enqueued
* through the block editor in the corresponding context.
*
* @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
*/

function filter_block_categories_when_post_provided( $block_categories, $editor_context ){
	if ( ! empty( $editor_context->post ) ) {
		array_unshift($block_categories,[
			'slug'  => 'un-block',
			'title' => __( 'UN-BLOCK', 'un-block' ),
			'icon'  => null,
		]);
		/*$block_categories=[
		'slug'  => 'un-block',
		'title' => __( 'UN-BLOCK', 'un-block' ),
		'icon'  => null,]+$block_categories;*/
	}
	return $block_categories;
}
add_filter( 'block_categories_all', 'filter_block_categories_when_post_provided', 10, 2 );

function create_block_un_block_block_init() {
//exit(__DIR__);
	register_block_type( __DIR__
//,["render_callback" => "un_block_background_wrapper_render_callback"]
	);
	if(1)register_block_type('un-block/background-wrapper', [
		'render_callback' => 'un_block_background_wrapper_render_callback',
		'attributes' => [
			'align'=>[
				'type'=>'string',
				'default'=>'full'
			],
			'fullHeight'=>[
				'type'=>'boolean',
				'default'=>'true'
			],
			'removeElementsHeight'=>[
				'type'=>'object',
				'default'=>null
			],
			'textAlignment'=>[
				'type'=>'string',
			],
			'backgroundImage'=>[
				'type'=>'number',
				'default'=>null
			],
			'minHeight'=>[
				'type'=>'number',
				'default'=>50
			],
			'contentAlignment'=>[
				'type'=>'string',
				'default'=>'center'
			]
		],
		/*'editor_script'   => 'editor-js',
		'editor_style'    => 'editor-css',
		'script'          => 'frontend-js',
		'style'           => 'frontend-css',*/

	]
);
}
add_action( 'init', 'create_block_un_block_block_init' );

function un_block_background_wrapper_render_callback($attributes, $content){
	if(defined('REST_REQUEST') || is_admin() || wp_doing_ajax()
// || empty($attributes) || !is_array($attributes) || !array_key_exists('block_name',$attributes )
)return;
		$image=wp_get_attachment_image_src($attributes['backgroundImage'], 'full');
		?>
		<div class="background-wrapper align<?= $attributes['align'] ?>" style="background-image: url('<?= esc_attr( is_array($image) && count($image)?$image[0]:'' ); ?>');">

			<div class="content-wrapper">
				<div class="before" style="background-image: url('<?= esc_attr( is_array($image) && count($image)?$image[0]:'' ); ?>');"></div>
				<div class="content align<?= $attributes['contentAlignment'] ?>">
					<?= $content ?>
				</div>
			</div>
		</div>
		<?php
		return;
		echo '<hr>';
		echo '<pre>';
		print_r([$attributes, $content]);
		echo '</pre>';
	}
	function un_block_pass_block_name_to_render( $block, $source_block ){
		$block['attrs']=['block_name'=>$block['blockName']]+$block['attrs'];
		return $block;
	}
	add_action( 'render_block_data', 'un_block_pass_block_name_to_render', 10, 2 );

	function remove_default_stylesheets() {
		wp_deregister_style('wp-admin');
	}
//add_action('admin_init','remove_default_stylesheets');