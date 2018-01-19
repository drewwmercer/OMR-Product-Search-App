const React = require('react');
const ReactDOM = require('react-dom');

const product = require('./products.js');

class Results extends React.Component {
  render() {
    return (
      <div className="results">
        <div className="in-stock" />
      </div>
    );
  }
}

class SearchBar extends React.Component {
  handleQuery(event) {
    this.props.onQuery(event.target.value);
    console.log('Query: ' + event.target.value);
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
    console.log('Search: ' + query);
    // this.setState({'query': })
  }

  render() {
    return (
      <div className="search">
        <SearchBar onQuery={this.handleQuery.bind(this)} />
        <Results />
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById('app'));
