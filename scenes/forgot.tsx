import React from "react";
import { useState, useEffect } from "react";
import { View, TextInput } from "react-native";
import TitleView from "../components/titleView";
import ActionButton from "../components/actionButton";
import { globalStyles } from "../styles/global";

export default function Forgot() {
    const [email, setEmail] = useState('');

    function resetPassword() {
        console.log('Forgot')
    }

    function validate(): Boolean {

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