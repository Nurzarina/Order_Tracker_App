import React, {useState, useEffect} from 'react';
import AddOrder from './addOrder';
import DisplayAllOrder from './displayAllOrder';
import {Container} from 'react-bootstrap';

function OrderDashboard() {

  return (
    <Container id='pageWrapper'>
        <div> <h1>Welcome to Order Tracker App</h1> </div>

        {/* <div id='addOrderDiv'>
        Add your order here
            <AddOrder />
        </div> */}

        <div id='displayOrderDiv'>
            <DisplayAllOrder/>
        </div>
    </Container>
  )
}

export default OrderDashboard