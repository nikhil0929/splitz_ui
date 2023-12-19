import React, { useState, useEffect, useRef, useContext } from "react";
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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import colors from "../config/colors";
import ButtonText from "../components/ButtonText";
import Profile from "../components/Profile";
import UserTotals from "../components/UserTotals";
import ButtonText2 from "../components/ButtonText2";
import { userTotalsMapToArray, getTotalAmount } from "../utils/utils";
import { AxiosContext } from "../axiosCaller";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const BillUserTotals = ({ route }) => {
  const { userTotals, receiptName, navigation } = route.params;
  const axiosCaller = useContext(AxiosContext);
  const billNameInputRef = useRef(null);
  const [receiptWithItems, setReceiptWithItems] = useState({});
  const [totalsRevealed, setTotalsRevealed] = useState(false);
  const [activeUsers, setActiveUsers] = useState([]);
  const [userTotalsMap, setUserTotalsMap] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const renderItem = ({ item }) => {
    return <UserTotals userName={item.name} userTotal={item.total_cost} />;
  };

  const currTotal = 25.12;

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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              ref={billNameInputRef}
              value={receiptName}
              placeholder="Name this Bill!"
              style={styles.billNameInput}
            ></TextInput>
            <TouchableOpacity onPress={() => billNameInputRef.current.focus()}>
              <Image
                style={styles.editButton}
                source={require("../assets/editButton.png")}
              />
            </TouchableOpacity>
          </View>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={require("../assets/exit.png")}
              style={styles.exitButton}
            ></Image>
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
          }}
        >
          <Text style={{ fontSize: 45, fontWeight: "bold" }}>
            ${getTotalAmount(userTotals)}
          </Text>
          <Text style={{ fontSize: 22, alignSelf: "center", marginTop: 5 }}>
            Bill Total
          </Text>
        </View>
        <View style={styles.itemBox2}>
          <FlatList
            data={userTotals}
            style={{ flex: 1, marginTop: 5 }}
            keyExtractor={(item) => item.id}
            scrollEnabled={true}
            renderItem={renderItem}
          />
        </View>
        <Text
          style={{
            alignSelf: "center",
            marginTop: 20,
            fontSize: 18,
            marginBottom: 10,
          }}
        >
          Total Active Splitters: {activeUsers.length}
        </Text>
      </View>
    </View>
  );
};

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
    padding: 15,
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  exitButton: {
    height: 35,
    width: 35,
    alignSelf: "flex-end",
  },
  editButton: {
    height: 30,
    width: 30,
  },
  billNameInput: {
    fontSize: 25,
    marginRight: 3,
    fontWeight: "bold",
  },
  itemBox2: {
    flex: 1,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: "100%",
    maxWidth: 400,
    height: 45,
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
    width: "100%",
    maxWidth: 400,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15,
    flexDirection: "row",
  },
  grey: {
    color: "#cccccc", // Replace with the color that fits your design
  },
});

export default BillUserTotals;
