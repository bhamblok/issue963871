registerPaint('my-painted-image', class {
  static inputProperties = [
    '--my-integer-property',
    '--my-color-property-fg',
    '--my-color-property-bg',
  ];

  paint(ctx, size, styleMap, args) {
		const x = 10;
		const y = size.height * 0.3;
		const blockWidth = size.width * 0.33;
    const blockHeight = size.height * 0.85;
    
    console.log('PAINT API', '--my-integer-property:', styleMap.get('--my-integer-property').toString());
    console.log('PAINT API', '--my-color-property-fg:', styleMap.get('--my-color-property-fg').toString());
    console.log('PAINT API', '--my-color-property-bg:', styleMap.get('--my-color-property-bg').toString());

    ctx.lineWidth = 1.0;
    ctx.fillStyle = 'transparent';
    ctx.strokeStyle = styleMap.get('--my-color-property-fg');
	
		ctx.beginPath();
		ctx.moveTo( x, y );
		ctx.lineTo( blockWidth, y );
		ctx.lineTo( blockWidth, blockHeight );
		ctx.lineTo( x, blockHeight );
		ctx.lineTo( x, y );
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
  } 
});