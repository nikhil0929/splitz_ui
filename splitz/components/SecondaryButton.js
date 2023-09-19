import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

function SecondaryButton({title}) {
    return (
        <View style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.white,
        borderRadius:100,
        borderWidth:2,
        borderColor: colors.primary,
        width:355,
        height:60,
        justifyContent:"center",
        alignItems:"center",
        padding:15,
    },
    text: {
        color: colors.primary,
        fontSize:20,
        fontWeight:"bold",
    }
})

export default SecondaryButton;