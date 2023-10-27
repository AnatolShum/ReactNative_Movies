type ConstructorParams = {
    id: String;
    name: String;
    email: String;
    joined: Date;
};

export class User {
    public id: String;
    public name: String;
    public email: String;
    public joined: Date;

    constructor({
        id,
        name,
        email, 
        joined,
    }: ConstructorParams) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.joined = joined;
    }
}