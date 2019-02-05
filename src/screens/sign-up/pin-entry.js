import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  View,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";
import SecureInput from "../../components/secureInput";
import DigitPad from "../../components/digitPad";
import styles from "./styles";

class PinEntry extends Component {
  static navigationOptions = {
    title: "Pin entry"
    // headerLeft:null,
    // header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      valueAgain: "",
      repeating: false,
      error: false
    };
  }
  onPadPress(value) {
    if (value == "Reset") {
      this.setState({
        value: "",
        valueAgain: "",
        repeating: false,
        error: false
      });

      return;
    }

    let newValue;
    if (!this.state.repeating) {
      if (value == "Del") {
        newValue = this.state.value.substring(0, this.state.value.length - 1);
      } else newValue = this.state.value + value;

      if (newValue.length == 6) {
        this.setState({ value: newValue, repeating: true, error: false });
      } else this.setState({ value: newValue, error: false });
    } else {
      if (value == "Del") {
        newValue = this.state.valueAgain.substring(
          0,
          this.state.valueAgain.length - 1
        );
      } else newValue = this.state.valueAgain + value;

      if (newValue.length > 6) return;

      this.setState({ valueAgain: newValue, error: false });

      // compare two values and show error if needed
      if (newValue.length == 6) {
        if (this.state.value !== newValue) {
          this.setState({
            error: true,
            value: "",
            valueAgain: "",
            repeating: false
          });
        } else {
          this.setState({ error: false });
          const { navigate } = this.props.navigation;
          navigate("Home");
        }
      }
    }
  }
  render() {
    console.log(this.state);
    return (
      <Container style={styles.container}>
        <Content padder>
          {!this.state.repeating
            ? <View>
                <View
                  style={{
                    marginVertical: 20,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text>Enter security pin</Text>
                </View>
                <SecureInput length={6} value={this.state.value} />
              </View>
            : <View>
                <View
                  style={{
                    marginVertical: 20,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text>Confirm security pin</Text>
                </View>
                <SecureInput length={6} value={this.state.valueAgain} />
              </View>}

          <View
            style={{
              marginVertical: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {this.state.error ? <Text>PINS Do Not Match Try Again</Text> : null}
          </View>
        </Content>

        <Footer
          style={{
            backgroundColor: "transparent",
            height: 220,
            marginBottom: 10
          }}
        >
          <FooterTab style={{ backgroundColor: "transparent" }}>
            <DigitPad onPress={this.onPadPress.bind(this)} />
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default PinEntry;
