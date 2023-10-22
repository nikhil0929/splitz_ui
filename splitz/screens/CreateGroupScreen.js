import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../config/colors";
import HeadingText from "../components/HeadingText";
import GreyText from "../components/GreyText";
import TitleText from "../components/TitleText";
import ButtonText from "../components/ButtonText";

const CreateGroupScreen = ({ route }) => {
  const { baseURL } = route.params;
  const navigation = useNavigation();
  const inputRef = useRef();
  const secondBox = useRef();

  const [fullGroupName, setFullGroupName] = useState("");
  const [password, setPassword] = useState("");
  const [isCreatingGroup, setIsCreatingGroup] = useState(true); // New state to toggle between creating and joining

  const handleOnPress1 = () => {
    console.log(fullGroupName + ";" + password);
  };

  const handleOnPress2 = () => {
    Alert.alert("Hold Up", "y r u gey?", [{ text: "bcuz" }, { text: "idk" }]);
  };

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
              style={isCreatingGroup ? styles.clickBox : styles.otherBox}
              onPress={() => setIsCreatingGroup(true)}
            >
              <Text
                style={isCreatingGroup ? styles.mainText : styles.otherText}
              >
                Create Group
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={!isCreatingGroup ? styles.clickBox : styles.otherBox}
              onPress={() => setIsCreatingGroup(false)}
            >
              <Text
                style={!isCreatingGroup ? styles.mainText : styles.otherText}
              >
                Join Group
              </Text>
            </TouchableOpacity>
          </View>

          {isCreatingGroup ? (
            <>
              <HeadingText>Let's get a new group started!</HeadingText>
              <GreyText>Create one first, then add in bills.</GreyText>
            </>
          ) : (
            <>
              <HeadingText>Let's get you into a group!</HeadingText>
              <GreyText>Join in a group to see and edit bills.</GreyText>
            </>
          )}

          <TitleText>{isCreatingGroup ? "Group Name:" : "Group ID:"}</TitleText>
          <View style={styles.phoneNumberBox}>
            <TextInput
              style={styles.nameInput}
              ref={inputRef}
              value={fullGroupName}
              keyboardType="ascii-capable"
              autoCapitalize="words"
              onChangeText={(text) => setFullGroupName(text)}
              onSubmitEditing={() => {
                secondBox.current.focus();
              }}
            />
          </View>

          <TitleText>
            {isCreatingGroup ? "Set a password:" : "Enter password:"}
          </TitleText>
          <View style={styles.phoneNumberBox}>
            <TextInput
              style={styles.nameInput}
              ref={secondBox}
              value={password}
              placeholder={isCreatingGroup ? "(Optional)" : "(If applicable)"}
              onChangeText={(text) => setPassword(text)}
              keyboardType="ascii-capable"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() =>
              navigation.navigate("GroupDetails", { baseURL: baseURL })
            }
          >
            <ButtonText>Continue</ButtonText>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    justifyContent: "flex-end",
    flex: 1,
  },
  logo: {
    marginTop: 30,
    marginBottom: 40,
    justifyContent: "center",
    alignContent: "center",
    width: "70%",
    height: 100,
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
  },
  phoneNumberBox: {
    borderWidth: 2,
    borderColor: "#CFCFCF",
    borderRadius: 10,
    width: 350,
    height: 60,
    marginTop: 25,
    marginBottom: 30,
    flexDirection: "row",
  },
  nameInput: {
    fontSize: 20,
    padding: 10,
    marginLeft: 5,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: 355,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  clickBox: {
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

export default CreateGroupScreen;
