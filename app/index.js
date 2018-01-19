const React = require('react');
const ReactDOM = require('react-dom');

const products = require('./products.js');

class Result extends React.Component {
  displayPrice(price) {
    return price / 100.0;
  }

  render() {
    return (
      <div className="in-stock">
        <h2>
          <a href="#">{this.props.product.name}</a>
        </h2>
        <p>${this.displayPrice(this.props.product.price)}</p>
        <p>{this.props.product.description}</p>
      </div>
    );
  }
}

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foundProducts: props.products
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('Results: ' + nextProps.query);
    console.log(nextProps.products);

    const foundProducts = nextProps.products.filter(product => {
      return (
        product.name.toLowerCase().match(nextProps.query.toLowerCase()) ||
        product.description.toLowerCase().match(nextProps.query.toLowerCase())
      );
    });
    this.setState({ foundProducts: foundProducts });
  }

  render() {
    return (
      <div className="results">
        {this.state.foundProducts.map((product, i) => {
          return <Result product={product} key={i} />;
        })}
      </div>
    );
  }
}

class SearchBar extends React.Component {
  handleQuery(event) {
    this.props.onQuery(event.target.value);
    // console.log('Query: ' + event.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input onChange={this.handleQuery.bind(this)} placeholder="Search" />
      </div>
    );
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  handleQuery(query) {
    // console.log('Search: ' + query);
    this.setState({ query: query.toLowerCase().trim() });
  }

  render() {
    return (
      <div className="search">
        <SearchBar onQuery={this.handleQuery.bind(this)} />
        <Results products={this.props.products} query={this.state.query} />
      </div>
    );
  }
}

ReactDOM.render(<Search products={products} />, document.getElementById('app'));
