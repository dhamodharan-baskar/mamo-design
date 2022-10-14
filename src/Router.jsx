import { Routes, Route } from "react-router-dom";
import Dashboard from './Containters/Dashboard'
import InvoiceForm from './Containters/Invoice'
import { useNavigate } from "react-router-dom";

const Router = (props) => {
const _navigate = useNavigate()
return (
    <Routes>
      <Route path="/" element={<Dashboard navigate={_navigate} {...props}/>}  />
      <Route path="/invoice" element={<InvoiceForm navigate={_navigate} {...props}/>} />
    </Routes>
);
}

export default Router;
