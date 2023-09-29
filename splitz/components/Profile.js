import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, } from 'react-native';

function Profile ({userName}) {


    return (
      <View style={styles.profile}>
        <Text style={styles.profileText}>{userName}</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    profile: {
        borderRadius: 100, 
        height: 30, 
        width: 30, 
        alignSelf: "center", 
        backgroundColor: "#BA4BEF",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    profileText: {
        alignSelf: "center",
        color: "white",
        fontSize: 12,
        fontWeight: "bold"
      }
  });
  
export default Profile;