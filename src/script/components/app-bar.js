class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
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

                :host {
                    position: relative;
                    width: 100%;
                    background-color: #080F29;
                    height: 70px;
                    display: block;
                }
                
                :host > p {
                    font-size: 30px;
                    color: white;
                    font-weight: bold;
                    margin-left: 20px;
                    line-height: 70px;
                }
            </style>
            <p><i class="bx bx-movie-play"></i> Movie App</p>
        `;
    }
}

customElements.define('app-bar', AppBar);