import React from "react";
import { StyleSheet, Platform } from "react-native";

export const globalStyles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    contentView: {
        backgroundColor: 'transparent',
        paddingTop: Platform.OS === 'ios' ? 40 : 50,
        flex: 1
    },
});