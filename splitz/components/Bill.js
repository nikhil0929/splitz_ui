import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

function Bill({billName, createdBy}) {

        // Truncate function
        const truncate = (str, n) => {
            return (str.length > n) ? str.substr(0, n-1) + '...' : str;
        };
    
        return (
            <View style={styles.itemBox2}>
                <Text style={{fontSize: 24, fontWeight: "bold", textDecorationLine: "underline", alignSelf: "center", marginBottom: 10, textAlign:"center", paddingHorizontal:2,}}>
                    {billName}
                </Text>
                <Text style={{fontSize: 15, alignSelf: "center"}}>{truncate(createdBy, 10)}</Text>
            </View>
        );
    }
      
    const styles = StyleSheet.create({
        itemBox2: {
            borderRadius: 20,
            backgroundColor: "#E5F3FF",
            height: 140,
            width: 130,
            marginTop: 15,
            marginRight: 10,
            alignContent: "center",
            justifyContent: "center"
        },
    });

export default Bill;