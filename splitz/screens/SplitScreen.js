import React, { useState, useEffect } from "react";
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
  TouchableWithoutFeedback,
  ScrollView,
  FlatList,
  LogBox,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import colors from "../config/colors";
import TitleText from "../components/TitleText";
import ButtonText from "../components/ButtonText";
import ConfirmedReceiptItem from "../components/ConfirmedReceiptItem";
import Profile from "../components/Profile";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const SplitScreen = ({ route }) => {
  const { baseURL } = route.params;

  LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

  const receiptItems = [
    {
      itemId: 1,
      itemTitle: "Spaghetti",
      quantity: 1,
      price: "12.60",
    },
    {
      itemId: 2,
      itemTitle: "White Claws",
      quantity: 4,
      price: "32.00",
    },
    {
      itemId: 3,
      itemTitle: "BBQ Chicken Pizza",
      quantity: 1,
      price: "20.00",
    },
    {
      itemId: 4,
      itemTitle: "Water",
      quantity: 4,
      price: "0.00",
    },
    {
      itemId: 5,
      itemTitle: "Tip",
      quantity: 1,
      price: "15.00",
    },
    {
      itemId: 6,
      itemTitle: "Tax",
      quantity: 1,
      price: "10.00",
    },
  ];

  const [selectedItems, setSelectedItems] = useState({});
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [otherUserSelectedItems, setOtherUserSelectedItems] = useState({});
  const userName = "RD";

  const navigation = useNavigation();

  const handleItemPress = (item) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [item.itemId]: !prevSelectedItems[item.itemId],
    }));
    setIsProfileVisible(Object.values(selectedItems).some((value) => value));
  };

  const computeTotal = () => {
    let total = 0;
    for (let item of receiptItems) {
      let splitCount = 0;

      // Check if current user selected the item
      if (selectedItems[item.itemId]) splitCount++;

      // Check if other user selected the item
      if (otherUserSelectedItems[item.itemId]) splitCount++;

      if (splitCount > 0) {
        total += (item.quantity * parseFloat(item.price)) / splitCount;
      }
    }
    return total.toFixed(2);
  };

  handleOnPress2 = () => {
    console.log("Exit");
  };

  handleOnPress3 = () => {
    navigation.navigate("BillTotal", { baseURL: baseURL });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image
          style={styles.logo}
          source={require("../assets/splitzofficiallogo.png")}
        ></Image>
      </SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.containerBox}>
          <View style={styles.topButtons}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert(
                  "Exit the Bill?",
                  "You're about to leave the bill",
                  [
                    {
                      text: "Continue",
                      style: "cancel",
                    },
                    {
                      text: "Exit",
                      onPress: () =>
                        navigation.navigate("GroupDetails", {
                          baseURL: baseURL,
                        }),
                    },
                  ]
                );
              }}
            >
              <Image
                source={require("../assets/exit.png")}
                style={styles.exitButton}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.newView}>
            <TitleText>Tap on the items you're paying for:</TitleText>
          </View>
          <View>
            <View style={styles.itemBox2}>
              <FlatList
                data={receiptItems}
                keyExtractor={(item) => {
                  return item.itemId.toString();
                }}
                scrollEnabled={true}
                renderItem={({ item }) => {
                  return (
                    <TouchableWithoutFeedback
                      onPress={() => handleItemPress(item)}
                    >
                      <ConfirmedReceiptItem
                        itemTitle={item.itemTitle}
                        quantity={item.quantity}
                        price={item.price}
                        onPress={() => handleItemPress(item)}
                        isSelected={selectedItems === item}
                        showProfile={selectedItems[item.itemId]}
                        userName={userName}
                      />
                    </TouchableWithoutFeedback>
                  );
                }}
              />
            </View>
            <View style={styles.horizontalLine}></View>
            <Text style={styles.personTotal}>${computeTotal()}</Text>
            <Text style={styles.totalText}> Your Total </Text>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={this.handleOnPress3}
            >
              <ButtonText>Continue</ButtonText>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    screenWidth: screenWidth,
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
  newView: {
    marginTop: 5,
    marginBottom: 10,
  },
  exitButton: {
    height: 35,
    width: 35,
    alignSelf: "flex-end",
  },
  redoButton: {
    height: 25,
    width: 25,
    alignSelf: "flex-end",
    marginRight: 20,
    marginBottom: 5,
  },
  itemBox2: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    height: 300,
    width: "100%",
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15,
  },
  profile: {
    borderRadius: 100,
    height: 45,
    width: 45,
    alignSelf: "center",
    backgroundColor: "#BA4BEF",
    justifyContent: "center",
    alignItems: "center",
  },

  personTotal: {
    alignSelf: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 10,
  },
  totalText: {
    alignSelf: "center",
    fontSize: 20,
    marginTop: 5,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderColor: "black",
    marginVertical: 15,
    marginTop: 20,
  },
  profileText: {
    alignSelf: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileContainer: {
    marginLeft: 10,
  },
});

export default SplitScreen;
