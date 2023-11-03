import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList, ScrollView } from "react-native";
import CircleVoteView from "../components/circleVoveView";
import NavigationHeader from "../components/navigationHeader";
import { globalStyles } from "../styles/global";
import { Network } from "../network/network";
import { Ionicons } from '@expo/vector-icons';
import { Photos } from "../models/photos";

export default function MovieDetailView({ route, navigation }) {
    const item = route.params;
    const [favourite, setFavourite] = useState(false);
    const initialPhotos = new Photos("/pbrkL804c8yAv3zBZR4QPEafpAR.jpg");
    const [photos, setPhotos] = useState([initialPhotos]);

    function titleLength(): Object {
        if (item.title.length < 25) return({flexDirection: 'row'});
    };
    
    function isFavoutite() {
        setFavourite(!favourite);
    };

    function goBack() {
        navigation.goBack();
    };

    function fetchPhotos(id) {
        Network.fetchData({ type: Network.Argument.photos, id: id }, (error, data) => {
            if (error) {
                console.error(error);
            } else {
                const fetchedPhotos = data.backdrops.map(photosData => new Photos(photosData));
                setPhotos(fetchedPhotos);
            }
    });
    }

    useEffect(() => {
        fetchPhotos(item.id);
    }, []);

    return(
        <View style={ styles.container }>
            <ScrollView style={{width: '100%'}}>
            
            <Image style={styles.detailImage} source={{uri: Network.imageURL(item.backdrop)}}/>
            <View style={{paddingTop: 50}}>
                <View style={styles.heartButton}>
                    <NavigationHeader header={null} title={'Movies'} action={goBack}/>
                    <TouchableOpacity onPress={isFavoutite}>
                        {favourite ? <Ionicons name="ios-heart-sharp" size={25} color="#FF2D5599"/> : 
                        <Ionicons name="ios-heart-outline" size={25} color="#FF2D5599"/>}
                    </TouchableOpacity>
                </View>
            </View>

            <View style={[styles.movieTitleView, titleLength()]}>
                <Text style={styles.movieTitle}>{item.title}</Text>
                <Text style={styles.moviewRelease}>({item.releaseDate})</Text>
            </View>

            <View style={styles.scoreView}>
                <CircleVoteView vote={item.vote}/>
                <Text style={styles.verticalBar}>Score</Text>
                <Text style={styles.verticalBar}>|</Text>

                <TouchableOpacity style={styles.trailerButton}>
                    <Ionicons name="ios-play" size={20} color="white" />
                    <Text style={styles.trailerTitle}>Trailer</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.informationView}>
                <Text style={styles.movieTitle}>Overview</Text>
                <Text style={styles.descriptionTitle}>{item.overview}</Text>
                <Text style={[styles.movieTitle, {paddingTop: 20}]}>Photos</Text>
                <FlatList 
                data={photos}
                horizontal={true}
                ItemSeparatorComponent={() => <View style={{width: 12}} />}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <TouchableOpacity>
                        <Image style={styles.photos} source={{uri: Network.imageURL(item.path)}}/>
                    </TouchableOpacity>
                )}
                />
            </View>
            
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    detailImage: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        position: 'absolute',
    },
    heartButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingRight: 20,
    },
    movieTitleView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 230
    },
    movieTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
    moviewRelease: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
    },
    scoreView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20
    },
    verticalBar: {
        color: 'white',
        fontSize: 20
    },
    trailerButton: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    trailerTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        paddingLeft: 5,
    },
    informationView: {
        paddingLeft: 15,
    },
    descriptionTitle: {
        color: 'white',
        fontSize: 17,
        fontWeight: '500',
        paddingTop: 20,
    },
    photos: {
        height: 90,
        width: 170,
        resizeMode: 'cover',
        marginBottom: 10,
    },
});