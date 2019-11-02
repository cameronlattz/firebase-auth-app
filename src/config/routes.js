import React from 'react';
import { Scene, Router, ActionConst, Stack } from 'react-native-router-flux';

// Splash Component
import Splash from '../components/Splash';

// Authentication Scenes
import Welcome from '../modules/auth/scenes/Auth/Welcome';
import Register from '../modules/auth/scenes/Auth/Register';
import CompleteProfile from '../modules/auth/scenes/Auth/CompleteProfile';
import Login from '../modules/auth/scenes/Auth/Login';
import ForgotPassword from '../modules/auth/scenes/Auth/ForgotPassword';
import Home from '../modules/home/scenes/Home';

// Import Store, actions
import store from '../redux/store';
import { checkLoginStatus } from '../modules/auth/actions';

import { color, navTitleStyle } from '../styles/theme';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
      isLoggedIn: false,
      exist: false // indicates if user exist in realtime database
    };
  }

  componentDidMount() {
    const component = this;
    store.dispatch(
      checkLoginStatus((exist, isLoggedIn) => {
        component.setState({ isReady: true, exist, isLoggedIn });
      })
    );
  }

  render() {
    const { isLoggedIn, isReady, exist } = this.state;
    if (!isReady) {
      return <Splash />;
    }

    return (
      <Router>
        <Scene
          key="root"
          hideNavBar
          navigationBarStyle={{ backgroundColor: '#fff' }}
          titleStyle={navTitleStyle}
          backButtonTintColor={color.black}
        >
          <Stack key="Auth" initial={!isLoggedIn}>
            <Scene key="Welcome" component={Welcome} title="" initial hideNavBar />
            <Scene key="Register" component={Register} title="Register" back />
            <Scene
              key="CompleteProfile"
              component={CompleteProfile}
              title="Select Username"
              back={false}
            />
            <Scene key="Login" component={Login} title="Log In" />
            <Scene key="ForgotPassword" component={ForgotPassword} title="Reset Password" />
          </Stack>
          <Stack key="Main" initial={isLoggedIn}>
            <Scene key="Home" component={Home} title="Home" initial type={ActionConst.REPLACE} />
          </Stack>
        </Scene>
      </Router>
    );
  }
}
