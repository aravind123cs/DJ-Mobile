import React, { Component } from "react";
import { ImageBackground, View, StatusBar, Keyboard } from "react-native";
import {
  Container,
  Button,
  H3,
  Text,
  Footer,
  FooterTab,
  Icon,
  Content,
  Form,
  Item,
  Label,
  Input
} from "native-base";

import styles from "./styles";

class ScanSelector extends Component {
  static navigationOptions = {
    title: "Scan document"
    // headerLeft:null,
    // header: null
  };
  // handleContinue() {
  //   Keyboard.dismiss()
  //   const { navigate } = this.props.navigation;
  //   navigate("Selfie");
  // }
  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <View >
            <Text>Scan passport</Text>
          </View>
          <View >
            <Text>Scan Aadhar card</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default ScanSelector;
