import React from 'react';
import { Drawer, Scene, Router, Stack } from 'react-native-router-flux';

// Splash Component
import Splash from '../components/Splash';

// Authentication Scenes
import Welcome from '../modules/auth/scenes/Auth/Welcome';
import Register from '../modules/auth/scenes/Auth/Register';
import CompleteProfile from '../modules/auth/scenes/Auth/CompleteProfile';
import Login from '../modules/auth/scenes/Auth/Login';
import ForgotPassword from '../modules/auth/scenes/Auth/ForgotPassword';
import Home from '../modules/home/scenes/Home/Home';
import Profile from '../modules/home/scenes/Home/Profile';
import Create from '../modules/home/scenes/Home/Create';
import Read from '../modules/home/scenes/Home/Read';
import DrawerContent from '../modules/home/scenes/Home/DrawerContent';

// Import Store, actions
import store from '../redux/store';
import { checkLoginStatus } from '../modules/auth/actions';

import { navTitleStyle, window, appName } from '../styles/theme';

export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
      isLoggedIn: false
    };
  }

  componentDidMount() {
    const component = this;
    store.dispatch(
      checkLoginStatus((exist, isLoggedIn) => {
        component.setState({ isReady: true, isLoggedIn });
      })
    );
  }

  render() {
    const { isLoggedIn, isReady } = this.state;
    if (!isReady) {
      return <Splash />;
    }

    return (
      <Router>
        <Scene key="root" titleStyle={navTitleStyle}>
          <Stack key="Auth" initial={!isLoggedIn} hideNavBar>
            <Scene key="Welcome" component={Welcome} title="" initial />
            <Scene key="Register" component={Register} title="Register" back />
            <Scene key="CompleteProfile" component={CompleteProfile} title="Select Username" />
            <Scene key="Login" component={Login} title="Log In" back />
            <Scene key="ForgotPassword" component={ForgotPassword} title="Reset Password" back />
          </Stack>
          <Stack key="Main" initial={isLoggedIn} hideNavBar>
            <Drawer
              key="drawer"
              contentComponent={DrawerContent}
              drawer
              drawerWidth={window.width * 0.67}
              hideDrawerButton
              headerMode="none"
              title={appName}
            >
              <Scene key="Home" component={Home} title="Home" initial />
              <Scene key="Create" component={Create} title="New Message" back />
              <Scene key="Read" component={Read} title="Read Messages" back />
              <Scene key="Profile" component={Profile} title="Profile" back />
            </Drawer>
          </Stack>
        </Scene>
      </Router>
    );
  }
}
