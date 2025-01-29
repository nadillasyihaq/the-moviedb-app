import dateFormat from 'dateformat';

class MovieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                @import url("https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css");

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .image-box {
                    position: relative;
                    width: 140px;
                    height: 215px;
                    border-radius: 6px;
                    overflow: hidden;
                    margin: 5px;
                }
                
                .image-box img {
                    height: 100%;
                    width: 100%;
                    border-radius: 6px;
                    transition: transform 0.2s linear;
                }
                
                .image-box:hover img {
                    transform: scale(1.05);
                }
                
                .image-box .rate {
                    position: absolute;
                    width: 30%;
                    top: 0;
                    left: 0;
                    z-index: 4;
                    background-color: rgba(0, 0, 0, 0.7);
                    color: white;
                    font-size: 12px;
                    padding: 2px;
                }
                
                .image-box i {
                    margin-left: 5px;
                }
                
                .image-box .title-box {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 30%;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 100;
                    border-radius: 6px;
                    align: center;
                }
                
                .image-box .title-box h6 {
                    widht: 100%;
                    vertical-align: middle;
                    color: white;
                    font-size: 13px;
                    font-weight: bold;
                    text-align: center;
                    padding: 5px;
                    text-transform: capitalize;
                }
            </style>

            <div class="image-box">
                <img src="https://image.tmdb.org/t/p/w780${this._movie.poster_path}">
                <div class="title-box">
                    <h6>${this._movie.title} <br> (${dateFormat(this._movie.release_date, "yyyy")})</h6>
                </div>
                <div class="rate">
                    <i class='bx bxs-star'></i> ${this._movie.vote_average}
                </div>
            </div>
        `;
    }
}

customElements.define('movie-item', MovieItem);