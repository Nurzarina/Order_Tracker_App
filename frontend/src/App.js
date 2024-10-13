// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import OrderDashboard from './components/orderDashboard';
import AddOrder from './components/addOrder';
import DisplayAllOrder from './components/displayAllOrder';

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<OrderDashboard />} />            
            <Route path='/addOrder' element={<AddOrder />} />            
            <Route path='/allOrders' element={<DisplayAllOrder />} />            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
