import React, { Component } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
import Button from './components/Button/Button';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    selectedImageURL: false,

    // showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }
  onChangeQuery = search => {
    this.setState({ searchQuery: search, currentPage: 1, articles: [] });
  };

  fetchArticles = () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({ isLoading: true });

    const baseUrl = `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=20121520-31007c0d251d9bb7e2efefbf9&image_type=photo&orientation=horizontal&per_page=12`;

    axios
      .get(baseUrl)
      .then(response => {
        this.setState(prevState => ({
          articles: [...prevState.articles, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };
  togleModal = () => {
    // this.setState({ selectedImageURL: true });
    this.setState(({ selectedImageURL }) => ({
      selectedImageURL: !selectedImageURL,
    }));
  };
  render() {
    const { articles, isLoading, selectedImageURL } = this.state;
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery articles={articles} onClick={this.fetchArticles} />

        {isLoading && <Loader />}
        {articles.length > 0 && (
          <Button type="button" onClick={this.fetchArticles} />
        )}

        {selectedImageURL && <Modal />}
      </>
    );
  }
}
export default App;
