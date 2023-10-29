import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ColorView(props) {
return(
<LinearGradient 
    colors={['#007AFFE6', '#32ADE6B3', '#32ADE67F']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.linerGradient}
>
    { props.children }
</LinearGradient>
);
}

const styles = StyleSheet.create({
    linerGradient: {
        flex: 1
    },
});