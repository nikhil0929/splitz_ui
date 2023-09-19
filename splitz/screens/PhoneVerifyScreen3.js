import React, { useState } from 'react';
import { useRef } from 'react'
import { View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from "@react-navigation/native"
import { useRoute } from '@react-navigation/native';

import colors from '../config/colors';
import HeadingText from '../components/HeadingText';
import GreyText from '../components/GreyText';
import TitleText from '../components/TitleText';
import ButtonText from '../components/ButtonText';

const PhoneVerifyScreen3 = () => {
    const inputRef = useRef();
    const secondBox = useRef();

    const [fullName, setfullName] = useState("")
    const [userName, setuserName] = useState("")

    const allNames = fullName + ";" + userName

    const navigation = useNavigation();
    const route = useRoute();

    handleOnPress1 = () =>{
        console.log(allNames)
    }
    handleOnPress2 = () =>{
        Alert.alert("Hold Up","y r u gey?")
    }
    handleOnPress3 = () =>{
        navigation.navigate("CreateGroupScreen", {fullName});
    }
    handleAllPresses = () =>{
        this.handleOnPress1();
        this.handleOnPress2();
        this.handleOnPress3();
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
        <KeyboardAwareScrollView> 
            <HeadingText>Just some final touches!</HeadingText>
            <GreyText>Set your full name and username below:</GreyText>
            <TitleText>Your name:</TitleText>
            <View style={styles.phoneNumberBox}>
            <TextInput
                style={styles.nameInput}
                ref={inputRef}
                value={fullName}
                keyboardType="name-phone-pad"
                autoCapitalize='words'
                autoFocus={true}
                onChangeText={text=>setfullName(text)}
                onSubmitEditing={()=>{
                {secondBox.current.focus()};
                }}/>
                </View>
        <TitleText>Your username:</TitleText>
        <View style={styles.phoneNumberBox}>
            <TextInput
                style={styles.nameInput}
                ref={secondBox}
                value={userName}
                onChangeText={text=>setuserName(text)}
                keyboardType="name-phone-pad"/>
                </View>
                <TouchableOpacity
                style={styles.primaryButton} 
                onPress={this.handleAllPresses}>
                <ButtonText>Continue</ButtonText>
                </TouchableOpacity>
                </KeyboardAwareScrollView>  
            </View>
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
        flex:1,
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
        flexDirection: "row",
    },
    nameInput: {
        fontSize: 20,
        padding: 10,
        marginLeft: 5,
    },
    primaryButton: {
        backgroundColor: colors.primary,
        borderRadius:100,
        width:355,
        height:60,
        justifyContent:"center",
        alignItems:"center",
        marginTop: 20,
        marginBottom: 10,
    }
})

export default PhoneVerifyScreen3;