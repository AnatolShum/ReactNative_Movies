import React from "react";
import { useState } from "react";
import { View, TextInput, FlatList, TouchableOpacity } from "react-native";
import ColorView from "../components/backgroundGradient";
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from "../styles/global";
import { Network } from "../network/network";
import { Movie } from "../models/movie";
import MovieView from "../components/movieView";

export default function Search({ navigation }) {
    const [search, setSearch] = useState([]);

    function fetchSearch(query) {
        Network.fetchData({ type: Network.Argument.search, query: query }, (error, data) => {
            if (error) {
                console.error(error);
            } else {
                const searchMovies = data.results.map(movieData => new Movie(movieData));
                setSearch(searchMovies);
            }
        });
    };

    return(
<ColorView>
    <SafeAreaView style={ globalStyles.safeArea }>
        <View style={globalStyles.contentView}>
            <TextInput
                placeholder="Search"
                clearButtonMode="always"
                style={ globalStyles.searchBar }
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(query) => fetchSearch(query)}
            />
            <FlatList
                data={search}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-around'}} 
                ItemSeparatorComponent={() => <View style={{height: 10}} />}
                style={[globalStyles.flatList, {paddingTop: 10}]}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => item+index}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('MovieDetailView', item)}>
                    <MovieView 
                        movie={item} 
                        style={globalStyles.movieView}
                    />
                    </TouchableOpacity>)}
            />
        </View>
    </SafeAreaView>
</ColorView>
    );
}
