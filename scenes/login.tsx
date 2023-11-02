import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import TitleView from "../components/titleView";
import { FirebaseAuth } from "../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import ActionButton from "../components/actionButton";
import { globalStyles } from "../styles/global";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FirebaseAuth;

    function forgotPassword() {
        navigation.navigate('Forgot');
    }

    function createAnAccount() {
        navigation.navigate('Register');
    }

    async function logIn() {
        if (!validate()) return;
        
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    }

    function validate(): Boolean {
        if (!email.trim() && !password.trim()) {
            alert("Please fill in all fields.");
            return false;
        }

        if (!(email.includes('@') && email.includes('.'))) {
            alert("Please enter valid email.");
            return false;
        }

        return true
    }

    return(
       <TitleView title="Movies" color="#007AFF" justifyContent='flex-end'>
            <View style={ globalStyles.formView }>
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
                <TouchableOpacity onPress={forgotPassword}>
                    <Text style={ styles.forgotText }>Forgot password?</Text>
                </TouchableOpacity>
                <View style={ globalStyles.lineView }/>
                {loading ? 
                <ActivityIndicator color={'#FF3B30E6'} style={{marginTop: 25, marginBottom: 25}}/> : 
                <ActionButton title={'Log in'} color={'#FF3B30E6'} action={logIn}/>}
            </View>
            <TouchableOpacity 
            onPress={createAnAccount}
            style={ styles.createAccountButton }
            >
                    <Text style={ styles.createAccountText }>Create an account</Text>
                </TouchableOpacity>
       </TitleView>
    );
}

const styles = StyleSheet.create({
    forgotText: {
        color: '#00000099',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        marginLeft: 20,
    },
    createAccountButton: {
        alignItems: 'center',
        marginBottom: 20,
        flex: 0.5,
        justifyContent: 'flex-end',
    },
    createAccountText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    }, 
});