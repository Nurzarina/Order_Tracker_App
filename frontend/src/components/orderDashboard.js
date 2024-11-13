import React, {useState, useEffect} from 'react';
import AddOrder from './addOrder';
import DisplayAllOrder from './displayAllOrder';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OrderDashboard() {

  return (
    <Container id='pageWrapper'>
        <div> <h1>Welcome to Order Tracker App</h1> </div>

        <div>
        <Link to={"/createOrder"}>
            <Button variant='success' className='mb-3' size='lg'>
              Add New Order
            </Button>
            </Link>
        </div>

        <div id='displayOrderDiv'>
            <DisplayAllOrder/>
        </div>
    </Container>
  )
}

export default OrderDashboard