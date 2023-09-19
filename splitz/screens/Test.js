import React, { useState, useRef } from 'react';
import { View, StyleSheet, Image, SafeAreaView, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from 'react-native';

import { useRoute } from "@react-navigation/native"
import { useNavigation } from "@react-navigation/native"

import OTPInputField from '../components/OTPInputField';
import axios from "axios";

import colors from '../config/colors';
import HeadingText from '../components/HeadingText';
import GreyText from '../components/GreyText';
import ButtonText from '../components/ButtonText';

const Test = () => {

    const [code, setCode] = useState("")
    const [pinReady, setPinReady] = useState(false);
    const MAX_CODE_LENGTH = 5;

    sendNewCode = () => {
        console.log("12345")
    }
    handleAllPresses = () => {
        console.log({code})
    }

    return (
        <View style={styles.container}>
           <SafeAreaView>
            <Image
                style={styles.logo}
                source={require("../assets/splitzofficiallogo.png")}>
            </Image>
            </SafeAreaView> 
        <Pressable style={styles.verificationBox} onPress={Keyboard.dismiss}>
            <HeadingText>Enter the code we just sent!</HeadingText>
            <GreyText>We texted you at</GreyText>
            <OTPInputField
            setPinReady={setPinReady}
            code={code}
            setCode={setCode}
            maxLength={MAX_CODE_LENGTH}>
            </OTPInputField>
            <View style={{
                flexDirection:"row",
            }}>
            <GreyText>Didn't get anything?</GreyText>
            <TouchableOpacity
            onPress={this.sendNewCode}>
            <Text style={styles.againText}>Get another code here</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.primaryButton} 
                onPress={this.handleAllPresses}
                disabled= {!pinReady}>
                <ButtonText>Continue</ButtonText>
                </TouchableOpacity>
        </Pressable>    

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
        marginBottom: 45,
        justifyContent:"center",
        alignContent:"center",
        width: "70%",
        height: 100,
        alignSelf:"center",
    },
    verificationBox: {
        flex:0.90,
        backgroundColor: colors.white,
        alignContent:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:30,
        paddingTop:40,
    },
    numberBox: {
        borderWidth:2,
        borderColor: "#CFCFCF",
        borderRadius: 10,
        width:62,
        height:72,
        marginBottom:15,
        justifyContent:"center",
        alignItems: "center",
        margin:10,
    },
    againText: {
        color: colors.primary,
        fontSize: 16,
        marginTop:5,
        marginLeft:8,
    },
    numberInput: {
        fontSize: 30,
    },
    primaryButton: {
        backgroundColor: colors.primary,
        borderRadius:100,
        width:355,
        height:60,
        justifyContent:"center",
        alignItems:"center",
        marginTop: 10,
        marginBottom: 5,
    },
    hiddenBox: {
        position: "absolute",
        height:0,
        width:0,
        opacity:0,
    }
})
export default Test;