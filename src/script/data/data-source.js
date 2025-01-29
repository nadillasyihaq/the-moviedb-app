import axios from "axios";
const baseUrl = "https://api.themoviedb.org";

class DataSource {
    static async getPopularMovie() {
        return axios.get(`${baseUrl}/3/movie/popular?api_key=8ca24a94e969dbd3e7ed536a6c11bb88`)
            .then(response => {
                if (response) {
                    return Promise.resolve(response.data.results);
                } else {
                    return Promise.reject("Not Found!");
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    static async searchMovie(keyword) {
        return axios.get(`${baseUrl}/3/search/movie?api_key=8ca24a94e969dbd3e7ed536a6c11bb88&query=${keyword}`)
            .then(response => {
                if (response) {
                    return Promise.resolve(response.data.results);
                } else {
                    return Promise.reject("Not Found!");
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export default DataSource;