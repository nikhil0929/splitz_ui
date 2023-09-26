import React, { useState } from 'react';
import { View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, Alert, Text, Pressable, Keyboard, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from "expo-image-picker"


import colors from '../config/colors';
import HeadingText from '../components/HeadingText';
import GreyText from '../components/GreyText';
import TitleText from '../components/TitleText';
import ButtonText from '../components/ButtonText';
import ReceiptItem from '../components/ReceiptItem';

const ManualEntryScreen = () => {

    handleOnPress1 = () =>{
        console.log("Redo")
    }
    handleOnPress2 = () => {
        console.log("Exit")
    }

const receiptItems = [
    {
        itemId: 1,
        itemTitle: "Spaghetti",
        quantity: 1,
        price: 12.60,
    },
    {
        itemId: 2,
        itemTitle: "White Claws",
        quantity: 4,
        price: 32.00,
    },
    {
        itemId: 3,
        itemTitle: "BBQ Chicken Pizza",
        quantity: 1,
        price: 20.00,
    },
    {
        itemId: 4,
        itemTitle: "Water",
        quantity: 4,
        price: 0.00,
    },
]

    return (
        <View style={styles.container}>
           <SafeAreaView>
            <Image
                style={styles.logo}
                source={require("../assets/splitzofficiallogo.png")}>
            </Image>
            </SafeAreaView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.containerBox}>
                <View style={styles.topButtons}>
                <Pressable onPress={this.handleOnPress1}><Image source={require("../assets/redo.png")}style={styles.redoButton}></Image></Pressable>
                <Pressable onPress={this.handleOnPress2}><Image source={require("../assets/exit.png")}style={styles.exitButton}></Image></Pressable>
                </View>
        <View style={styles.newView}>
            <TitleText>Confirm your list of items:</TitleText>
            </View>
        <View>
        <Text style={styles.descriptionText}> Add new items: </Text>
        <View style={styles.itemBox1}>
            <TextInput defaultValue='(Item Name)'></TextInput>
            <TextInput defaultValue='(Quantity)' keyboardType='numeric'></TextInput>
            <TextInput style={styles.dollarText} defaultValue="$X.XX" keyboardType='numeric'></TextInput>
            <TouchableOpacity><View style={styles.addButton}><Text style={styles.addSign}>+</Text></View></TouchableOpacity>
        </View>
        <Text style={styles.descriptionText2}> Current items: </Text>
        <SafeAreaView>
        <FlatList 
            data={receiptItems}
            keyExtractor={receiptItems => receiptItems.itemId.toString()}
            scrollEnabled={true}
            renderItem={({ item }) => 
                <ReceiptItem 
                    itemTitle={item.itemTitle}
                    quantity={item.quantity}
                    price={item.price}/> } />
        </SafeAreaView>
        <SafeAreaView>
        <Text style={styles.descriptionText2}> Tip (if applicable): </Text>
        <View style={styles.tipBox}>
            <TextInput defaultValue="0.00" keyboardType='numeric' style={styles.dollarText}></TextInput>
        </View>
        <TouchableOpacity
                style={styles.primaryButton}>
                <ButtonText>Continue</ButtonText>
                </TouchableOpacity>     
                </SafeAreaView>       
        </View>
            </View>
            </TouchableWithoutFeedback> 
            </View>  
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.secondary,
        alignContent:"center",
        justifyContent:"flex-end"
    },
    logo: {
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 10,
        justifyContent:"center",
        alignContent:"center",
        width: "40%",
        height: 50,
        alignSelf:"flex-start",
    },
    containerBox: {
        flex:1,
        backgroundColor: colors.white,
        alignContent:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:30,
        paddingTop:30,
    },
    newView: {
        marginTop: 5,
        marginBottom: 25,
    },
    exitButton: {
        height: 35,
        width: 35,
        alignSelf:"flex-end",
    },
    redoButton: {
        height: 25,
        width: 25,
        alignSelf:"flex-end",
        marginRight: 20,
        marginBottom: 5,
    },
    descriptionText: {
        fontSize: 16,
    },
    descriptionText2: {
        fontSize: 16,
        marginTop: 15,
    },
    itemBox1: {
        borderRadius: 20,
        backgroundColor: "#EEEEEE",
        height: 80,
        width: 360,
        flexDirection: "row",
        marginTop: 15,
        alignSelf: "center",
        justifyContent: "space-evenly",
        alignContent: "center",
    },
    itemBox2: {
        borderRadius: 20,
        backgroundColor: "#E5F3FF",
        height: 80,
        width: 360,
        flexDirection: "row",
        marginTop: 15,
        alignSelf: "center",
        justifyContent: "space-evenly",
        alignContent: "center",
    },
    topButtons: {
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    addButton: {
        backgroundColor: colors.primary,
        borderRadius: 10,
        height: 30,
        width: 30,
        justifyContent: "center",
        alignContent: "center",
        marginTop: 25,
    },
    addSign: {
        alignSelf: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: colors.white,
    },
    dollarText: {
        fontWeight: "bold",
        fontSize: 25,
    },
    tipBox: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.black,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        width: 120,
        marginTop: 15,
        marginBottom: 15,
    },
    primaryButton: {
        backgroundColor: colors.primary,
        borderRadius:100,
        width:355,
        height:60,
        justifyContent:"center",
        alignItems:"center",
        marginBottom: 10,
    },
})

export default ManualEntryScreen;