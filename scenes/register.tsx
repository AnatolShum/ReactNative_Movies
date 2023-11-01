import React from "react";
import { useState, useEffect } from "react";
import { View, TextInput } from "react-native";
import TitleView from "../components/titleView";
import ActionButton from "../components/actionButton";
import { globalStyles } from "../styles/global";

export default function Register() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function register() {
        console.log('Create')
    }

    function saveUserRecord(id: String) {

    }

    function validate(): Boolean {

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
                <ActionButton title={'Create account'} color={'#007AFF'} action={register}/>
            </View>
        </TitleView>
    );
}