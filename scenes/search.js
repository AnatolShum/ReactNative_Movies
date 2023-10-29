import React from "react";
import { View, Text } from "react-native";
import ColorView from "../components/backgroundGradient";
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from "../styles/global";

export default function Search() {
    return(
<ColorView>
    <SafeAreaView style={ globalStyles.safeArea }>
        <View style={ globalStyles.contentView }>
            <Text>Search screen</Text>
        </View>
    </SafeAreaView>
</ColorView>
    );
}