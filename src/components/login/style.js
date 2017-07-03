
const React = require('react-native');

const { StyleSheet } = React;

export default {
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
  },
  mt15: {
    paddingLeft: 15,
  },
  mb20: {
    marginRight: 20,
  },
  image: {
    flex: 1,
    aspectRatio: 0.7, 
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  btn: {
    marginTop: 20,
    alignSelf: 'center',
  },
  viewStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
};