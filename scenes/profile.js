import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import ColorView from "../components/backgroundGradient";
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from "../styles/global";
import { Ionicons } from '@expo/vector-icons'; 

export default function Profile() {
    const [user, setUser] = useState(null);

    const name = 'Name';
    const [userName, setUserName] = useState('User Name');

    const email = 'Email';
    const [userEmail, setUserEmail] = useState('User Email');

    const memberSince = 'Member since';
    const [userSince, setUserSince] = useState('Date');

    const [loading, setLoading] = useState(true);

    function signOut() {
        console.log('Button tapped');
    };

    if (loading) {
        return(
<ColorView>
    <SafeAreaView style={ globalStyles.safeArea }>
        <View style={ [globalStyles.contentView, { alignItems: 'center' }] }>
            <View style={ globalStyles.loadingView }>
                <ActivityIndicator size={'small'} color={'#00000099'} />
                <Text style={ globalStyles.loadingTitle }>Loading...</Text>
            </View>
        </View>
    </SafeAreaView>
</ColorView>
        );
    } else {
        return(
<ColorView>
    <SafeAreaView style={ globalStyles.safeArea }>
        <View style={ [globalStyles.contentView, { alignItems: 'center' }] }>
            <Ionicons name="ios-person-circle-outline" size={100} color="#0000004C" />
            <View style={ globalStyles.profileSectionView }>
                <Text style={ globalStyles.profileHeaderTitle }>{name}</Text>
                <View style={ globalStyles.profileTitleView }>
                    <Text style={ globalStyles.profileTitle }>{userName}</Text>
                </View>
                <Text style={ [globalStyles.profileHeaderTitle, { paddingTop: 20 }] }>{email}</Text>
                <View style={ globalStyles.profileTitleView }>
                    <Text style={ globalStyles.profileTitle }>{userEmail}</Text>
                </View>
                <Text style={ [globalStyles.profileHeaderTitle, { paddingTop: 20 }] }>{memberSince}</Text>
                <View style={ globalStyles.profileTitleView }>
                    <Text style={ globalStyles.profileTitle }>{userSince}</Text>
                </View>
                <TouchableOpacity
                    style={ globalStyles.profileButton }
                    onPress={signOut}
                >
                    <Text style={ globalStyles.buttonTitle }>Sign out</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
</ColorView>
        );
    }
}

const styles = StyleSheet.create({
   
});