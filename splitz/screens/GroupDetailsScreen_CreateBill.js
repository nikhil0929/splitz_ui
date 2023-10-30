import React, { useState, useEffect, useRef } from "react";
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
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import colors from "../config/colors";
import TitleText from "../components/TitleText";
import ButtonText from "../components/ButtonText";
import Profile from "../components/Profile";
import UserTotals from "../components/UserTotals";
import ButtonText2 from "../components/ButtonText2";
import HeadingText from "../components/HeadingText";
import BottomTabNavigator from "../navigators/BottomTabNavigator";
import CustomBottomTabBar from "../navigators/CustomBottomTabBar";

import Bill from "../components/Bill";
import GoBackButton from "../components/GoBackButton";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const GroupDetailsScreen_CreateBill = ({ route }) => {
  const { baseURL } = route.params;
  const [viewMode, setViewMode] = useState("Bills"); // default to 'Bills'
  const navigation = useNavigation();
  const groupNameInputRef = useRef(null);

  const bills = [
    {
      billId: 1,
      billName: "Tacos & Beers",
      createdBy: "Sarang Ambalakkat",
      createdDays: 7,
    },
    {
      billId: 2,
      billName: "Johnny Rockets",
      createdBy: "Kyle Yun",
      createdDays: 3,
    },
    {
      billId: 3,
      billName: "BARSSS",
      createdBy: "Raymond Dinh",
      createdDays: 10,
    },
  ];

  const recentBills = bills.filter((bill) => bill.createdDays <= 7);
  const allBills = bills.filter((bill) => bill.createdDays > 7);

  const groupID = "JK76L1";

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image
          style={styles.logo}
          source={require("../assets/splitzofficiallogo.png")}
        ></Image>
      </SafeAreaView>
      <View style={styles.containerBox}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 15,
          }}
        >
          <GoBackButton />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: colors.primary,
            }}
          >
            Group ID: {groupID}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 25,
            alignContent: "center",
            alignSelf: "center",
          }}
        >
          <TextInput
            ref={groupNameInputRef}
            placeholder="Group Name"
            style={styles.billNameInput}
          ></TextInput>
          <TouchableOpacity onPress={() => groupNameInputRef.current.focus()}>
            <Image
              style={styles.editButton}
              source={require("../assets/editButton.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity style={styles.clickBox}>
            <Text style={styles.mainText}>Bills</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.otherBox}
            onPress={() =>
              navigation.navigate("GroupDashboard", { baseURL: baseURL })
            }
          >
            <Text style={styles.otherText}>Dashboard</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CreateBill", { baseURL: baseURL })
          }
        >
          <View
            style={{
              alignSelf: "center",
              backgroundColor: colors.secondary,
              width: 270,
              borderRadius: 20,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontSize: 40,
                marginTop: 0,
                fontWeight: "bold",
                color: colors.white,
                alignSelf: "center",
              }}
            >
              +
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: colors.white,
                alignSelf: "center",
              }}
            >
              Create New Bill
            </Text>
          </View>
        </TouchableOpacity>
        <ScrollView
          style={{
            marginTop: 25,
            paddingLeft: 25,
          }}
        >
          <View>
            <TitleText>Recent Bills</TitleText>
            <View style={{ flexdirection: "row" }}>
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
          <View style={{ marginTop: 25 }}>
            <TitleText>All Bills</TitleText>
            <View style={{ flexdirection: "row" }}>
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
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    width: screenWidth,
    height: screenHeight,
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
  clickBox: {
    width: 80,
    height: 40,
    backgroundColor: colors.secondary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    marginBottom: 25,
    color: colors.white,
    fontWeight: "bold",
  },
  otherBox: {
    width: 130,
    height: 40,
    backgroundColor: "transparent",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    marginBottom: 25,
  },
  mainText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
  },
  otherText: {
    fontSize: 16,
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default GroupDetailsScreen_CreateBill;
