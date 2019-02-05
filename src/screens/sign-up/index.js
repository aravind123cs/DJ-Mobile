import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text, Footer,
  FooterTab, Icon } from "native-base";

import styles from "./styles";
import StillBackground from '../stillBackground'

// const launchscreenBg = url("https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");
const launchscreenLogo = {uri: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}

class Home extends Component {
  static navigationOptions = {
    title:null,
    headerLeft:null,
    header: null
  };
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <StillBackground>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
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
          <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
              <Icon active={this.state.tab1} name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Icon active={this.state.tab3} name="compass" />
              <Text>Compass</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
              <Icon active={this.state.tab4} name="contact" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
        </StillBackground>
      </Container>
    );
  }
}

export default Home;
