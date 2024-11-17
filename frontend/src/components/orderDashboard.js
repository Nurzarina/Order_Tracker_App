import React, {useState, useEffect} from 'react';
import AddOrder from './addOrder';
import DisplayAllOrder from './displayAllOrder';
import { Container, Button, Accordion, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OrderDashboard() {

  return (
    <Container id='pageWrapper'>
        <div className='mt-4 mb-5'> <h1>Welcome to Order Tracker App</h1> </div>

        <div>
          <AddOrder />
        </div>

        <div id='displayOrderDiv'>
            <DisplayAllOrder/>
        </div>
    </Container>
  )
}

export default OrderDashboard