import React, { useState, useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
  Pressable,
  Keyboard,
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  LogBox,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AxiosContext } from "../axiosCaller";

import colors from "../config/colors";
import HeadingText from "../components/HeadingText";
import GreyText from "../components/GreyText";
import TitleText from "../components/TitleText";
import ButtonText from "../components/ButtonText";
import ReceiptItem from "../components/ReceiptItem";
import ButtonText2 from "../components/ButtonText2";
import GoBackButton from "../components/GoBackButton";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const ManualEntryScreen = ({ route }) => {
  console.log("ManualEntryScreen");
  const { receipt } = route.params;
  const axiosCaller = useContext(AxiosContext);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const navigation = useNavigation();
  console.log("receipt", receipt);

  const [items, setItems] = useState(receipt.items ? receipt.items : []);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const addNewItem = () => {
    if (itemName && itemPrice) {
      const newItem = {
        item_name: itemName,
        item_quantity: itemQuantity ? parseInt(itemQuantity) : 1,
        item_price: parseFloat(itemPrice),
      };

      axiosCaller
        .post("/receipts/" + receipt.room_code + "/add-item/" + receipt.id, [
          newItem,
        ])
        .then((response) => {
          // Update the displayed values with the updated data
          if (response.data) {
            Alert.alert("Item Added Successfully!");

            console.log(response.data);

            setItems((prevItems) => prevItems.concat(response.data));
            setItemName("");
            setItemQuantity("");
            setItemPrice("");
          } else {
            Alert.alert("Error", "Item could not be added.");
          }
        })
        .catch((error) => {
          console.log("Error", error);
        });
    } else {
      Alert.alert("Incomplete Information", "Please fill in all fields.");
    }
  };

  const handleItemUpdate = (updatedItem, itemId) => {
    if (updatedItem === null) {
      setItems((prevItems) =>
        prevItems.filter((item) => item.itemId !== itemId)
      );
    } else {
      const updatedItems = [...items];
      const index = updatedItems.findIndex(
        (item) => item.itemId === updatedItem.itemId
      );

      if (index !== -1) {
        updatedItems[index] = updatedItem;
        setItems(updatedItems);
      }
    }
  };

  handleOnPress1 = () => {
    console.log("Redo");
  };

  handleOnPress2 = () => {
    console.log("Exit");
  };

  handleReceiptConfirm = () => {
    console.log("Go Split");
    navigation.navigate("Split", { receipt_items: items, receipt: receipt });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image
          style={styles.logo}
          source={require("../assets/splitzofficiallogo.png")}
        ></Image>
      </SafeAreaView>
      <View style={styles.containerBox}>
        <View style={styles.topButtons}>
          <GoBackButton />
          <View>
            <TitleText>Confirm item list:</TitleText>
            <Text style={styles.descriptionText}> Add new items/tip: </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Pressable onPress={handleOnPress1}>
              <Image
                source={require("../assets/redo.png")}
                style={styles.redoButton}
              ></Image>
            </Pressable>
          </View>
        </View>
        <View>
          <View style={styles.itemBox1}>
            <TextInput
              value={itemName}
              onChangeText={(text) => setItemName(text)}
              placeholder="Item Name"
            ></TextInput>
            <TextInput
              value={itemQuantity}
              onChangeText={(text) => setItemQuantity(text)}
              placeholder="Quantity"
              keyboardType="numeric"
            ></TextInput>
            <TextInput
              value={itemPrice}
              onChangeText={(text) => setItemPrice(text)}
              placeholder="$X.XX"
              keyboardType="numeric"
              style={styles.dollarText}
            ></TextInput>
            <TouchableOpacity onPress={addNewItem}>
              <View style={styles.addButton}>
                <Text style={styles.addSign}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.descriptionText2}>
            {" "}
            Current items: (scroll for more){" "}
          </Text>
          <View style={styles.itemBox2}>
            <FlatList
              data={items}
              keyExtractor={(item) => {
                return item.id;
              }}
              scrollEnabled={true}
              renderItem={({ item }) => {
                return (
                  <ReceiptItem
                    itemTitle={item.item_name}
                    quantity={item.item_quantity}
                    price={item.item_cost}
                    onUpdate={(updatedItem) =>
                      handleItemUpdate(updatedItem, item.id)
                    }
                  />
                );
              }}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleReceiptConfirm}
            >
              <ButtonText>Continue</ButtonText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
              <ButtonText2>Share</ButtonText2>
              <Image
                style={styles.share}
                source={require("../assets/share2.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    width: screenWidth,
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
  },
  exitButton: {
    height: 35,
    width: 35,
    alignSelf: "flex-end",
  },
  redoButton: {
    height: 25,
    width: 25,
    marginRight: 25,
  },
  descriptionText: {
    fontSize: 16,
  },
  descriptionText2: {
    fontSize: 16,
    marginTop: 15,
  },
  itemBox1: {
    borderRadius: 20,
    backgroundColor: "#EEEEEE",
    height: 75,
    width: "95%",
    flexDirection: "row",
    marginTop: 15,
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  itemBox2: {
    width: "100%",
    height: "50%",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  addButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 25,
  },
  addSign: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: colors.white,
  },
  dollarText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  tipBox: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 120,
    marginTop: 15,
    marginBottom: 15,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: "95%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  secondaryButton: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.primary,
    width: "95%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    flexDirection: "row",
  },
  share: {
    height: 25,
    width: 25,
    marginLeft: 10,
  },
});

export default ManualEntryScreen;
