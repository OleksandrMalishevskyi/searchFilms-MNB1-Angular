export class MovieServiceClient {
    findMatrixMovies() {
        return fetch('https://www.omdbapi.com/?s=matrix&apikey=f351a23b')
        .then(response => response.json())
    }
}