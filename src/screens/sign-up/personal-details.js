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

class PersonalDetails extends Component {
  static navigationOptions = {
    title: "Personal details"
    // headerLeft:null,
    // header: null
  };
  handleContinue() {
    Keyboard.dismiss()
    const { navigate } = this.props.navigation;
    navigate("Selfie");
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Phone number</Label>
              <Input />
            </Item>
          </Form>
        </Content>

        <Footer>
          <FooterTab style={{ backgroundColor: "#FFF" }}>
            <Button
            iconLeft
              transparent
              onPress={() => {
                this.handleContinue();
              }}
              // style={styles.mb15}
            >
              <Text style={{fontSize: 14}}>Continue</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default PersonalDetails;
