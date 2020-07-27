registerLayout('my-layout', class {
  static inputProperties = [
    '--my-integer-property',
    '--my-color-property-fg',
    '--my-color-property-bg',
  ];

  async intrinsicSizes() { /* ... */ }

  async layout(children, edges, constraints, styleMap) {
    console.log('LAYOUT API', '--my-integer-property:', styleMap.get('--my-integer-property').toString());
    console.log('LAYOUT API', '--my-color-property-fg:', styleMap.get('--my-color-property-fg').toString());
    console.log('LAYOUT API', '--my-color-property-bg:', styleMap.get('--my-color-property-bg').toString());
    return {
      childFragments: await Promise.all(children.map(child => child.layoutNextFragment()))
    };
  }
});
