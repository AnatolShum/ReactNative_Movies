type ConstructorParams = {
    id: String;
    movieID: Number;
};

export class DBModel {
    public id: String;
    public movieID: Number;

    constructor({
        id,
        movieID,
    }: ConstructorParams) {
        this.id = id;
        this.movieID = movieID;
    }
}