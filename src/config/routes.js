import React from 'react';
import { Drawer, Scene, Router, Stack, Actions, Tabs } from 'react-native-router-flux';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Splash Component
import Splash from '../components/Splash';

// Authentication Scenes
import Welcome from '../modules/auth/scenes/Auth/Welcome';
import Register from '../modules/auth/scenes/Auth/Register';
import CompleteProfile from '../modules/auth/scenes/Auth/CompleteProfile';
import Login from '../modules/auth/scenes/Auth/Login';
import ForgotPassword from '../modules/auth/scenes/Auth/ForgotPassword';
import Home from '../modules/home/scenes/Home/Home';
import Statistics from '../modules/home/scenes/Home/Profile/Statistics';
import ProfileSettings from '../modules/home/scenes/Home/Profile/Settings';
import Create from '../modules/home/scenes/Home/Create';
import Read from '../modules/home/scenes/Home/Read';
import Settings from '../modules/home/scenes/Home/Settings';
import DrawerContent from '../modules/home/scenes/Home/DrawerContent';
import RightButton from '../modules/home/components/RightButton';

// Import Store, actions
import store from '../redux/store';
import { checkLoginStatus } from '../modules/auth/actions';

import { appName, color } from '../styles/theme';
import styles from './styles';

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

    function renderRightButtons(...namesAndActions) {
      return (
        <View style={styles.rightButtonContainer}>
          {namesAndActions.map(nameAndAction => {
            const iconName = Object.keys(nameAndAction)[0];
            const handler = nameAndAction[iconName];
            return <RightButton onPressHandler={handler} iconName={iconName} key={iconName} />;
          })}
        </View>
      );
    }

    function renderLeftButton() {
      return (
        <TouchableOpacity onPress={Actions.drawerOpen} style={styles.leftButton}>
          <Icon size={32} name="angle-right" />
        </TouchableOpacity>
      );
    }

    return (
      <Router>
        <Scene key="root">
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
              title={appName}
              titleStyle={styles.titleStyle}
              renderLeftButton={renderLeftButton}
              renderRightButton={renderRightButtons({ wrench: () => Actions.Settings.call() })}
            >
              <Scene key="Home" component={Home} title={appName} initial />
              <Scene key="Settings" component={Settings} title="Settings" />
              <Scene key="Create" component={Create} title="New Message" />
              <Scene key="Read" component={Read} title="Read Messages" />
              <Tabs title="Profile" labelStyle={styles.tabLabelStyle} activeTintColor={color.black}>
                <Scene
                  key="Statistics"
                  component={Statistics}
                  tabBarLabel="Statistics"
                  title="Profile"
                />
                <Scene
                  key="ProfileSettings"
                  component={ProfileSettings}
                  tabBarLabel="Settings"
                  title="Profile"
                  initial
                />
              </Tabs>
            </Drawer>
          </Stack>
        </Scene>
      </Router>
    );
  }
}
