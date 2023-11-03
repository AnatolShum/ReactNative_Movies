import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import ColorView from "../components/backgroundGradient";
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from "../styles/global";
import { Ionicons } from '@expo/vector-icons'; 
import { FirebaseAuth, FirebaseDB } from "../FirebaseConfig";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { User, userConverter } from "../models/user";

export default function Profile() {
    const initialUser = new User('', 'User name', 'Email address', Date());
    const [user, setUser] = useState(initialUser);
    const name = 'Name';
    const email = 'Email';
    const memberSince = 'Member since';
    const [loading, setLoading] = useState(false);
    const auth = FirebaseAuth;

    function formattedDate(string) {
        let date = string.replace(/^\S+\s/, '');
        date = date.replace(/\sGMT.*/, '');
        return date;
    };

    async function fetchUser() {
        const userID = auth.currentUser.uid;
        const db = FirebaseDB;
        const ref = doc(db, "users", userID).withConverter(userConverter);
        const docSnapshot = await getDoc(ref);
        
        if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            const currentUser = new User(data.id, data.name, data.email, formattedDate(data.joined));
            setUser(currentUser);
        } else {
            console.log("No such document!");
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    async function logOut() {
        try {
           await signOut(auth);
        } catch (error) {
            alert(error);
        }
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
                    <Text style={ globalStyles.profileTitle }>{user.name}</Text>
                </View>
                <Text style={ [globalStyles.profileHeaderTitle, { paddingTop: 20 }] }>{email}</Text>
                <View style={ globalStyles.profileTitleView }>
                    <Text style={ globalStyles.profileTitle }>{user.email}</Text>
                </View>
                <Text style={ [globalStyles.profileHeaderTitle, { paddingTop: 20 }] }>{memberSince}</Text>
                <View style={ globalStyles.profileTitleView }>
                    <Text style={ globalStyles.profileTitle }>{user.joined}</Text>
                </View>
                <TouchableOpacity
                    style={ globalStyles.profileButton }
                    onPress={logOut}
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