import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DisplayAllOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allOrders")
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:5000/orders/' + id)

      //Re-fetch the updated orders without reloading the whole page.
      const updatedOrders = await axios.get('http://localhost:5000/allOrders');
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
          <Table bordered hover variant='dark'>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>Order Details</th>
                <th>Additional Request</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map((data, i) => (
                  <tr key={i}>
                    <td>{data.id}</td>
                    <td>{data.status}</td>
                    <td>{data.details}</td>
                    <td>{data.additionalreq}</td>
                    <td>
                      <Link to={`updateOrderDetails/${data.id}`}>
                      <Button variant='warning' className='mb-2 mt-2'> Update Order</Button>
                      </Link>
                      <Link to={`updateOrderStatus/${data.id}`}>
                      <Button className='mb-2'>Update Order Status</Button>
                      </Link>
                      <Button variant='danger' className='mb-2' onClick={() => handleDelete(data.id)}>Delete Order</Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DisplayAllOrder