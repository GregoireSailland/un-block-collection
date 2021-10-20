	/*
	<pre>
	{JSON.stringify(props.attributes)}
	{JSON.stringify(props.attributes.backgroundLandscape?props.attributes.backgroundLandscape.url:'')}
	</pre>
	disableAlpha
	*/

	<div { ...useBlockProps.save() }>
	<InnerBlocks.Content />
	</div>(
	<InnerBlocks.Content />
	)




	const buttonEdit=(event) => {
		console.log('_________buttonEdit',event,this)
	}
	//console.log('___________________',properties,props)
	<div onClick={ divClick }>Edit</div>
	const log=($event,properties,props)=> {
		console.log('__________________t',this,$event,properties,props,BlockControls)
		console.log('__________________t',typeof $event,typeof properties,typeof props,typeof <BlockControls/>)
		//props.toggleSelection()
	}
	select('core/block-editor').getBlockCount(props.clientId)
	<BlockControls>
	<AlignmentToolbar value={attributes.textAlignment} onChange={(newalign) => setAttributes({ textAlignment: newalign })} />
	<Toolbar>
	<IconButton label="My very own custom button" icon="edit" className="my-custom-button" onClick={buttonEdit}/>
	</Toolbar>
	</BlockControls>

	<pre className="pre" dangerouslySetInnerHTML={{__html:syntaxHighlight(JSON.stringify([attributes, setAttributes,props], null, 2))}}></pre>

	<ServerSideRender block="un-block/un-block"/>
	<ResizableBox
	size={ {
		height:attributes.minHeight,
	} }
	minHeight="30"
	enable={ {
		top: false,
		right: false,
		bottom: true,
		left: false,
		topRight: false,
		bottomRight: false,
		bottomLeft: false,
		topLeft: false,
	} }
	onResizeStop={ ( event, direction, elt, delta ) => {
		setAttributes( {
			minHeight: parseInt( attributes.minHeight + delta.height, 10 ),
		} );
		toggleSelection( true );
	} }
	onResizeStart={ () => {
		toggleSelection( false );
	} }
	/>,
	console.log('aaa',imageThumbURL,attributes,props)
	const getMethods = (obj) => {
		let p = new Set()
		let currentObj = obj
		do {
			Object.getOwnPropertyNames(currentObj).map(item => p.add(item))
		}
		while ((currentObj = Object.getPrototypeOf(currentObj))){
			return [...p.keys()].filter(item => typeof(obj[item]) === 'function')
		}
	}
	if(0)wp.data.dispatch( 'core/notices' ).createNotice(
		'error',
		'Please enter a title',
		{ id: 'title-lock', isDismissible: false }
		);

		const divClick = (event) => {
			console.log(InnerBlocks)
			console.log('_________divEdit',event,this,)
			console.log('_________divEdit wp',wp,getMethods(wp))
			console.log('_________divEdit wp.blocks',
				wp.blocks.children.getChildrenArray(),
				getMethods(wp.blocks.children)
				)
		}

		<div { ...useBlockProps.save() }>
		<InnerBlocks.Content />
		</div>(
		<InnerBlocks.Content />
		)

