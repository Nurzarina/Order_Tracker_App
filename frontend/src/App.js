// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import OrderDashboard from './components/orderDashboard';
import AddOrder from './components/addOrder';
import DisplayAllOrder from './components/displayAllOrder';
import updateOrderDetails from './components/updateOrderDetails';
import updateOrderStatus from './components/updateOrderStatus';

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<OrderDashboard />} />            
            <Route path='/createOrder' element={<AddOrder />} />            
            <Route path='/allOrders' element={<DisplayAllOrder />} />            
            <Route path='/updateOrderDetails' element={<updateOrderDetails/>} />            
            <Route path='/updateOrderStatus' element={<updateOrderStatus/>} />            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
