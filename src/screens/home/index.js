import React, { Component } from "react";
import {
  ImageBackground,
  View,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
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
import Video from "react-native-video";
import styles from "./styles";
import StillBackground from "../stillBackground";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

// const launchscreenBg = url("https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");
const launchscreenLogo = {
  uri:
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
};

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: null,
      headerLeft: <Icon name="menu" onPress={() => params.handleOpen()} />
    };
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.navigation.setParams({ handleOpen: this.handleOpenDrawer });
  }
  handleOpenDrawer = () => {
    this.props.navigation.navigate("DrawerOpen");
  };
  render() {
    return (
      <Container>
        <Video
          source={require("../../../assets/background.mp4")} // Can be a URL or a local file.
          rate={1} // 0 is paused, 1 is normal.
          muted={true} // Mutes the audio entirely.
          paused={false}                 // Pauses playback entirely.
          resizeMode="cover" // Fill the whole screen at aspect ratio.
          repeat={true} // Repeat forever.
          playInBackground={true} // Audio continues to play when app entering background.
          playWhenInactive={true} // [iOS] Video continues to play when control or notification center are shown.
          progressUpdateInterval={250.0} // [iOS] Interval to fire onProgress (default to ~250ms)
          style={{
            position: "absolute",
            zIndex: 0,
            flex: 1,
            width: deviceWidth,
            height: deviceHeight
          }}
        />
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
        {/* </StillBackground> */}
      </Container>
    );
  }
}

export default Home;
