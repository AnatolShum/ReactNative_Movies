import { Double } from "react-native/Libraries/Types/CodegenTypes";

type ConstructorParams = {
    title: String;
    id: Number;
    backdrop_path: String;
    poster_path: String;
    release_date: String;
    overview: String;
    vote_average: Double;
};

export class Movie {
    public title: String;
    public id: Number;
    public backdrop: String;
    public poster: String;
    public releaseDate: String;
    public overview: String;
    public vote: Double;

    constructor({
        title,
        id,
        backdrop_path,
        poster_path,
        release_date,
        overview,
        vote_average,
    }: ConstructorParams) {
        this.title = title;
        this.id = id;
        this.backdrop = backdrop_path;
        this.poster = poster_path;
        this.releaseDate = release_date;
        this.overview = overview;
        this.vote = vote_average;
    }
}