const React = require('react');
const ReactDOM = require('react-dom');
const Search = require('./components/search.jsx')
const products = require('./products.js');

ReactDOM.render(<Search products={products} />, document.getElementById('app'));
