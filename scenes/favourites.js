import React from "react";
import { useState } from "react";
import { View, FlatList } from "react-native";
import ColorView from "../components/backgroundGradient";
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from "../styles/global";
import { Network } from "../network/network";
import { Movie } from "../models/movie";
import MovieView from "../components/movieView";

export default function Favourites() {
    const [favourites, setFavourites] = useState([]);

    return(
<ColorView>
    <SafeAreaView style={ globalStyles.safeArea }>
        <View style={ globalStyles.contentView }>
            <FlatList
                data={favourites}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-around'}} 
                ItemSeparatorComponent={() => <View style={{height: 10}} />}
                style={[globalStyles.flatList, {paddingTop: 10}]}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => item+index}
                renderItem={({item}) => (
                    <MovieView 
                        movie={item} 
                        style={globalStyles.movieView}
                    />)}
            />
        </View>
    </SafeAreaView>
</ColorView>
    );
}