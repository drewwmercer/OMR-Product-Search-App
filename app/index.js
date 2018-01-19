const React = require('react');
const ReactDOM = require('react-dom');

class SearchBar extends React.Component {
  
    handleQuery(event) {
        console.log("Query: " + event.target.value)
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
  render() {
    return (
      <div className="search">
        <SearchBar />
        <div className="results">
          <div className="in-stock">
            <h2>
              <a href="#">Toothpaste</a>
            </h2>
            <p>$2.99</p>
            <p>
              I'm a placeholder but I can just paragraph text to show on the
              item.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById('app'));
