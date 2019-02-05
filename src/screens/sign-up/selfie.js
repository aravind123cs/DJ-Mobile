import React, { Component } from "react";
import {
  ImageBackground,
  View,
  StatusBar,
  TouchableOpacity,
  Image
} from "react-native";
import {
  Container,
  Button,
  H3,
  Text,
  Footer,
  FooterTab,
  Content,
  Form,
  Item,
  Label,
  Input
} from "native-base";
import { RNCamera } from "react-native-camera";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

class Selfie extends Component {
  static navigationOptions = {
    title: "Take selfie"
    // headerLeft:null,
    // header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      faceArray: {},
      image: ""
    };
  }
  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.setState({ image: data.base64 });
      console.log(data);
    }
  };
  handleFaceDetected(faceArray) {
    console.log("faceArray");
    console.log(faceArray);
    this.setState({ faceArray: faceArray.faces[0].bounds.origin });
  }
  handleRetake(){
    this.setState({image: ""})
  }
  handleContinue(){
    const { navigate } = this.props.navigation;
    navigate("PinEntry");    
  }
  render() {
    const { image, faceArray } = this.state;
    return (
      <Container style={styles.container}>
        {/* <Content padder> */}
        {image == ""
          ? <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style={styles.preview}
              autoFocus={RNCamera.Constants.AutoFocus.on}
              autoFocusPointOfInterest={faceArray}
              type={RNCamera.Constants.Type.front}
              onFacesDetected={this.handleFaceDetected.bind(this)}
              faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.fast}
              flashMode={RNCamera.Constants.FlashMode.off}
              permissionDialogTitle={"Permission to use camera"}
              permissionDialogMessage={
                "We need your permission to use your camera phone"
              }
              onGoogleVisionBarcodesDetected={({ barcodes }) => {
                console.log(barcodes);
              }}
            />
          : <Image
              style={styles.imagePreview}
              source={{
                uri: "data:image/png;base64," + image
              }}
            />}
        {/* </Content> */}
        {image == ""
          ? <Footer >
              <FooterTab style={{ backgroundColor: "#FFF" }}>
                <Button onPress={this.takePicture.bind(this)} dark transparent>
                  <Icon name="camera" size={36} />
                </Button>
              </FooterTab>
            </Footer>
          : <Footer>
              <FooterTab style={{ backgroundColor: "#FFF" }}>
                <Button
                  iconLeft
                  transparent
                  onPress={() => {
                    this.handleRetake();
                  }}
                  style={styles.mb15}
                >
                  {/* <Icon name="thumbs-up" size={26} /> */}
                  <Text style={{ fontSize: 16 }}>Retake</Text>
                </Button>
                <Button
                  iconLeft
                  transparent
                  onPress={() => {
                    this.handleContinue();
                  }}
                  style={styles.mb15}
                >
                  {/* <Icon name="thumbs-up" size={26} /> */}
                  <Text style={{ fontSize: 16 }}>Continue</Text>
                </Button>
              </FooterTab>
            </Footer>}
      </Container>
    );
  }
}

export default Selfie;
