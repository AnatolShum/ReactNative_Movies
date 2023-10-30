import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { Network } from "../network/network";
import CircleVoteView from "./circleVoveView";

export default function MovieView({ movie }) {
    function formattedDate(dateString) {
        if (!dateString) return '';

        let date = new Date(dateString);
        if (isNaN(date)) return '';

        const options = { year: 'numeric', month: 'short', day: 'numeric' };

        return date.toLocaleDateString(undefined, options);
    }
    return(
        <View style={ styles.movieView }>
            <Image
            style={ styles.movieImage }
            source={{ uri: Network.imageURL(movie.poster) }}
            />
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
    overLay: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: -40,
    },
    movieTitle: {
        color: 'white',
        fontSize: 16,
        height: 50,
        fontWeight: 'bold',
        paddingLeft: 15,
        paddingTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    movieReleaseDate: {
        color: '#FFFFFFB3',
        fontSize: 16,
        paddingLeft: 15,
        paddingTop: 10,
    },
});