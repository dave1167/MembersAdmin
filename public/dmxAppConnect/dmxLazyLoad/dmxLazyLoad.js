dmx.Attribute('lazyload', 'mounted', function(node, attr) {
  this.$addBinding(attr.value, function(value) {
		node.classList.add('lazyload');
  })
});
dmx.Attribute('lazyload-dynamic', 'mounted', function(node, attr) {
  this.$addBinding(attr.value, function(value) {
		node.classList.add('lazyload');
  })
});