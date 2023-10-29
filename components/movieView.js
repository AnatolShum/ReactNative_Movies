import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { useState, useEffect } from "react";
import { Network } from "../network/network";
import CircleVoteView from "./circleVoveView";

export default function MovieView() {
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
            source={{ uri: Network.imageURL('/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg') }}
            />
            <View style={ styles.overLay }>
                 <CircleVoteView/> 
            </View>
            <Text style={ styles.movieTitle }>
                John Wick: Chapter 4
            </Text>
            <Text style={ styles.movieReleaseDate }>
               { formattedDate('2023-03-22') }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    movieView: {
        flex: 1,
        backgroundColor: 'black',
        position: 'relative',
    },
    movieImage: {
        width: '100%',
        height: '75%',
        borderRadius: 25,
        resizeMode: 'cover',
    },
    overLay: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: 15,
        marginTop: -40,
    },
    movieTitle: {
        color: 'white',
        fontSize: 16,
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
        paddingTop: 50,
    },
});