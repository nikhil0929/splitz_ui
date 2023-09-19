import React from 'react';
import { Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

function GreyText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: colors.grey,
        justifyContent: "center",
        alignItems:"center",
        marginTop: 5,
        marginBottom:25,
    },
});
export default GreyText;