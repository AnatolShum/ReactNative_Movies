import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SectionHeader({ title }) {
    return(
        <View style={ styles.view }>
            <MaterialCommunityIcons name="power-on" size={35} color="yellow" />
            <Text style={ styles.title }>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: '600',
    }
});