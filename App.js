import React, { Component } from 'react';
import Application from './src/App';
import { Actions, Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import LoginPage from './src/components/login/login.js';

const RouterWithRedux = connect()(Router);
import reducers from './src/reducers';
// other imports...

// create store...
const middleware = [/* ...your middleware (i.e. thunk) */];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);
const scenes = Actions.create(
        <Scene key="root">
          <Scene key="LoginPage" component={LoginPage} title="LoginPage" initial={true} />
          <Scene key="Home" component={LoginPage} title="Home"/>
        </Scene>
    );

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux hideNavBar='true' scenes={scenes}/>
      </Provider>
    );
  }
}

export default App;