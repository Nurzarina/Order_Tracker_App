import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Container, Table } from 'react-bootstrap';
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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>Order Details</th>
                <th>Additional Request</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map((data, i) => (
                  <tr key={i}>
                    <td>{data.objectID}</td>
                    <td>{data.Status}</td>
                    <td>{data.OrderDetails}</td>
                    <td>{data.AdditionalRequest}</td>
                    <td>
                      <Link to={`updateOrderDetails/${data.id}`}>
                      <Button variant='warning'> Update Order</Button>
                      </Link>
                      <Link to={`updateOrderStatus/${data.id}`}>
                      <Button>Update Order Status</Button>
                      </Link>
                      <Button variant='danger' onClick={() => handleDelete(data.objectID)}>Delete Order</Button>
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