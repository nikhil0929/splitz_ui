import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, Alert, Text, Pressable, Keyboard, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from '../config/colors';
import TitleText from '../components/TitleText';
import ButtonText from '../components/ButtonText';
import Profile from '../components/Profile';
import UserTotals from '../components/UserTotals';
import ButtonText2 from '../components/ButtonText2';
import HeadingText from '../components/HeadingText';

import Bill from '../components/Bill';

const ManageViewScreen1 = () => {
    
    const userTotals = [
        {
          userId: 1,
          userName: "Sarang Ambalakkat",
          userTotal: parseFloat("101.65"),
          userColor: "#BA4BEF",
        },
        {
            userId: 2,
            userName: "Nikhil Aggarwal",
            userTotal: parseFloat("105.30"),
            userColor:"#6F8DF5",
          },
          {
            userId: 3,
            userName: "Charles Gutcho",
            userTotal: parseFloat("104.61"),
            userColor:"#FFDF8C",
          },
          {
            userId: 4,
            userName: "Kyle Yun",
            userTotal: parseFloat("110.29"),
            userColor:"#FF9473",
          },
          {
            userId: 5,
            userName: "Raymond Dinh",
            userTotal: parseFloat("131.31"),
            userColor:"#6B72AB",
          },
          {
            userId: 6,
            userName: "Tiffany Yau",
            userTotal: parseFloat("0.00"),
            userColor:"#6D1ED4",
          },
      ];

      const totalAmount = userTotals.reduce((acc, user) => acc + parseFloat(user.userTotal), 0);
      const formattedTotals = totalAmount.toFixed(2);


      const groupID = "JK76L1"
      const groupNameInputRef = useRef(null);
  
      return (
        <View style={styles.container}>
            <SafeAreaView>
                <Image style={styles.logo} source={require("../assets/splitzofficiallogo.png")}></Image>
            </SafeAreaView>
            <View style={styles.containerBox}>
            <View 
            style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop: 10}}>
            <TouchableOpacity style={styles.clickBox}>
                <Text style={styles.mainText}>Bills</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.otherBox}>
                <Text style={styles.otherText}>Groups</Text>
            </TouchableOpacity>
            </View>
            <View style={{justifyContent:"center", alignContent: "center", alignSelf: "center"}}>
            <View>
              <Text></Text>
            </View>
            <View>
              <Text></Text>
            </View>
            </View>
            </View>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.secondary,
      flex: 1,
    },
    logo: {
      marginTop: 10,
      marginBottom: 20,
      marginLeft: 10,
      justifyContent: "center",
      alignContent: "center",
      width: "40%",
      height: 50,
      alignSelf: "flex-start",
    },
    containerBox: {
      flex: 1,
      backgroundColor: colors.white,
      alignContent: "center",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 30,
      paddingTop: 30,
    },
    editButton: {
        height: 30,
        width: 30,
    },
    clickBox: {
        width:80,
        height: 40,
        backgroundColor: colors.secondary,
        borderRadius: 100,
        justifyContent: "center",
        alignItems:'center',
        margin: 5,
        marginBottom: 15,
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
        marginBottom: 15,
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
    detailBox: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: 70,
      width: 130,
    },
  });
  
  export default ManageViewScreen1;