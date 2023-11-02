import React from "react";
import { useState } from "react";
import { View, TextInput, ActivityIndicator } from "react-native";
import TitleView from "../components/titleView";
import ActionButton from "../components/actionButton";
import { globalStyles } from "../styles/global";
import { FirebaseAuth, FirebaseDB } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { User } from "../models/user";
import { userConverter } from "../models/user";
import { setDoc, doc } from "firebase/firestore";

export default function Register() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FirebaseAuth;

    async function register() {
        if (!validate()) return;
        
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const id = response.user.uid;
            if (id) saveUserRecord(id);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    }

    async function saveUserRecord(id: String) {
        const user = new User(id, userName, email, Date());
        const db = FirebaseDB;
        const ref = doc(db, "users", String(id)).withConverter(userConverter);
        try {
            await setDoc(ref, user);
        } catch (error) {
            console.error(error);
        }
    }

    function validate(): Boolean {
        if (!userName.trim() && !email.trim() && !password.trim()) {
            alert("Please fill in all fields.");
            return false;
        }

        if (!(email.includes('@') && email.includes('.'))) {
            alert("Please enter valid email.");
            return false;
        }

        if (password.length < 6) {
            alert("Minimum password length is 6 characters.");
            return false;
        }

        return true
    }

    return(
        <TitleView title={'Register'} color={'#34C759'} justifyContent='center'>
            <View style={ globalStyles.formView }>
            <   TextInput 
                    value={userName}
                    placeholder="Name" 
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={ globalStyles.formTextInput }
                    onChangeText={(value) => setUserName(value)}
                />
                <View style={ globalStyles.lineView }/>
                <TextInput 
                    value={email}
                    placeholder="Email address" 
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={ globalStyles.formTextInput }
                    onChangeText={(value) => setEmail(value)}
                />
                <View style={ globalStyles.lineView }/>
                <TextInput 
                value={password}
                secureTextEntry={true}
                placeholder="Password" 
                autoCapitalize='none'
                autoCorrect={false}
                style={ globalStyles.formTextInput }
                onChangeText={(value) => setPassword(value)}
                />
                <View style={ globalStyles.lineView }/>
                {loading ? 
                <ActivityIndicator color={'#007AFF'} style={{marginTop: 25, marginBottom: 25}}/> : 
                <ActionButton title={'Create account'} color={'#007AFF'} action={register}/>}
            </View>
        </TitleView>
    );
}