import LoginAuthentication from '../screens/Login/Authentication';
// import Root from '../screens/Root';
import DailyCardDetail from '../screens/DailyCard/Detail';
import TestLogin from '../screens/Login/TestLogin';
import Home from '../screens/Home';
import NotHome from '../screens/NotHome';

export default {
  routes: {
    TestLogin: { screen: TestLogin },
    Home: { screen: Home },
    NotHome: { screen: NotHome },
    DailyCard: { screen: DailyCardDetail },
    // Home: { screen: Root },
    Authentication: { screen: LoginAuthentication },
  }
};
