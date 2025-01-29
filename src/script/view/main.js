import '../components/search-bar.js';
import DataSource from "../data/data-source.js";

const main = () => {
    const searchBar = document.querySelector('search-bar');
    const movieList = document.querySelector('movie-list');

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMovie(searchBar.value);
            if (result.length != 0) {
                renderResult(result);
            } else {
                fallbackResult(`Movie dengan keyword "${searchBar.value}" tidak ditemukan!`);
            }
        } catch (message) {
            fallbackResult(message);
        }
    }

    const getPopularMovies = async () => {
        try {
            const result = await DataSource.getPopularMovie();
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
        }
    }

    const renderResult = results => {
        movieList.movies = results;
    };

    const fallbackResult = message => {
        movieList.renderError(message);
    };

    getPopularMovies();
    searchBar.clickEvent = onButtonSearchClicked;

};

export default main;