import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, Button, View } from "native-base";

const BULLET = "•";
const REVEAL_TIMEOUT = 1000;

export default class SecureInput extends Component {
  static propTypes = {
    setData: PropTypes.func,
    length: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    let digits = [];
    for (let digit = 0; digit < this.props.length; digit++) {
      digits.push(null);
    }

    this.state = { digits, caret: 0, value: null };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      if (this.revealer) {
        clearTimeout(this.revealer);
        this.revealer = null;
      }

      let reveal = null;

      if (nextProps.value) {
        if (nextProps.value.length < this.props.value.length) {
          reveal = false;
        }
      }

      if (nextProps.value.length <= this.props.length)
        this.setData(nextProps.value, reveal);
    }
  }

  setData(value, autoReveal = null) {
    let digits = [];

    if (value == null) {
      for (let digit = 0; digit < this.props.length; digit++) {
        digits.push(null);
      }

      this.setState({ digits, caret: 0, value: null });

      return;
    }

    const caretPos = value.length - 1;

    if (
      autoReveal !== false &&
      (caretPos == 0 || caretPos == this.state.caret + 1)
    ) {
      autoReveal = true;
    }

    digits = this.state.digits.splice();
    for (let digit = 0; digit < this.props.length; digit++) {
      if (
        (!autoReveal && digit < value.length) ||
        (autoReveal && digit < caretPos)
      )
        digits[digit] = BULLET;
      else digits[digit] = null;
    }

    if (autoReveal) {
      const char = value.substr(caretPos);
      digits[caretPos] = char;

      const that = this;

      this.revealer = setTimeout(function() {
        digits[caretPos] = BULLET;
        that.setState({ digits });
      }, REVEAL_TIMEOUT);
    }

    this.setState({ digits, caret: caretPos, value });
  }

  render() {
    return (
      <View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          {this.state.digits.map((digit, index) =>
            <View
              key={index}
              style={{
                flex: 1,
                flexDirection: "row",
                borderRadius: 6,
                borderWidth: 1,
                backgroundColor: "white",
                borderColor: "#C3C3C3",
                marginLeft: 6,
                marginRight: 6,
                height: 50,
                alignItems: "center",
                justifyContent:"center"
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  textAlign: "center"
                }}
              >
                {digit}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}
