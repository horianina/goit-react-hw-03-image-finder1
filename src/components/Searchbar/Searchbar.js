import React, { Component } from 'react';
import { SearchbarContainer } from './SearchbarStyled';

class Searchbar extends Component {
  state = {
    search: '',
  };
  handleChange = e => {
    this.setState({ search: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };
  render() {
    return (
      <SearchbarContainer>
        <header className="Searchbar">
          <form onSubmit={this.handleSubmit} className="SearchForm">
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>
            <input
              className="SearchForm-input"
              type="text"
              placeholder="Search images and photos"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </SearchbarContainer>
    );
  }
}
export default Searchbar;
