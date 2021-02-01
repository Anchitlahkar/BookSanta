import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  KeyboardAvoidingView,
} from "react-native";
import firebase from "firebase";
import { ScrollView } from "react-native-gesture-handler";

export default class SearchScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      contact: "",
      confirmPassword: "",
      isModalVisible: false,
    };
  }

  userLogin = (email, password) => {
    console.log("Login:  " + email + " : " + password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        return alert("Login Successfully");
      })
      .catch(function (error) {
        console.log(error);
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  userSignUp = (email, password) => {
    console.log("SignUp:  " + email + " : " + password);
    firebase

      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        return alert("User Add Successfully");
      })
      .catch(function (error) {
        console.log(error);
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  showModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}
      >
        <View>
          <ScrollView>
            <KeyboardAvoidingView>
              <Text>Registration</Text>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    );
  };

  render() {
    return (
      <View
        style={{
          height: "100%",
          alignItems: "center",
          backgroundColor: "smokeWhite",
          width: "100%",
        }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>Book Santa</Text>
        </View>
        <Image
          style={styles.logo}
          source={require("../assets/BookSanta.jpg")}
        />

        <TextInput
          style={[styles.textInputStyle, { marginTop: "10%" }]}
          placeholder="    Email ID"
          keyboardType="email-address"
          onChangeText={(text) => {
            this.setState({
              email: text,
            });
          }}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="    Password"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
          }}
        />

        <TouchableOpacity
          style={styles.ButtonStyle}
          onPress={() => {
            this.userLogin(this.state.email, this.state.password);
          }}
        >
          <Text style={styles.ButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ButtonStyle}
          onPress={() => {
            this.userSignUp(this.state.email, this.state.password);
          }}
        >
          <Text style={styles.ButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    margin: 10,
    borderRadius: 15,
    height: 35,
    width: "80%",
    borderBottomWidth: 5,
    backgroundColor: "lightgrey",
  },
  textContainer: {
    backgroundColor: "#464840",
    width: "100%",
  },
  text: {
    color: "white",
    padding: 20,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  ButtonStyle: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: 100,
    height: 35,
    marginLeft: 10,
  },
  ButtonText: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
});
