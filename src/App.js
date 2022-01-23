import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AnnouncementsPage from './components/ads/AnnouncementsPage/AnnouncementsPage';
import NewAdsPage from './components/ads/NewAdsPage/NewAdsPage'
import PrivateRoute from './components/auth/PrivateRoute'
// import Ads from './components/ads/AdPage/Ads'

import LoginPage from './components/auth/LoginPage'
import { useState } from 'react';
import { logout } from './components/auth/service';

import { AuthContextProvider } from './components/auth/context';
import AdsDetails from './components/ads/AdPage/AdsDetails';


function App(isInitiallyLogged) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    logout().then(() => setIsLogged(false));
  };

  return (
    <Router>
      <AuthContextProvider value={{ isLogged, handleLogout, handleLogin }
      } >
        <div className="app" >
          {
            <Switch>
              {/* <Route path="/login" component={LoginPage} /> */}
              {/* //Otra forma de pasar routes con funcion */}
              <Route path="/login">
                {routeProps => <LoginPage {...routeProps} />}
              </Route>
              #TODO cambiar ruta para private, ruta del adpage
              <PrivateRoute path="/adverts/new" component={NewAdsPage} />
              <PrivateRoute path="/adverts/:id" component={AdsDetails} />
              <PrivateRoute path="/adverts" component={AnnouncementsPage} />
              <Route exact path="/">
                <Redirect to="/adverts" />
              </Route>
              <Route>
                <div> 404 Found Page</div>
              </Route>
            </Switch>
          }
        </div>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
