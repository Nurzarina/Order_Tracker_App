import React from 'react';
import {Card, Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function AddOrder() {
  return (
    <Container>
    {/* <Card>
      <Card.Header>
        <h1>Add New Order</h1>
      </Card.Header>
      <Card.Body>
        <Link to={"/addOrder"}>
          <Button variant='info' className='mb-3'>
            Add Order
          </Button>
        </Link>
      </Card.Body>
    </Card> */}
  </Container>
  )
}

export default AddOrder