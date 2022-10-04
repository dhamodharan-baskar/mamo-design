import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './Containters/Dashboard'
import InvoiceForm from './Containters/Invoice'
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import MobileHeader from './Components/MobileHeader'

function App(props) {
return (
  <div>
    <Header />
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard {...props}/>}  />
        <Route path="/invoice" element={<InvoiceForm {...props}/>} />
      </Routes>
    </div>
  </div>
);
}

export default App;
