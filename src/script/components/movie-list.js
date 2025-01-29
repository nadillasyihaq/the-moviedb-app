import './movie-item.js';

class MovieList extends HTMLElement {
    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this.innerHTML = '';
        const movieBox = document.createElement('div');
        movieBox.setAttribute('class', 'movies-box');
        this.appendChild(movieBox);

        this._movies.forEach(movie => {
            const movieItemElement = document.createElement('movie-item');
            movieItemElement.movie = movie;
            movieBox.appendChild(movieItemElement);
        });
    }

    renderError(message) {
        console.log(message)
        this.innerHTML = '';
        const movieBox = document.createElement('div');
        movieBox.setAttribute('class', 'movies-box');
        movieBox.innerHTML = `<h2 class="placeholder">${message}</h2>`;
        this.appendChild(movieBox);
    }
}

customElements.define('movie-list', MovieList);