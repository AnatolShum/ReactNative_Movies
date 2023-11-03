import React, { useEffect, useState } from "react";
import {StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function NavigationHeader({header, title, action}) {
    const [isHeader, setHeader] = useState(false);
    const [isTitle, setTitle] = useState(false);

    function checkHeader(): Boolean {
        if (header === undefined || header === null) return false;
        return true;
    }

    function checkTitle(): Boolean {
        if (title === undefined || title === null) return false;
        return true;
    }
    useEffect(() => {
       if (checkHeader()) {
            setHeader(true);
       }
       if (checkTitle()) {
            setTitle(true);
       }
    }, []);

    return(
        <View style={styles.container}>

            {isHeader ?
            <View style={styles.titleView}>
                <Text style={styles.title}>Header</Text>
            </View> : <></>}

            {isTitle ? 
            <TouchableOpacity onPress={action}>
            <View style={styles.touchableView}>
                <Ionicons name="ios-chevron-back" size={25} color="blue" />
                <Text style={styles.touchableTitle}>Movies</Text>
            </View>
            </TouchableOpacity> : <></>}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    titleView: {
        justifyContent: 'center',
        paddingLeft: 15,
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '700',
    },
    touchableView: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    touchableTitle: {
        color: 'blue',
        fontSize: 18,
    }
});