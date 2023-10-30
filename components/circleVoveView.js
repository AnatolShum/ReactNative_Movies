import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CircleVoteView({ vote }) {
    function setColor(vote) {
            if (vote < 3) {
                return 'purple';
            } else if (vote < 5) {
                return 'red';
            } else if (vote < 6) {
                return 'orange';
            } else if (vote < 7) {
                return 'yellow';
            } else if (vote < 10) {
                return 'green';
            } else {
                return 'grey';
            }
    }

    const strokeColor = setColor(vote);
    const radius = 35;
    const circleCircumference = 2 * Math.PI * radius;
    const strokeDashoffset = circleCircumference * (1 - vote / 10);

    return(
        <View style={ styles.circleView }>
            <Svg width={100} height={100}>
                <G rotation="-90" origin="50, 50">
                <Circle
                    cx={'50%'}
                    cy={'50%'}
                    stroke={'grey'}
                    strokeWidth={10}
                    r={radius}
                    />
                <Circle
                    cx={'50%'}
                    cy={'50%'}
                    stroke={strokeColor}
                    strokeOpacity={0.7}
                    strokeLinecap="round"
                    strokeWidth={6}
                    r={radius}
                    fill={'transparent'}
                    strokeDasharray={ circleCircumference }
                    strokeDashoffset={ strokeDashoffset }
                    />
                </G>
            </Svg>
            <View style={[
                    StyleSheet.absoluteFillObject,
                    styles.textStarContainer,
                ]}>
                <Ionicons name='ios-star' color={'yellow'} size={20} /> 
                <TextInput
                    underlineColorAndroid='transparent'
                    value={vote.toFixed(1)}
                    editable={false}
                    style={ styles.textInputStyle }
            />
            </View>
                       
        </View>
    );
}

const styles = StyleSheet.create({
    circleView: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    svg: {
        position: 'absolute',
    },
    textStarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputStyle: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFFB3',
        paddingLeft: 5,
    }
});