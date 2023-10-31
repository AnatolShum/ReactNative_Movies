import { StyleSheet, Platform } from "react-native";

export const globalStyles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    contentView: {
        backgroundColor: 'transparent',
        paddingTop: Platform.OS === 'ios' ? 40 : 50,
    },
    movieView: {
       
    },
    flatList: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    searchBar: {
        height: 44,
        marginHorizontal: 10,
        backgroundColor: '#00000019',
        borderRadius: 10,
        color: '#FFFFFFB3',
        fontSize: 18,
        paddingLeft: 15,
    },
});