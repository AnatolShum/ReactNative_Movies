import React from "react";
import { useState } from "react";
import { View, TextInput } from "react-native";
import TitleView from "../components/titleView";
import ActionButton from "../components/actionButton";
import { globalStyles } from "../styles/global";
import { sendPasswordResetEmail } from "firebase/auth";
import { FirebaseAuth } from "../FirebaseConfig";

export default function Forgot({ navigation }) {
    const [email, setEmail] = useState('');
    const auth = FirebaseAuth;

    async function resetPassword() {
        if (!validate()) return;
        let error = null;
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (err) {
            alert(err);
            error = err;
        } finally {
            if (!error) navigation.popToTop();
        }
    }

    function validate(): Boolean {
        if (!email.trim()) {
            alert("Please fill in email address.");
            return false;
        }

        if (!(email.includes('@') && email.includes('.'))) {
            alert("Please enter valid email.");
            return false;
        }
        
        return true
    }
    return(
        <TitleView title="Lost password" color="#FF9500" justifyContent='center'>
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
                <ActionButton title={'Send password reset'} color={'#FF2D55E6'} action={resetPassword}/>
            </View>
        </TitleView>
    );
}