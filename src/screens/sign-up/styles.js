const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    width: deviceWidth,
    paddingLeft: 20,
    paddingRight: 20,
    height: 100,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    // position: "absolute",
    // left: Platform.OS === "android" ? 40 : 50,
    // top: Platform.OS === "android" ? 35 : 60,
    minWidth: 150,
    maxWidth: deviceWidth - 40,
    minHeight: 100,
    // paddingLeft: 20,
    // paddingRight: 20,
    resizeMode: "contain"
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  },
  mb15: {
    flexDirection: "row"
  },
  captureContainer:{
    height: deviceHeight/1.5,
    marginTop:10
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    // flex: 0,
    // backgroundColor: '#fff',
    // borderRadius: 5,
    // padding: 15,
    // paddingHorizontal: 20,
    // alignSelf: 'center',
    // margin: 20
  },
  imagePreview:{
    
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'  }

};
