import React from 'react';
class Filter extends React.Component {
  handleSearchChange = event => {
    this.props.onSearchChange(event.target.value);
  };

  render() {
    const { searchTerm } = this.props;

    return (
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={this.handleSearchChange}
      />
    );
  }
}

export default Filter;
