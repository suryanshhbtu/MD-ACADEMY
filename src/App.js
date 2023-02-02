
import Alert from './Components/layout/Alert';
import CardView from './Components/layout/CardView';
import Carouse from './Components/layout/Carouse';
import MainNavigation from './Components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Alert message="This Site is Under Construction Phase." />
      <div className="container.fluid pl-5 pr-5 pt-4" >
        <div className="row">
          <div className="col">
            <CardView />
          </div>
          <div className="col-6">
            <Carouse/>
          </div>
          <div className="col">
            <CardView />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
