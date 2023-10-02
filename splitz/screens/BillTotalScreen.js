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

const BillTotalScreen = () => {
    
    const userTotals = [
        {
          userId: 1,
          userName: "Sarang Ambalakkat",
          userTotal: parseFloat("35.20"),
          userColor: "#BA4BEF",
          owner: 1,
        },
        {
            userId: 2,
            userName: "Nikhil Aggarwal",
            userTotal: parseFloat("20.54"),
            userColor:"#6F8DF5",
            owner: 0,
          },
          {
            userId: 3,
            userName: "Charles Gutcho",
            userTotal: parseFloat("28.90"),
            userColor:"#FFDF8C",
            owner: 0,
          },
          {
            userId: 4,
            userName: "Kyle Yun",
            userTotal: parseFloat("34.72"),
            userColor:"#FF9473",
            owner: 0,
          },
          {
            userId: 5,
            userName: "Raymond Dinh",
            userTotal: parseFloat("0.00"),
            userColor:"#6B72AB",
            owner: 0,
          },
          {
            userId: 6,
            userName: "Tiffany Yau",
            userTotal: parseFloat("0.00"),
            userColor:"#6D1ED4",
            owner: 0,
          },
      ];

      const totalAmount = userTotals.reduce((acc, user) => acc + parseFloat(user.userTotal), 0);
      const formattedTotals = totalAmount.toFixed(2);

      const billTotal = parseFloat("175.36")
      const formattedBillTotal = billTotal.toFixed(2);

      const billNameInputRef = useRef(null);
  
      return (
        <View style={styles.container}>
            <SafeAreaView>
                <Image style={styles.logo} source={require("../assets/splitzofficiallogo.png")}></Image>
            </SafeAreaView>
            <View style={styles.containerBox}>
                <View style={{ flexDirection: "row", marginTop: 40, }}>
                    <TextInput ref={billNameInputRef} placeholder='Name this Bill!' style={styles.billNameInput}></TextInput>
                    <TouchableOpacity onPress={() => billNameInputRef.current.focus()}><Image style={styles.editButton} source={require("../assets/editButton.png")}></Image></TouchableOpacity>
                </View>
                <View style={{ marginTop: 20, justifyContent: "center", alignContent: "center", alignSelf: "center" }}>
                    <Text style={{ fontSize: 50, fontWeight: "bold" }}>${billTotal}</Text>
                    <Text style={{ fontSize: 26, alignSelf: "center", marginTop: 5 }}>Bill Total</Text>
                </View>
                <View style={styles.itemBox2}>
                <FlatList
                    data={userTotals}
                    style={{ flex:1, marginTop: 5 }}
                    keyExtractor={(user) => user.userId.toString()}
                    scrollEnabled={true}
                    renderItem={({ item }) => (
                        <UserTotals
                        userName={item.userName}
                        userTotal={item.userTotal}
                        userColor={item.userColor}
                        owner={item.owner}
                        />
                    )}
                />
                </View>
                <Text style={{alignSelf: "center", marginTop: 20, fontSize: 18, marginBottom: 10,}}>Split Progress: ${formattedTotals}/${formattedBillTotal}</Text>
                <TouchableOpacity
                    style={styles.primaryButton}>
                    <ButtonText>Share</ButtonText>
                    <Image style={styles.share} source={require("../assets/share2.png")}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryButton}>
                    <ButtonText2>Send Requests</ButtonText2>
                  </TouchableOpacity>
                 
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
    billNameInput: {
        fontSize: 25,
        marginRight: 15,
        fontWeight: "bold",
    },
    itemBox2: {
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
        flex: 1,
      },
      primaryButton: {
        backgroundColor: colors.primary,
        borderRadius: 100,
        width: 355,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 15,
        flexDirection: "row",
      },
      secondaryButton: {
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.primary,
        width: 355,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 15,
        flexDirection: "row",
      },
      share: {
        height: 25,
        width: 25,
        marginLeft: 10,
      },
  });
  
  export default BillTotalScreen;