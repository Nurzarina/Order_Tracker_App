import React, {useState, useEffect} from 'react';
import AddOrder from './addOrder';
import DisplayOrder from './displayAllOrder';
import {Container} from 'react-bootstrap';

function OrderDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:5000/")
        .then(res => setOrders(res.data))
        .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
  }

  return (
    <Container id='pageWrapper'>
        <div> Welcome to Order Tracker App </div>

        <div id='addOrderDiv'>
        Add your order here
            <addOrder />
        </div>

        <div id='displayOrderDiv'>
        View or Update your orders here
            <displayOrder />
        </div>
    </Container>
  )
}

export default OrderDashboard