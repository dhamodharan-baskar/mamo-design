import Header from './Components/Header'
import Navigation from './Components/Navigation'
import MobileHeader from './Components/MobileHeader'
import Router from './Router'
import './index.scss';

function App(props) {
return (
  <div className="app-layout">
    <div className="app-tab-bar">
      <Navigation />
    </div>
    <div className="app-content">
      <MobileHeader />
      <Header />
      <Router />
    </div>
  </div>
);
}

export default App;
