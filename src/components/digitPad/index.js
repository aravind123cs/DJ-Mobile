import React, { Component } from "react";
import PropTypes from "prop-types";
import {} from "react-native";
import { Text, Button, View } from "native-base";
export default class DigitPad extends Component {
  static propTypes = {
    onPress: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  onPress(value) {
    this.props.onPress && this.props.onPress(value);
  }

  render() {
    const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, "Reset", 0, "Del"];
    const DIGIT_PER_ROW = 3;

    let pads = [],
      padIndex = 0;

    for (let row = 0; row < Math.ceil(DIGITS.length / DIGIT_PER_ROW); row++) {
      let rowPads = [];
      for (let column = 0; column < DIGIT_PER_ROW; column++) {
        const value = DIGITS[padIndex];
        let padStyle = "flexible stretch";
        if (column == DIGIT_PER_ROW - 1) padStyle += " last";

        if (!isNaN(value)) {
          rowPads.push(
            <Button
              bordered
              primary
              key={"pad" + padIndex}
              style={{
                flex: 1,
                alignItems: "center",
                margin: 5,
                justifyContent: "center"
              }}
              onPress={() => this.onPress(value)}
            >
              <Text>
                {value}
              </Text>
            </Button>
          );
        } else {
          padStyle += " digit-null";
          rowPads.push(
            <Button
              bordered
              primary
              key={"pad" + padIndex}
              style={{
                flex: 1,
                alignItems: "center",
                margin: 5,
                justifyContent: "center"
              }}
              onPress={() => {
                if (value) this.onPress(value);
              }}
            >
              <Text>
                {value}
              </Text>
            </Button>
          );
        }

        padIndex++;
      }
      pads.push(
        <View key={row} style={{ flex: 1, flexDirection: "row" }}>
          {rowPads}
        </View>
      );
    }

    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        {pads}
      </View>
    );
  }
}
