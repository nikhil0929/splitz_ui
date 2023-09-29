import React, { useState } from 'react';
import { useRef } from 'react'
import { View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useRoute } from "@react-navigation/native"
import { useNavigation } from "@react-navigation/native"

import axios from "axios";

import colors from '../config/colors';
import HeadingText from '../components/HeadingText';
import GreyText from '../components/GreyText';
import TitleText from '../components/TitleText';
import ButtonText from '../components/ButtonText';

const PhoneVerifyScreen1 = () => {
    const [number, setNumber] = useState('');
    const inputRef = useRef();
    const navigation = useNavigation();
    
    handleOnPress1 = () =>{
        axios
        .post("http://3.14.255.133:8000/user/initialize-verification",
        {
            "phone_number": number
        })
        .then(res=> {
            console.log(res);
            navigation.navigate("PhoneVerifyScreen2", {paramKey: number,})
        })
        .catch(error => {;
            console.log(error)});

    }
    handleAllPresses = () =>{
        this.handleOnPress1();
    }

    return (
        <View style={styles.container}>
           <SafeAreaView>
            <Image
                style={styles.logo}
                source={require("../assets/splitzofficiallogo.png")}>
            </Image>
            </SafeAreaView> 
        <View style={styles.verificationBox}>
            <HeadingText>What's your phone number?</HeadingText>
            <GreyText>We'll text you a confirmation code after!</GreyText>
            <TitleText>Phone Number:</TitleText>
            <View style={styles.phoneNumberBox}>
                <View style={{
                    flex:1,
                    flexDirection:"row",
                    padding: 15,}}>
            <TextInput
                style={styles.phoneNumberInput}
                defaultValue='+'
                onChangeText={(number) => setNumber(number)}
                textContentType='telephoneNumber'
                keyboardType="phone-pad"
                ref={inputRef}
                onLayout={()=>inputRef.current.focus()}/>
                </View>
            </View>
            <TouchableOpacity
                style={styles.primaryButton} 
                onPress={this.handleAllPresses}>
                <ButtonText>Continue</ButtonText>
                </TouchableOpacity>
        </View>    

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        justifyContent:"flex-end",
        flex: 1,
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
    phoneNumberBox: {
        borderWidth:2,
        borderColor: "#CFCFCF",
        borderRadius: 10,
        width:350,
        height:60,
        marginTop:25,
        marginBottom:30,
        flexDirection: "row"
    },
    phoneNumberInput: {
        fontSize: 25,
    },
    primaryButton: {
        backgroundColor: colors.primary,
        borderRadius:100,
        width:355,
        height:60,
        justifyContent:"center",
        alignItems:"center",
        marginBottom: 10,
    }
})

export default PhoneVerifyScreen1;