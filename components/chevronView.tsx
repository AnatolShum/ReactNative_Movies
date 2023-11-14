import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function ChevronView({ chevron, action}) {
    return(
        <TouchableOpacity style={styles.view} onPress={action}>
            <Ionicons name={chevron} size={25} color="white" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#0000004C',
        borderRadius: 5,
        width: 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#FFFFFF99'
    }
});