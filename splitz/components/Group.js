import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

function Group({groupName, groupAmount}) {
    
        return (
            <View style={styles.itemBox2}>
                <Text style={{fontSize: 20, fontWeight: "bold", textDecorationLine: "underline", alignSelf: "center", marginBottom: 5, textAlign:"center", paddingHorizontal:2,}}>
                    {groupName}
                </Text>
                <Text style={{fontSize: 30, alignSelf: "center", fontWeight: "bold"}}>{groupAmount}</Text>
                <Text style={{alignSelf:"center", fontSize: 14,}}>People</Text>
            </View>
        );
    }
      
    const styles = StyleSheet.create({
        itemBox2: {
            borderRadius: 20,
            backgroundColor: "#EEEEEE",
            height: 120,
            width: 180,
            marginTop: 15,
            marginRight: 10,
            alignContent: "center",
            justifyContent: "center"
        },
    });

export default Group;