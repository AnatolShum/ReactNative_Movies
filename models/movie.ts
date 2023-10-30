import { Double } from "react-native/Libraries/Types/CodegenTypes";

export class Movie {
    public title: String;
    public id: Number;
    public backdrop: String;
    public poster: String;
    public releaseDate: String;
    public overview: String;
    public vote: Double;

    constructor(movieData) {
        this.title = movieData.title;
        this.id = movieData.id;
        this.backdrop = movieData.backdrop_path;
        this.poster = movieData.poster_path;
        this.releaseDate = movieData.release_date;
        this.overview = movieData.overview;
        this.vote = movieData.vote_average;
    }
}