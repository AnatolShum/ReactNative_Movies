import { Movie } from "../models/movie";
import { FirebaseAuth } from "../FirebaseConfig";
import { FirebaseDB } from "../FirebaseConfig";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

export class FavouriteManager {
    movieID: number;
    isFavourite: boolean;

    constructor(movieID: number) {
        this.movieID = movieID;
        this.isFavourite = false;
    }

    async checkFavourite(): Promise<void> {
        const auth = FirebaseAuth;
        const db = FirebaseDB;
        const userID = auth.currentUser.uid;
        
        // console.log(userID);
        // console.log(userID);
        // const q = query(collection(db, "users", "favourites"), where("id", "==", userID));
        // const querySnapshot = await getDocs(q);
        // querySnapshot.forEach((doc) => {
            
        // });
    }

    toggleFavourites() {

    }

    private addMovie(movieID: number, userID: string) {

    }

    private deleteMovie(dbID: string, userID: string) {

    }
}
