import React, { useState } from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import { Network } from "../network/network";
import CircleVoteView from "./circleVoveView";
import { Ionicons } from '@expo/vector-icons';

export default function MovieView({ movie }) {
    const [favourite, setFavourite] = useState(false);

    function formattedDate(dateString) {
        if (!dateString) return '';

        let date = new Date(dateString);
        if (isNaN(date)) return '';

        const options = { year: 'numeric', month: 'short', day: 'numeric' };

        return date.toLocaleDateString(undefined, options);
    }

    function isFavoutite() {
        setFavourite(!favourite);
        
    }

    return(
        <View style={ styles.movieView }>
            <Image
            style={ styles.movieImage }
            source={{ uri: Network.imageURL(movie.poster) }}
            />
            <View style={ styles.heartView }>
                <TouchableOpacity onPress={isFavoutite} activeOpacity={1}>
                {favourite ? <Ionicons name="ios-heart-sharp" size={30} color="#FF2D5599"/> : 
                <Ionicons name="ios-heart-outline" size={30} color="#FF2D5599"/>}
                </TouchableOpacity>
            </View>
            <View style={ styles.overLay }>
                <CircleVoteView vote={movie.vote} /> 
            </View>
            <Text style={ styles.movieTitle } numberOfLines={2} >
                {movie.title}
            </Text>
            <Text style={ styles.movieReleaseDate }>
               { formattedDate(movie.releaseDate) }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    movieView: {
        width: 180,
        height: 450,
        backgroundColor: 'black',
        position: 'relative',
        borderRadius: 25,
    },
    movieImage: {
        width: '100%',
        height: '65%',
        borderRadius: 25,
        resizeMode: 'cover',
    },
    heartView: {
        flexDirection: 'row',
        marginTop: -280, 
        marginLeft: 15,
        paddingBottom: 200,
    },
    overLay: {
        flexDirection: 'row',
    },
    movieTitle: {
        color: 'white',
        fontSize: 16,
        height: 50,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    movieReleaseDate: {
        color: '#FFFFFFB3',
        fontSize: 16,
        marginLeft: 15,
        marginTop: 10,
    },
});