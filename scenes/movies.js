import React from "react";
import { useState, useEffect } from "react";
import { TouchableOpacity, View, FlatList, ScrollView } from "react-native";
import ColorView from "../components/backgroundGradient";
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from "../styles/global";
import { Network } from "../network/network";
import { Movie } from "../models/movie";
import MovieView from "../components/movieView";
import SectionHeader from "../components/sectionHeader";
import NavigationHeader from "../components/navigationHeader";

export default function Movies({ navigation }) {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [nowPlayingPage, setNowPlayingPage] = useState(1);

    const [topRated, setTopRated] = useState([]);
    const [topRatedPage, setTopRatedPage] = useState(1);

    const [popular, setPopular] = useState([]);
    const [popularPage, setPopularPage] = useState(1);

    let newPage;

    function fetchNowPlaying(page) {
        Network.fetchData({ type: Network.Argument.nowPlaying, page: page }, (error, data) => {
            if (error) {
                console.error(error);
            } else { 
                const newMovies = data.results.map(movieData => new Movie(movieData));
                if (nowPlaying === 'undefined' || nowPlaying.length === 0) {
                    setNowPlaying(newMovies);
                } else {
                    setNowPlaying(prevMovies => [...prevMovies, ...newMovies]);
                }
             }
         });
    };

    function fetchTopRated(page) {
        Network.fetchData({ type: Network.Argument.topRated, page: page }, (error, data) => {
            if (error) {
                console.error(error);
            } else {
                const newMovies = data.results.map(movieData => new Movie(movieData));
                if (topRated === 'undefined' || topRated.length === 0) {
                    setTopRated(newMovies);
                } else {
                    setTopRated(prevMovies => [...prevMovies, ...newMovies]);
                }
            }
        });
    };

    function fetchPopular(page) {
        Network.fetchData({ type: Network.Argument.popular, page: page }, (error, data) => {
            if (error) {
                console.error(error);
            } else {
                const newMovies = data.results.map(movieData => new Movie(movieData));
                if (popular === 'undefined' || popular.length === 0) {
                    setPopular(newMovies);
                } else {
                    setPopular(prevMovies => [...prevMovies, ...newMovies]);
                }
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
                <NavigationHeader header={'Movies'} title={null} action={null}/>
                <SectionHeader title={'Now playing'} />
                <FlatList
                    data={nowPlaying}
                    horizontal={true}
                    style={globalStyles.flatList}
                    ItemSeparatorComponent={() => <View style={{width: 10}} />}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item+index}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => navigation.navigate('MovieDetailView', item)}>
                    <MovieView 
                        movie={item} 
                        style={globalStyles.movieView}
                    />
                    </TouchableOpacity>)}
                    onEndReachedThreshold={2}
                    onEndReached={({ distanceFromEnd }) => {
                        if (distanceFromEnd >= 0) {
                            newPage = nowPlayingPage + 1;
                            setNowPlayingPage(newPage);
                            fetchNowPlaying(newPage);
                        }
                    }}
                />
                <SectionHeader title={'Top rated'} />
                <FlatList
                    data={topRated}
                    horizontal={true}
                    style={globalStyles.flatList}
                    ItemSeparatorComponent={() => <View style={{width: 10}} />}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item+index}
                    renderItem={({item}) => (
                    <MovieView 
                        movie={item} 
                        style={globalStyles.movieView}
                    />)}
                    onEndReachedThreshold={2}
                    onEndReached={({ distanceFromEnd }) => {
                        if (distanceFromEnd >= 0) {
                            newPage = topRatedPage + 1;
                            setTopRatedPage(newPage);
                            fetchTopRated(newPage);
                        }
                    }}
                />
                <SectionHeader title={'Popular'} />
                <FlatList
                    data={popular}
                    horizontal={true}
                    style={globalStyles.flatList}
                    ItemSeparatorComponent={() => <View style={{width: 10}} />}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item+index}
                    renderItem={({item}) => (
                    <MovieView 
                        movie={item} 
                        style={globalStyles.movieView}
                    />)}
                    onEndReachedThreshold={2}
                    onEndReached={({ distanceFromEnd }) => {
                        if (distanceFromEnd >= 0) {
                            newPage = popularPage + 1;
                            setPopularPage(newPage);
                            fetchPopular(newPage);
                        }
                    }}
                />
            </View>
        </SafeAreaView>
    </ScrollView>
</ColorView>
);
}
