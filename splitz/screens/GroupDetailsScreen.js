import React, { useState, useEffect, useRef, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserTotals from "../components/UserTotals";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import colors from "../config/colors";
import TitleText from "../components/TitleText";
import ButtonText from "../components/ButtonText";

import Bill from "../components/Bill";
import GoBackButton from "../components/GoBackButton";
import { AxiosContext } from "../axiosCaller";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const GroupDetailsScreen = ({ route }) => {
  console.log("GroupDetailsScreen");
  const { room } = route.params;
  const [viewMode, setViewMode] = useState(true); // default to 'Bills'
  const groupNameInputRef = useRef(null);

  // const recentBills = receiptsData.filter((bill) => bill.createdDays <= 7);
  // const allBills = receiptsData.filter((bill) => bill.createdDays > 7);
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
            Group ID: {room.room_code}
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
        {viewMode ? (
          <GroupBillsComponent room={room} setViewMode={setViewMode} />
        ) : (
          <GroupDashboardComponent room={room} setViewMode={setViewMode} />
        )}
      </View>
    </View>
  );
};

const GroupBillsComponent = ({ room, setViewMode }) => {
  const [receiptsData, setReceiptsData] = useState(null);
  const navigation = useNavigation();
  const axiosCaller = useContext(AxiosContext);

  console.log("Room is: ", room);

  useEffect(() => {
    axiosCaller
      .get("/receipts/" + room.room_code)
      .then((response) => {
        console.log(response.data);
        setReceiptsData(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [room]);

  return (
    <View>
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
          onPress={() => setViewMode(false)}
        >
          <Text style={styles.otherText}>Dashboard</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setViewMode(true)}>
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
              data={receiptsData}
              keyExtractor={(item) => {
                return item.id;
              }}
              scrollEnabled={true}
              horizontal={true}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity>
                    <Bill
                      billName={item.receipt_name}
                      createdBy={item.owner_id}
                      createdDays={0}
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
              data={receiptsData}
              keyExtractor={(item) => {
                return item.id;
              }}
              scrollEnabled={true}
              horizontal={true}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity>
                    <Bill
                      billName={item.receipt_name}
                      createdBy={item.owner_id}
                      createdDays={0}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const GroupDashboardComponent = ({ room, setViewMode }) => {
  const navigation = useNavigation();

  const userTotals = [
    {
      userId: 1,
      userName: "Sarang Ambalakkat",
      userTotal: parseFloat("101.65"),
      userColor: "#BA4BEF",
    },
    {
      userId: 2,
      userName: "Nikhil Aggarwal",
      userTotal: parseFloat("105.30"),
      userColor: "#6F8DF5",
    },
    {
      userId: 3,
      userName: "Charles Gutcho",
      userTotal: parseFloat("104.61"),
      userColor: "#FFDF8C",
    },
    {
      userId: 4,
      userName: "Kyle Yun",
      userTotal: parseFloat("110.29"),
      userColor: "#FF9473",
    },
    {
      userId: 5,
      userName: "Raymond Dinh",
      userTotal: parseFloat("131.31"),
      userColor: "#6B72AB",
    },
    {
      userId: 6,
      userName: "Tiffany Yau",
      userTotal: parseFloat("0.00"),
      userColor: "#6D1ED4",
    },
  ];

  const totalAmount = userTotals.reduce(
    (acc, user) => acc + parseFloat(user.userTotal),
    0
  );
  const formattedTotals = totalAmount.toFixed(2);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={dashboardStyles.otherBox}
          onPress={() => setViewMode(true)}
        >
          <Text style={dashboardStyles.otherText}>Bills</Text>
        </TouchableOpacity>
        <TouchableOpacity style={dashboardStyles.clickBox}>
          <Text style={dashboardStyles.mainText}>Dashboard</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 45, fontWeight: "bold" }}>
          ${formattedTotals}
        </Text>
        <Text style={{ fontSize: 22, alignSelf: "center", marginTop: 5 }}>
          Group Totals
        </Text>
      </View>
      <View style={dashboardStyles.itemBox2}>
        <FlatList
          data={userTotals}
          style={{ flex: 1, marginTop: 5 }}
          keyExtractor={(user) => user.userId.toString()}
          scrollEnabled={true}
          renderItem={({ item }) => (
            <UserTotals
              userName={item.userName}
              userTotal={item.userTotal}
              userColor={item.userColor}
            />
          )}
        />
      </View>
      <TouchableOpacity style={dashboardStyles.primaryButton}>
        <ButtonText>Share</ButtonText>
        <Image
          style={dashboardStyles.share}
          source={require("../assets/share2.png")}
        ></Image>
      </TouchableOpacity>
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

const dashboardStyles = StyleSheet.create({
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
    padding: 10,
    paddingBottom: 25,
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
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: "95%",
    height: 50,
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
  clickBox: {
    width: 110,
    height: 40,
    backgroundColor: colors.secondary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    marginBottom: 15,
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
    marginBottom: 15,
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

export default GroupDetailsScreen;
