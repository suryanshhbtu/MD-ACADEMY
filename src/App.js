
import { Route, Switch } from 'react-router-dom';
import Alert from './Components/UI/Alert';
import MainNavigation from './Components/layout/MainNavigation';
import Achievements from './Pages/Achievements';
import ContactInfo from './Pages/ContactInfo';
import Home from './Pages/Home';
import Location from './Pages/Location';
import OurMission from './Pages/OurMission';
import Staff from './Pages/Staff';
import LoggedInMainNavigation from './LoginComponent/LoggedInMainNavigation';
import StaffManager from './LoggedPages/StaffManager';
import EditNewsAndEvents from './LoggedPages/EditNewsAndEvents';
import AddImages from './LoggedPages/AddImages';
import ContactDeveloper from './LoggedPages/ContactDeveloper';
import LoginHome from './LoggedPages/LoginHome';
import EditNoticeBoard from './LoggedPages/EditNoticeBoard';
import Login_signUp from './Pages/Login_signUp';
import AuthContext from './Context/auth_context';
import { useContext, useEffect, useState } from 'react';

function App() {
  const ctx = useContext(AuthContext);
  
  return (
      <div>
        <Alert message="This Site is Under Construction Phase." />


        {ctx.isLoggedIn &&
          <div>
            <LoggedInMainNavigation />
            <Switch>
              <Route path="/" exact>
                <LoginHome />
              </Route>
              <Route path="/staffManager">
                <StaffManager />
              </Route>
              <Route path="/editNewsAndEvents">
                <EditNewsAndEvents />
              </Route>
              <Route path="/editNoticeBoard">
                <EditNoticeBoard />
              </Route>
              <Route path="/addImages">
                <AddImages />
              </Route>
              <Route path="/contactDeveloper">
                <ContactDeveloper />
              </Route>
              <Route path="*">
                <div>Unknown Error Occured</div>
              </Route>
            </Switch>
          </div>
        }


        {!ctx.isLoggedIn &&
          <div>
            <MainNavigation />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/ContactInfo">
                <ContactInfo />
              </Route>
              <Route path="/Staff">
                <Staff />
              </Route>
              <Route path="/OurMission">
                <OurMission />
              </Route>
              <Route path="/Achievements">
                <Achievements />
              </Route>
              <Route path="/Location">
                <Location />
              </Route>
              <Route path="/login_signup">
                <Login_signUp />
              </Route>
              <Route path="*">
                <div>Unknown Error Occured</div>
              </Route>
            </Switch>
          </div>}
      </div >
  );
}

export default App;
