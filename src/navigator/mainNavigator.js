import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen28143217Navigator from '../features/BlankScreen28143217/navigator';
import Settings143183Navigator from '../features/Settings143183/navigator';
import UserProfile6143161Navigator from '../features/UserProfile6143161/navigator';
import SignIn44143158Navigator from '../features/SignIn44143158/navigator';
import Settings6143156Navigator from '../features/Settings6143156/navigator';
import Camera8143154Navigator from '../features/Camera8143154/navigator';
import Feed9143153Navigator from '../features/Feed9143153/navigator';
import Messaging10143152Navigator from '../features/Messaging10143152/navigator';
import EmailAuth11143151Navigator from '../features/EmailAuth11143151/navigator';
import Settings143136Navigator from '../features/Settings143136/navigator';
import Settings143102Navigator from '../features/Settings143102/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen28143217: { screen: BlankScreen28143217Navigator },
Settings143183: { screen: Settings143183Navigator },
UserProfile6143161: { screen: UserProfile6143161Navigator },
SignIn44143158: { screen: SignIn44143158Navigator },
Settings6143156: { screen: Settings6143156Navigator },
Camera8143154: { screen: Camera8143154Navigator },
Feed9143153: { screen: Feed9143153Navigator },
Messaging10143152: { screen: Messaging10143152Navigator },
EmailAuth11143151: { screen: EmailAuth11143151Navigator },
Settings143136: { screen: Settings143136Navigator },
Settings143102: { screen: Settings143102Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
