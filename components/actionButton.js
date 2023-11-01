import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function ActionButton({ title, color, action }) {
    return(
        <TouchableOpacity 
            onPress={action}
            style={[globalStyles.actionButton, {backgroundColor: color}]}
        >
            <Text style={ globalStyles.actionText }>{title}</Text>
        </TouchableOpacity>
    );
}