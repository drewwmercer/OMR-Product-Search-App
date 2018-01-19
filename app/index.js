const React = require('react');
const ReactDOM = require('react-dom');

class Search extends React.Component {
  render() {
    return (
        <div className="search">
         <div className="search-bar">
            <input placeholder="Search" />
         </div>

        </div>
    )
  }
}

ReactDOM.render(<Search />, document.getElementById('app'));
