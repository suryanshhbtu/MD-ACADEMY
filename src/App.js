
import { Route, Switch } from 'react-router-dom';
import Alert from './Components/UI/Alert';
import MainNavigation from './Components/layout/MainNavigation';
import Achievements from './Pages/Achievements';
import ContactInfo from './Pages/ContactInfo';
import Home from './Pages/Home';
import Location from './Pages/Location';
import OurMission from './Pages/OurMission';
import Staff from './Pages/Staff';

function App() {
  return (
    <div>
      <MainNavigation />
      <Alert message="This Site is Under Construction Phase." />
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
          <Location/>
        </Route>
        <Route path="*">
          <div>Unknown Error Occured</div>
        </Route>
      </Switch>
    </div >
  );
}

export default App;
