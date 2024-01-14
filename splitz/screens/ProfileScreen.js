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
import { LinearGradient } from "expo-linear-gradient";

import colors from "../config/colors";
import TitleText from "../components/TitleText";
import ButtonText from "../components/ButtonText";
import Profile from "../components/Profile";
import UserTotals from "../components/UserTotals";
import ButtonText2 from "../components/ButtonText2";
import HeadingText from "../components/HeadingText";
import { AxiosContext } from "../axiosCaller";

const ProfileScreen = () => {
  console.log("ProfileScreen");
  const axiosCaller = useContext(AxiosContext);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [tempName, setTempName] = useState("");
  const [tempUsername, setTempUsername] = useState("");
  const [tempEmail, setTempEmail] = useState("");

  useEffect(() => {
    axiosCaller
      .get("/user/")
      .then((response) => {
        const userData = response.data;
        setPhoneNumber(userData.phone_number);
        setName(userData.name);
        setUsername(userData.username);
        setEmail(userData.email);

        // Initialize temporary variables
        setTempName(userData.name);
        setTempUsername(userData.username);
        setTempEmail(userData.email);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  const buildUpdateObject = () => {
    const updateObj = {};
    if (tempName !== name) updateObj.name = tempName;
    if (tempUsername !== username) updateObj.username = tempUsername;
    if (tempEmail !== email) updateObj.email = tempEmail;
    return updateObj;
  };

  const handleUpdateUserDetails = async () => {
    const updateData = buildUpdateObject();

    if (Object.keys(updateData).length === 0) {
      console.log("No changes to update");
      return;
    }

    axiosCaller
      .put("/user/update", updateData)
      .then((response) => {
        // Update the displayed values with the updated data
        if (updateData.name) setName(updateData.name);
        if (updateData.username) setUsername(updateData.username);
        if (updateData.email) setEmail(updateData.email);

        // Reset the temporary values
        setTempName(name);
        setTempUsername(username);
        setTempEmail(email);

        Alert.alert("Update Success!");

        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
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
          <Text
            style={{
              marginBottom: 5,
              color: "black",
              fontSize: 26,
              fontWeight: "bold",
            }}
          >
            My Profile
          </Text>
          <View style={{ flexDirection: "row", marginBottom: 25 }}>
            <View style={styles.profilePicture}></View>
            <View style={{ marginLeft: 25 }}>
              <Text style={styles.nameText}>{name}</Text>
              <Text style={styles.nameText2}>@{username}</Text>
              <Text style={styles.nameText2}>{phoneNumber}</Text>
            </View>
          </View>
          <ScrollView>
            <TitleText>Full Name:</TitleText>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                defaultValue={name}
                style={styles.entryBox}
                onChangeText={(text) => setTempName(text)}
              ></TextInput>
            </View>
            <TitleText>Username:</TitleText>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                defaultValue={username}
                style={styles.entryBox}
                onChangeText={(text) => setTempUsername(text)}
              ></TextInput>
            </View>
            <TitleText>Email:</TitleText>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                defaultValue={email}
                style={styles.entryBox}
                onChangeText={(text) => setTempEmail(text)}
              ></TextInput>
            </View>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleUpdateUserDetails}
            >
              <ButtonText>Update Credentials</ButtonText>
            </TouchableOpacity>
            <TitleText>Preferred method of payment:</TitleText>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 15 }}>
                Venmo
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={styles.icons}
                  source={require("../assets/venmo.png")}
                ></Image>
                <Text
                  style={{
                    color: "#008CFF",
                    fontWeight: "500",
                    fontSize: 18,
                    marginLeft: 10,
                    textDecorationLine: "underline",
                    marginTop: 12,
                  }}
                >
                  Connect your Venmo
                </Text>
              </View>
            </View>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 15 }}>
                Zelle
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={styles.icons}
                  source={require("../assets/zelle.png")}
                ></Image>
                <Text
                  style={{
                    color: "#6D1ED4",
                    fontWeight: "500",
                    fontSize: 18,
                    marginLeft: 10,
                    textDecorationLine: "underline",
                    marginTop: 12,
                  }}
                >
                  Connect your Zelle
                </Text>
              </View>
            </View>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 15 }}>
                Bank Account
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={styles.icons}
                  source={require("../assets/plaid2.png")}
                ></Image>
                <Text
                  style={{
                    color: "black",
                    fontWeight: "500",
                    fontSize: 18,
                    marginLeft: 10,
                    textDecorationLine: "underline",
                    marginTop: 12,
                  }}
                >
                  Connect with Plaid
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
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
  },
  profilePicture: {
    backgroundColor: "orange",
    height: 70,
    width: 70,
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 10,
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  nameText2: {
    fontSize: 14,
    marginTop: 5,
  },
  entryBox: {
    borderWidth: 2,
    borderRadius: 10,
    height: 50,
    width: "100%",
    borderColor: "#CFCFCF",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    fontSize: 18,
  },
  go: {
    height: 40,
    width: 40,
    marginLeft: 15,
    alignSelf: "center",
    marginTop: 20,
  },
  icons: {
    height: 30,
    width: 30,
    alignSelf: "center",
    marginTop: 15,
  },
  plaidIcon: {
    height: 50,
    width: 50,
    alignSelf: "center",
    marginTop: 15,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: "100%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 10,
  },
});

export default ProfileScreen;
