import React from "react";

class SearchBar extends React.Component {
  state = { term: " " };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui search">
        <input
          className="prompt"
          type="text"
          placeholder="Search"
          onChange={e => this.setState({ term: e.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;
