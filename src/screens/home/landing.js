import React, { Component } from "react";
import { ImageBackground, View, StatusBar, Image, Dimensions } from "react-native";
import {
  Container,
  Button,
  H3,
  Text,
  Footer,
  FooterTab,
  Icon,
  Content
} from "native-base";

import styles from "./styles";
import StillBackground from "../stillBackground";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const launchscreenLogo = {
  uri:
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
};

class Landing extends Component {
  static navigationOptions = {
    title: null,
    headerLeft: null,
    header: null
  };
  constructor(props){
    super(props)
    this.state = {

    }
  }
  handleSignUp() {
    const { navigate } = this.props.navigation;
    navigate("Tcs");
  }
  render() {
    return (
      <Container>
        <Image source={require('../../../assets/stillBackground.png')} style={{position: "absolute", zIndex:0,flex: 1 , width: deviceWidth, height: deviceHeight }} />
        <StatusBar barStyle="light-content" />
        {/* <StillBackground> */}
          <View style={styles.logoContainer}>
            <Image source={launchscreenLogo} style={styles.logo} />
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 50,
              backgroundColor: "transparent"
            }}
          >
            <H3 style={styles.text}>App to showcase</H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}>NativeBase components</H3>
            <View style={{ marginTop: 8 }} />
          </View>
          <Content padder>
            <Button
              onPress={() => this.handleSignUp()}
              rounded
              block
              light
              bordered
              style={styles.mb15}
            >
              <Text>Sign up</Text>
            </Button>
            <Button rounded block light style={styles.mb15}>
              <Text>login</Text>
            </Button>
          </Content>
        {/* </StillBackground> */}
      </Container>
    );
  }
}

export default Landing;
