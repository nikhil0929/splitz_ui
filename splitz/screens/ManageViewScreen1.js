import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, Alert, Text, Pressable, Keyboard, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../config/colors';
import TitleText from '../components/TitleText';
import ButtonText from '../components/ButtonText';
import Profile from '../components/Profile';
import UserTotals from '../components/UserTotals';
import ButtonText2 from '../components/ButtonText2';
import HeadingText from '../components/HeadingText';

import Bill from '../components/Bill';

const ManageViewScreen1 = () => {
    
  const bills = [
    {
      billId: 1,
      billName: "Tacos & Beers",
      createdBy: "Sarang Ambalakkat",
      createdDays: 7
    },
    {
        billId: 2,
        billName: "Johnny Rockets",
        createdBy: "Kyle Yun",
        createdDays: 3
      },
      {
        billId: 3,
        billName: "BARSSS",
        createdBy: "Raymond Dinh",
        createdDays: 10
      },
  ];

      const totalBills = parseFloat("4")
      const recentBills = bills.filter(bill => bill.createdBy === "Kyle Yun");
      const allBills = bills.filter(bill => bill.createdBy !== "Kyle Yun");
  
      return (
        <View style={styles.container}>
            <SafeAreaView>
                <Image style={styles.logo} source={require("../assets/splitzofficiallogo.png")}></Image>
            </SafeAreaView>
            <View style={styles.containerBox}>
            <Text style={{marginBottom: 5, color:"black", fontSize:26, alignSelf: "center", fontWeight: "bold"}}>Bill Manager</Text>
            <View 
            style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop: 10}}>
            <TouchableOpacity style={styles.clickBox}>
                <Text style={styles.mainText}>Bills</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.otherBox}>
                <Text style={styles.otherText}>Groups</Text>
            </TouchableOpacity>
            </View>
            <View style={{justifyContent:"center", alignContent: "center", alignSelf: "center", marginTop: 20,}}>
            <LinearGradient
              colors={['#C58AF3', '#EE8BC6']}
              start={{x: 0, y: 0}} 
              end={{x: 1, y: 1}}
              style={styles.detailBox}>
            <View>
              <Text style={{alignSelf: "center", color: "white", fontWeight: "bold", fontSize: 45}}>{totalBills}</Text>
            </View>
            </LinearGradient>
            <View style={styles.detailBox2}>
              <Text style={{alignSelf: "center", color: "black", fontWeight: "bold", fontSize: 18}}>Bills</Text>
            </View>
            </View>
            <View style={{marginTop: 25}}>
                <TitleText>Your Bills</TitleText>
                <View style= {{flexdirection: "row"}}>
                <FlatList
                    data={recentBills}
                    keyExtractor={(item) => {
                        return item.billId.toString();
                    }}
                    scrollEnabled={true}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return (
                        <TouchableOpacity>
                        <Bill
                            billName={item.billName}
                            createdBy={item.createdBy}
                            createdDays={item.createdDays}
                        />
                        </TouchableOpacity>
                        );
                    }}
                    />
                </View>
            </View>
            <View style={{marginTop: 25,}}>
                <TitleText>All Bills</TitleText>
                <View style= {{flexdirection: "row"}}>
                <FlatList
                    data={allBills}
                    keyExtractor={(item) => {
                        return item.billId.toString();
                    }}
                    scrollEnabled={true}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return (
                        <TouchableOpacity>
                        <Bill
                            billName={item.billName}
                            createdBy={item.createdBy}
                            createdDays={item.createdDays}
                        />
                        </TouchableOpacity>
                        );
                    }}
                    />
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
        marginBottom: 10,
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
        marginBottom: 10,
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
      width: 140,
      justifyContent: "center",
      alignContent: "center"
    },
    detailBox2: {
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      height: 40,
      width: 140,
      backgroundColor: "#EEEEEE",
      justifyContent: "center",
      alignContent: "center",
    },
  });
  
  export default ManageViewScreen1;