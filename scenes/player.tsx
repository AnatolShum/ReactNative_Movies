import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import NavigationHeader from "../components/navigationHeader";

export default function PlayerView({ route, navigation }) {
    const key = route.params;
    function goBack() {
        navigation.goBack();
    };

  

    useEffect(() => {
      console.log(key);
    }, []);

    return(
        <View style={styles.container}>
            <NavigationHeader header={null} title={'Back'} action={goBack}/>
            <View style={styles.playerView}>
              
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: "black",
    },
    playerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    player: {
        alignSelf: 'stretch',
        height: 250,
    }
});