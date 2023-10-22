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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";
import TitleText from "../components/TitleText";
import ButtonText from "../components/ButtonText";
import Profile from "../components/Profile";
import UserTotals from "../components/UserTotals";
import ButtonText2 from "../components/ButtonText2";
import HeadingText from "../components/HeadingText";

import Group from "../components/Group";

const ManageViewScreen2 = ({ route }) => {
  const { baseURL } = route.params;

  const navigation = useNavigation();

  const groups = [
    {
      groupId: 1,
      groupName: "SJ BARS",
      groupAmount: 7,
      createdDays: 5,
    },
    {
      groupId: 2,
      groupName: "Las Vegas Baby",
      groupAmount: 10,
      createdDays: 10,
    },
    {
      groupId: 3,
      groupName: "Spain",
      groupAmount: 20,
      createdDays: 20,
    },
    {
      groupId: 4,
      groupName: "House Bills",
      groupAmount: 6,
      createdDays: 30,
    },
  ];

  const totalGroups = groups.length;
  const recentGroups = groups.filter((group) => group.createdDays <= 7);
  const allGroups = groups.filter((group) => group.createdDays > 7);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image
          style={styles.logo}
          source={require("../assets/splitzofficiallogo.png")}
        ></Image>
      </SafeAreaView>
      <View style={styles.containerBox}>
        <Text
          style={{
            marginBottom: 5,
            color: "black",
            fontSize: 26,
            alignSelf: "center",
            fontWeight: "bold",
          }}
        >
          Group Manager
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={styles.otherBox}
            onPress={() => navigation.navigate("Bills")}
          >
            <Text style={styles.otherText}>Bills</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clickBox}>
            <Text style={styles.mainText}>Groups</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          <LinearGradient
            colors={["#8C8AF3", "#8BD6EE"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.detailBox}
          >
            <View>
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 45,
                }}
              >
                {totalGroups}
              </Text>
            </View>
          </LinearGradient>
          <View style={styles.detailBox2}>
            <Text
              style={{
                alignSelf: "center",
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              Groups
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 25 }}>
          <TitleText>Recent Groups</TitleText>
          <View style={{ flexdirection: "row" }}>
            <FlatList
              data={recentGroups}
              keyExtractor={(item) => {
                return item.groupId.toString();
              }}
              scrollEnabled={true}
              horizontal={true}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity>
                    <Group
                      groupName={item.groupName}
                      groupAmount={item.groupAmount}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 25 }}>
          <TitleText>All Groups</TitleText>
          <View style={{ flexdirection: "row" }}>
            <FlatList
              data={allGroups}
              keyExtractor={(item) => {
                return item.groupId.toString();
              }}
              scrollEnabled={true}
              horizontal={true}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity>
                    <Group
                      groupName={item.groupName}
                      groupAmount={item.groupAmount}
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
    padding: 30,
    paddingTop: 30,
  },
  editButton: {
    height: 30,
    width: 30,
  },
  clickBox: {
    width: 100,
    height: 40,
    backgroundColor: colors.secondary,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    marginBottom: 10,
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
    marginBottom: 10,
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
  detailBox: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    width: 140,
    justifyContent: "center",
    alignContent: "center",
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

export default ManageViewScreen2;
