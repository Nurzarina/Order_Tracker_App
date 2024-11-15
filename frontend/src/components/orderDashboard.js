import React, {useState, useEffect} from 'react';
import AddOrder from './addOrder';
import DisplayAllOrder from './displayAllOrder';
import { Container, Button, Accordion, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OrderDashboard() {

  return (
    <Container id='pageWrapper'>
        <div className='mt-4 mb-5'> <h1>Welcome to Order Tracker App</h1> </div>

<Accordion defaultActiveKey="0" className='mt-4 mb-3'>
  <Accordion.Item>
    <Accordion.Header>Add New Order</Accordion.Header>
    <Accordion.Body>
      <Form>
        <Form.Group className='mb-3' controlId='formOrderDetails'>
          <Form.Label>Order Details</Form.Label>
          <Form.Control type='text' placeholder=''/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Additional Request from Customer</Form.Label>
          <Form.Control type='text' placeholder=''/>
        </Form.Group>

        <Button variant='success' type="submit"className='mt-3'>
          Add Order
        </Button>
      </Form>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

        <div id='displayOrderDiv'>
            <DisplayAllOrder/>
        </div>
    </Container>
  )
}

export default OrderDashboard