import { FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export class User {
    public id: String;
    public name: String;
    public email: String;
    public joined: String;

    constructor(id, name, email, joined) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.joined = joined;
    }

    toString() {
        return this.id + ', ' + this.name + ', ' + this.email + ', ' + this.joined;
    }
}

export var userConverter: FirestoreDataConverter<User> = {
    toFirestore: (user: User) => {
        return { 
            id: user.id,
            name: user.name,
            email: user.email,
            joined: user.joined,
        };
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): User => {
        const data = snapshot.data(options)!;
        return new User(data.id, data.name, data.email, data.joined);
    },
};