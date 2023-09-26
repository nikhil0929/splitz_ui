import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

function ReceiptItem({itemTitle, quantity, price}) {
    return (
        <View style={styles.itemBox2}>
            <Text style={styles.itemTitle}>{itemTitle}</Text>
            <Text style={{alignSelf:"center"}}>({quantity})</Text>
            <Text style={styles.dollarText}>{price}</Text>
            <Image style={styles.editButton}source={require("../assets/edit.png")}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    itemBox2: {
        borderRadius: 20,
        backgroundColor: "#E5F3FF",
        height: 75,
        width: 360,
        flexDirection: "row",
        marginTop: 15,
        alignSelf: "center",
        justifyContent: "space-evenly",
        alignContent: "center",
    },
    dollarText: {
        fontWeight: "bold",
        fontSize: 25,
        alignSelf: "center"
    },
    editButton: {
        height: 30,
        width: 30,
        alignSelf: "center"
    },
    itemTitle: {
        fontSize: 14,
        alignSelf: "center",
        fontWeight: "bold",
    },
})

export default ReceiptItem;