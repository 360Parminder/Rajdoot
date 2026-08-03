const icons = require('hugeicons-react');
const names = Object.keys(icons).filter(name => name.toLowerCase().includes('chart') || name.toLowerCase().includes('bar'));
console.log(names);
