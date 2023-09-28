import React, { useState } from 'react';
import { useRef } from 'react'
import { View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from '../config/colors';
import HeadingText from '../components/HeadingText';
import GreyText from '../components/GreyText';
import TitleText from '../components/TitleText';
import ButtonText from '../components/ButtonText';

const CreateGroupScreen = () => {
  
    const inputRef = useRef();
    const secondBox = useRef();

    const [fullGroupName, setFullGroupName] = useState("")
    const [password, setPassword] = useState("")

    const newGroupInfo = fullGroupName + ";" + password

    handleOnPress1 = () =>{
        console.log(newGroupInfo)
    }
    handleOnPress2 = () =>{
        Alert.alert("Hold Up","y r u gey?",
        [
            {text: "bcuz"},
            {text: "idk"}
        ],
        )
    }
    handleAllPresses = () =>{
        this.handleOnPress1();
        this.handleOnPress2();
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
            <View 
            flexDirection="row"
            alignItems="center"
            justifyContent="center">
            <TouchableOpacity style={styles.clickBox}>
                <Text style={styles.mainText}>Create Group</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.otherBox}>
                <Text style={styles.otherText}>Join Group</Text>
            </TouchableOpacity>
            </View>
            <HeadingText>Let's get a new group started!</HeadingText>
            <GreyText>Create one first, then add in bills.</GreyText>
            <TitleText>Group Name:</TitleText>
            <View style={styles.phoneNumberBox}>
            <TextInput
                style={styles.nameInput}
                ref={inputRef}
                value={fullGroupName}
                keyboardType="ascii-capable"
                autoCapitalize='words'
                onChangeText={text=>setFullGroupName(text)}
                onSubmitEditing={()=>{
                {secondBox.current.focus()};
                }}/>
                </View>
        <TitleText>Set a password:</TitleText>
        <View style={styles.phoneNumberBox}>
            <TextInput
                style={styles.nameInput}
                ref={secondBox}
                value={password}
                placeholder='(Optional)'
                onChangeText={text=>setPassword(text)}
                keyboardType="ascii-capable"
                secureTextEntry={true}/>
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
        backgroundColor: colors.secondary,
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
    },
    clickBox: {
        width:130,
        height: 40,
        backgroundColor: colors.secondary,
        borderRadius: 100,
        justifyContent: "center",
        alignItems:'center',
        margin: 5,
        marginBottom: 25,
        color: colors.white,
        fontWeight: "bold",
    },
    otherBox: {
        width:130,
        height: 40,
        backgroundColor: "transparent",
        borderRadius: 100,
        justifyContent: "center",
        alignItems:'center',
        margin: 5,
        marginBottom: 25,
    },
    mainText: {
        fontSize:16,
        color: colors.white,
        fontWeight: "bold",
    },
    otherText: {
        fontSize:16,
        color: colors.secondary,
        fontWeight: "bold",
    },
})

export default CreateGroupScreen;