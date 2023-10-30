import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ScrollView } from "react-native";
import ColorView from "../components/backgroundGradient";
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from "../styles/global";
import { Network } from "../network/network";
import { Movie } from "../models/movie";
import MovieView from "../components/movieView";
import SectionHeader from "../components/sectionHeader";

export default function Movies() {
    const [nowPlaying, setNowPlaying] = useState([]);
    let nowPlayingPage = 1;
    const [topRated, setTopRated] = useState([]);
    let topRatedPage = 1;
    const [popular, setPopular] = useState([]);
    let popularPage = 1;

    function fetchNowPlaying(page) {
        Network.fetchData({ type: Network.Argument.nowPlaying, page: page }, (error, data) => {
            if (error) {
                console.error(error);
            } else { 
                const newMovies = data.results.map(movieData => new Movie(movieData));
                setNowPlaying(newMovies);
             }
         });
    };

    function fetchTopRated(page) {
        Network.fetchData({ type: Network.Argument.topRated, page: page }, (error, data) => {
            if (error) {
                console.error(error);
            } else {
                const newMovie = data.results.map(movieData => new Movie(movieData));
                setTopRated(newMovie);
            }
        });
    };

    function fetchPopular(page) {
        Network.fetchData({ type: Network.Argument.popular, page: page }, (error, data) => {
            if (error) {
                console.error(error);
            } else {
                const newMovie = data.results.map(movieData => new Movie(movieData));
                setPopular(newMovie);
            }
        });
    };

    useEffect(() => {
        fetchNowPlaying(nowPlayingPage);
        fetchTopRated(topRatedPage);
        fetchPopular(popularPage);
    }, []);

return(
<ColorView>
    <ScrollView>
        <SafeAreaView style={ globalStyles.safeArea }>
            <View style={ globalStyles.contentView }>
                <SectionHeader title={'Now playing'} />
                <FlatList
                    data={nowPlaying}
                    horizontal={true}
                    style={styles.flatList}
                    ItemSeparatorComponent={() => <View style={{width: 10}} />}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item+index}
                    renderItem={({item}) => (
                    <MovieView 
                        movie={item} 
                        style={styles.movieView}
                    />)}
                />
                <SectionHeader title={'Top rated'} />
                <FlatList
                    data={topRated}
                    horizontal={true}
                    style={styles.flatList}
                    ItemSeparatorComponent={() => <View style={{width: 10}} />}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item+index}
                    renderItem={({item}) => (
                    <MovieView 
                        movie={item} 
                        style={styles.movieView}
                    />)}
                />
                <SectionHeader title={'Popular'} />
                <FlatList
                    data={popular}
                    horizontal={true}
                    style={styles.flatList}
                    ItemSeparatorComponent={() => <View style={{width: 10}} />}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item+index}
                    renderItem={({item}) => (
                    <MovieView 
                        movie={item} 
                        style={styles.movieView}
                    />)}
                />
            </View>
        </SafeAreaView>
    </ScrollView>
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
        maxHeight: 530,
    },
});