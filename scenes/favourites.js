import React from "react";
import { View, Text } from "react-native";
import ColorView from "../reusableViews/backgroundGradient";
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from "../styles/global";

export default function Favourites() {
    return(
<ColorView>
    <SafeAreaView style={ globalStyles.safeArea }>
        <View style={ globalStyles.contentView }>
            <Text>Favourites screen</Text>
        </View>
    </SafeAreaView>
</ColorView>
    );
}