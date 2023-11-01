import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function TitleView({title, color, justifyContent, children}) {
    return(
        <View style={[globalStyles.titleViewView, { backgroundColor: color }]}>
            <Text style={ globalStyles.titleViewTitle }>{title}</Text>
            <View style={[globalStyles.titleViewChild, {justifyContent: justifyContent}]}>
                { children }
            </View>
        </View>
    );
}