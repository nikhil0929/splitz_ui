import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

function ReceiptItem({ itemTitle, quantity, price, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedItemTitle, setEditedItemTitle] = useState(itemTitle);
    const [editedQuantity, setEditedQuantity] = useState(quantity.toString());
    const [editedPrice, setEditedPrice] = useState(price);
  
    const handleEditPress = () => {
      setIsEditing(true);
    };
  
    const handleSavePress = () => {
      const updatedItem = {
        itemTitle: editedItemTitle,
        quantity: parseInt(editedQuantity),
        price: editedPrice,
      };
      onUpdate(updatedItem);
      setIsEditing(false);
    };

    const handleDeletePress = () => {
        Alert.alert(
            "Delete Item",
            "Are you sure you want to delete this item?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Confirm",
                    onPress: () => {
                        if (onUpdate) {
                            onUpdate(null);
                        }
                    }
                }
            ],
            { cancelable: false }
        );
    };    
  
    return (
      <View style={styles.itemBox2}>
        {isEditing ? (
          <>
            <TextInput
              style={styles.itemTitle}
              value={editedItemTitle}
              onChangeText={(text) => setEditedItemTitle(text)}
              editable={true}
            />
            <TextInput
              style={{ alignSelf: 'center' }}
              value={editedQuantity}
              onChangeText={(text) => setEditedQuantity(text)}
              editable={true}
              keyboardType='numeric'
            />
            <TextInput
              style={styles.dollarText}
              value={editedPrice}
              onChangeText={(text) => setEditedPrice(text)}
              editable={true}
            />
            <TouchableOpacity onPress={handleSavePress}>
              <Image style={styles.saveButton} source={require("../assets/save.png")} />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.itemTitle}>{editedItemTitle}</Text>
            <Text style={{ alignSelf: 'center' }}>({editedQuantity})</Text>
            <Text style={styles.dollarText}>{editedPrice}</Text>
            <TouchableOpacity onPress={handleEditPress}>
              <Image style={styles.editButton} source={require("../assets/edit.png")} />
            </TouchableOpacity>
          </>
        )}
        <TouchableOpacity 
            style={styles.deleteButton} 
            onPress={handleDeletePress}>
            <Image source={require("../assets/delete.png")} style={styles.deleteImage} />
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    itemBox2: {
      borderRadius: 20,
      backgroundColor: "#E5F3FF",
      height: 75,
      width: 360,
      flexDirection: "row",
      marginTop: 15,
      alignSelf: "center",
      justifyContent: "space-evenly",
      alignContent: "center",
    },
    dollarText: {
      fontWeight: "bold",
      fontSize: 25,
      alignSelf: "center"
    },
    editButton: {
      height: 30,
      width: 30,
      alignSelf: "center",
      marginTop: 23,
    },
    itemTitle: {
      fontSize: 14,
      alignSelf: "center",
      fontWeight: "bold",
    },
    saveButton: {
      height: 30,
      width: 30,
      alignSelf: "center",
      marginTop: 23,
    },
    deleteButton: {
        position: 'absolute',
        top: -10, // To protrude it a bit from the top
        right: 5, // Align to the right edge
        width: 25,
        height: 25,
        zIndex: 1, 
        justifyContent: 'center',  // Align image to center of the button
        alignItems: 'center',      // Align image to center of the button
    },
    deleteImage: {
        width: '100%', // Take full width of the button
        height: '100%', // Take full height of the button
        resizeMode: 'contain', // Keep image proportions
    }
  });

export default ReceiptItem;