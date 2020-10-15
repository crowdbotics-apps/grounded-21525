import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging10143152Navigator from '../features/Messaging10143152/navigator';
import EmailAuth11143151Navigator from '../features/EmailAuth11143151/navigator';
import Settings143136Navigator from '../features/Settings143136/navigator';
import Settings143102Navigator from '../features/Settings143102/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
