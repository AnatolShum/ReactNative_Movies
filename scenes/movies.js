import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ColorView from "../components/backgroundGradient";
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from "../styles/global";
import { Network } from "../network/network";

export default function Movies() {
    const data = Network.fetchData({ type: Network.Argument.movie, id: 603692 }, (error, data) => {
        if (error) {
            console.error(error);
        } else { 
            console.log(data); 
        }
    });
return(
<ColorView>
    <SafeAreaView style={ globalStyles.safeArea }>
        <View style={ globalStyles.contentView }>
            <Text style={ styles.textStyle }>Home screen</Text>
        </View>
    </SafeAreaView>
</ColorView>
);
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'white',
    },
});