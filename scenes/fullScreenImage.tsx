import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Network } from "../network/network";
import NavigationHeader from "../components/navigationHeader";
import ChevronView from "../components/chevronView";

export default function ImageView({ route, navigation}) {
    const item = route.params.item;
    const photos = route.params.photos;
    const [path, setPath] = useState(item.path);
    const [photoIndex, setPhotoIndex] = useState(1);

    useEffect(() => {
       getImageIndex();
    }, []);

    function getImageIndex() {
        photos.forEach((element, index) => {
            if (element.path === path) {
                setPhotoIndex(index + 1);
            }
        });
    };

    function newPath(index) {
        const newPath = photos[index - 1].path;
        setPath(newPath);
    };

    function goBack() {
        navigation.goBack();
    };

    function previousPhoto() {
        let index: number;
        if (photoIndex > 1) {
            index = photoIndex - 1;
            setPhotoIndex(index);
            newPath(index);
        } else {
            index = photos.length;
            setPhotoIndex(index);
            newPath(index);
        }
    };

    function nextPhoto() {
        let index: number;
        if (photoIndex < photos.length) {
            index = photoIndex + 1;
            setPhotoIndex(index);
            newPath(index);
        } else {
            index = 1;
            setPhotoIndex(index);
            newPath(index);
        }
    };

    return(
        <View style={{flex: 1, paddingTop: 50, justifyContent: 'center', backgroundColor: '#000000E6'}}>
            <View style={styles.headerView}>
            <NavigationHeader header={null} title={'Back'} action={goBack}/>
            <Text style={styles.textCount}>{photoIndex} of {photos.length}</Text>
            </View>
            <View style={ styles.view }>
                <Image style={ styles.fullImage } source={{uri: Network.imageURL(path)}} />
                <View style={styles.chevronsView}>
                    <ChevronView chevron={"ios-chevron-back"} action={previousPhoto}/>
                    <ChevronView chevron={"ios-chevron-forward"} action={nextPhoto}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullImage: {
        width: '100%',
        height: 230,
        resizeMode: 'cover',
        position: 'absolute',
    },
    chevronsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 30,
        marginTop: 100,
    }, 
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textCount: {
        color: '#FFFF00CC',
        fontSize: 18,
        paddingRight: 10,
    }
});