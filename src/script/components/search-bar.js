class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchInput').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                @import url("https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css");

                .search-box {
                    position: absolute;
                    height: 42px;
                    width: 40%;
                    margin: 20px auto;
                    top: -7px;
                    right: 15px;
                    overflow: hidden;
                    border-radius: 6px;
                }
                
                .search-box input {
                    height: 100%;
                    width: 100%;
                    outline: none;
                    border: none;
                    background-color: #55709C;
                    padding: 0 15px 0 45px;
                    color: #fff;
                }
                
                .search-box button {
                    position: absolute;
                    right: 0;
                    border: 0;
                    outline: 0;
                    height: 70%;
                    margin: 5px;
                    cursor: pointer;
                    background-color: #080F29;
                    color: white;
                    border-radius: 6px;
                    padding: 0 10px;
                    margin-top: 7px;
                    transform: translateY(-145%);
                }
                
                .search-box button:hover {
                    background-color: #121f4e;
                }
                
                .search-box input::placeholder {
                    color: #080F29;
                }
                
                .search-box i {
                    position: absolute;
                    z-index: 2;
                    color: #080F29;
                    top: 50%;
                    left: 15px;
                    font-size: 22px;
                    transform: translateY(-50%);
                }
            </style>

            <div class="search-box">
                <i class="bx bx-search"></i>
                <input type="text" placeholder="Search a movie" id="searchInput">
                <button type="submit" id="searchButton">Search</button>
            </div>
        `;

        this.shadowDOM.querySelector('#searchButton').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);