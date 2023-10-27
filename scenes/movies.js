import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import ColorView from "../reusableViews/backgroundGradient";
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from "../styles/global";

export default function Movies() {
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