const React = require('react');
const SearchBar = require('./search_bar.jsx');
const Results = require('./results.jsx');

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

module.exports = Search;
