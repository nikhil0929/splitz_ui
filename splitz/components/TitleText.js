import React from 'react';
import { Text, StyleSheet } from 'react-native';

function TitleText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems:"center",
    },
});
export default TitleText;