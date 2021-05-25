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
    largeImageURL: '',
    isVisible: false,
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
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .finally(() => this.setState({ isLoading: false }));
  };
  togleModal = imgUrl => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible,
      largeImageURL: imgUrl,
    }));
  };

  render() {
    const { articles, isLoading, largeImageURL, isVisible } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery articles={articles} onImgClick={this.togleModal} />

        {isVisible && (
          <Modal onClick={this.togleModal} largeImageURL={largeImageURL} />
        )}
        {isLoading && <Loader />}
        {articles.length > 0 && (
          <Button type="button" onClick={this.fetchArticles} />
        )}
      </>
    );
  }
}
export default App;
