import React from 'react';
import { Text, StyleSheet } from 'react-native';

function HeadingText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems:"center",
    },
});
export default HeadingText;