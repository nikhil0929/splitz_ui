import React, { useState, useRef, useContext } from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../config/colors";
import HeadingText from "../components/HeadingText";
import GreyText from "../components/GreyText";
import TitleText from "../components/TitleText";
import ButtonText from "../components/ButtonText";
import axios from "axios";
import { AxiosContext } from "../axiosCaller";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const CreateGroupScreen = ({ route }) => {
  console.log("CreateGroupScreen");

  const [isCreatingGroup, setIsCreatingGroup] = useState(true); // New state to toggle between creating and joining

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Image
          style={styles.logo}
          source={require("../assets/splitzofficiallogo.png")}
        />
      </SafeAreaView>
      <View style={styles.verificationBox}>
        <KeyboardAwareScrollView>
          <View flexDirection="row" alignItems="center" justifyContent="center">
            <TouchableOpacity
              style={
                isCreatingGroup ? styles.selectedTab : styles.unselectedTab
              }
              onPress={() => {
                setIsCreatingGroup(true);
              }}
            >
              <Text
                style={
                  isCreatingGroup ? styles.selectedText : styles.unselectedText
                }
              >
                Create Group
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                !isCreatingGroup ? styles.selectedTab : styles.unselectedTab
              }
              onPress={() => {
                setIsCreatingGroup(false);
              }}
            >
              <Text
                style={
                  !isCreatingGroup ? styles.selectedText : styles.unselectedText
                }
              >
                Join Group
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
        {isCreatingGroup ? <CreateGroupTab /> : <JoinGroupTab />}
      </View>
    </View>
  );
};

const CreateGroupTab = () => {
  const inputRef = useRef();
  const secondBox = useRef();

  const axiosCaller = useContext(AxiosContext);
  const navigation = useNavigation();

  const [fullGroupName, setFullGroupName] = useState("");
  const [password, setPassword] = useState("");

  const handleGroupCreationAction = async () => {
    const data = {
      room_name: fullGroupName,
      room_password: password,
    };

    axiosCaller
      .post("/room/create", data)
      .then((response) => {
        console.log(response.data);
        Alert.alert("Create Success!", "", [
          {
            text: "Continue",
            onPress: () =>
              navigation.navigate("GroupDetailsStack", {
                screen: "GroupDetails", // Specify the initial route name
                params: { room: response.data }, // Pass the room parameter to the initial route
              }),
          },
        ]);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.log("Error Response");
          console.log(error.response.data);
        } else if (error.request) {
          console.log("Error Request");
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        Alert.alert("Failed Create!");
      });
  };
  return (
    <View>
      <HeadingText>Let's get a new group started!</HeadingText>
      <GreyText>Create one first, then add in bills.</GreyText>

      <TitleText>Group Name:</TitleText>
      <TextInput
        style={styles.phoneNumberBox}
        ref={inputRef}
        value={fullGroupName}
        autoCapitalize="words"
        onChangeText={(text) => setFullGroupName(text)}
        onSubmitEditing={() => {
          secondBox.current.focus();
        }}
      />

      <TitleText>Set a password:</TitleText>
      <TextInput
        style={styles.phoneNumberBox}
        ref={secondBox}
        value={password}
        placeholder={"(Optional)"}
        onChangeText={(text) => setPassword(text)}
        keyboardType="ascii-capable"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={handleGroupCreationAction}
      >
        <ButtonText>Continue</ButtonText>
      </TouchableOpacity>
    </View>
  );
};

const JoinGroupTab = () => {
  const inputRef = useRef();
  const secondBox = useRef();

  const axiosCaller = useContext(AxiosContext);
  const navigation = useNavigation();

  const [groupCode, setGroupCode] = useState("");
  const [password, setPassword] = useState("");

  const handleGroupJoinAction = async () => {
    const data = {
      room_code: groupCode,
      room_password: password,
    };

    axiosCaller
      .post("/room/join", data)
      .then((response) => {
        console.log(response.data);
        // navigation.navigate("GroupDetails");
        Alert.alert("Join Success!", "", [
          {
            text: "Continue",
            onPress: () =>
              navigation.navigate("GroupDetailsStack", {
                screen: "GroupDetails", // Specify the initial route name
                params: { room: response.data }, // Pass the room parameter to the initial route
              }),
          },
        ]);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.log("Error Response");
          console.log(error.response.data);
        } else if (error.request) {
          console.log("Error Request");
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        Alert.alert("Failed Join!");
      });
  };
  return (
    <View>
      <HeadingText>Let's get you into a group!</HeadingText>
      <GreyText>Join in a group to see and edit bills.</GreyText>
      <TitleText>Group Code:</TitleText>
      <TextInput
        style={styles.phoneNumberBox}
        ref={inputRef}
        value={groupCode}
        autoCapitalize="words"
        onChangeText={(text) => setGroupCode(text)}
        onSubmitEditing={() => {
          secondBox.current.focus();
        }}
      />

      <TitleText>Enter password:</TitleText>
      <TextInput
        style={styles.phoneNumberBox}
        ref={secondBox}
        value={password}
        placeholder={"(Optional)"}
        onChangeText={(text) => setPassword(text)}
        keyboardType="ascii-capable"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={handleGroupJoinAction}
      >
        <ButtonText>Continue</ButtonText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    justifyContent: "flex-end",
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignContent: "center",
    width: screenWidth * 0.6,
    height: screenHeight * 0.1,
    alignSelf: "center",
  },
  verificationBox: {
    flex: 1,
    backgroundColor: colors.white,
    alignContent: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    paddingTop: 40,
    width: screenWidth,
  },
  phoneNumberBox: {
    borderWidth: 2,
    borderColor: "#CFCFCF",
    borderRadius: 10,
    width: "100%",
    height: 60,
    marginTop: 25,
    marginBottom: 30,
    flexDirection: "row",
    fontSize: 20,
    padding: 10,
  },

  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  selectedTab: {
    width: 130,
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
  unselectedTab: {
    width: 130,
    height: 40,
    backgroundColor: "transparent",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    marginBottom: 25,
  },
  selectedText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
  },
  unselectedText: {
    fontSize: 16,
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default CreateGroupScreen;
