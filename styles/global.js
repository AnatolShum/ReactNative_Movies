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
        paddingLeft: 5,
        paddingRight: 5,
    },
    searchBar: {
        height: 40,
        marginHorizontal: 10,
        backgroundColor: '#00000019',
        borderRadius: 10,
        color: '#FFFFFFB3',
        fontSize: 18,
        paddingLeft: 15,
    },
    profileSectionView: {
        width: '85%',
        paddingTop: 20,
    },
    profileTitleView: {
        backgroundColor: '#FFFFFFB3',
        borderRadius: 10,
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileHeaderTitle: {
        color: '#000000B3',
        fontSize: 16,
        fontWeight: '600',
        paddingLeft: 20,
        paddingBottom: 5
    },
    profileTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20
    },
    profileButton: {
        backgroundColor: '#FFFFFFB3',
        borderRadius: 10,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30%'
       },
    formView: {
        paddingTop: 5,
        backgroundColor: '#FFFFFFB3',
        marginHorizontal: 20,
        borderRadius: 10,
    },
    formTextInput: {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 20,
    },
    lineView: {
        height: 1,
        backgroundColor: '#8E8E9366',
        marginTop: 10,
        marginLeft: 20,
    },
    buttonTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
       },
    loadingView: {
        height: '100%',
        justifyContent: 'center',
    },
    loadingTitle: {
        color: '#00000099',
        fontSize: 16,
        marginTop: 10,
   },
   titleViewView: {
        flex: 1,
        alignItems: 'center',
    },
    titleViewTitle: {
        marginTop: 80,
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    },
    titleViewChild: {
        flex: 1,
        alignSelf: 'stretch',
        marginBottom: 20,
    },
    actionButton: {
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 20,
        marginRight: 20,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});