
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
import EditUpcommingEvents from './LoggedPages/EditUpcommingEvents';
import AddImages from './LoggedPages/AddImages';
import ContactDeveloper from './LoggedPages/ContactDeveloper';
import LoginHome from './LoggedPages/LoginHome';

function App() {
  const isLoggedin = false;
  return (
    <div>
      <Alert message="This Site is Under Construction Phase." />


      {isLoggedin &&
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
            <Route path="/editUpcommingEvents">
              <EditUpcommingEvents />
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


      {!isLoggedin &&
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
            <Route path="*">
              <div>Unknown Error Occured</div>
            </Route>
          </Switch>
        </div>}
    </div >
  );
}

export default App;
