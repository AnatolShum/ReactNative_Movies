import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import ColorView from "../components/backgroundGradient";
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from "../styles/global";
import { Network } from "../network/network";
import { Movie } from "../models/movie";
import MovieView from "../components/movieView";

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        Network.fetchData({ type: Network.Argument.nowPlaying, page: 1 }, (error, data) => {
            if (error) {
                console.error(error);
            } else { 
                const newMovies = data.results.map(movieData => new Movie(movieData));
                setMovies(newMovies);
            }
        });
    }, []);

return(
<ColorView>
    <SafeAreaView style={ globalStyles.safeArea }>
        <View style={ globalStyles.contentView }>
            <FlatList
                data={movies}
                horizontal={true}
                style={styles.flatList}
                ItemSeparatorComponent={() => <View style={{width: 10}} />}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                <MovieView 
                    movie={item} 
                    style={styles.movieView}
                />)}
            />
        </View>
    </SafeAreaView>
</ColorView>
);
}

const styles = StyleSheet.create({
    movieView: {
        width: 80,
    },
    flatList: {
        paddingLeft: 10,
        paddingRight: 10,
    },
});