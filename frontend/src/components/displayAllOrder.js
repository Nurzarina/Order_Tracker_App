import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DisplayAllOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:5000/order/' + id)

      //Re-fetch the updated orders without reloading the whole page.
      const updatedOrders = await axios.get('http://localhost:5000/orders');
      setOrders(updatedOrders.data); //Update state to trigger re-render
    }
    catch (error) {
      console.log('Error deleting order:', error)
    }
  }
  return (
    <Container>
      <Card>
        <Card.Header>
          <h2>All Orders</h2>
        </Card.Header>
        <Card.Body>
          <Link to={"/addOrder"}>
            <Button variant='info' className='mb-3'>
              Add New Order
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default DisplayAllOrder