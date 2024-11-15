import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Container, Table } from 'react-bootstrap';
import UpdateStatusModal from './modals/updateStatusModal';
import UpdateOrderModal from './modals/updateOrderModal';
import { Link } from 'react-router-dom';

function DisplayAllOrder() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState([]);
  const [updateDetailsModalShow, setUpdateDetailsModalShow] = useState([]);
  const [updateStatusModalShow, setUpdateStatusModalShow] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allOrders")
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  }, []);

  // Function to handle when user click Update Order Status button.
  const handleStatusUpdate = async (data) => {
    try {
      // Show modal to update status
      setUpdateStatusModalShow(true);
      setSelectedOrder(data);
    }
    catch (error) {
      console.log('Error updating order status', error)
    }
  };

  // Function to handle when user click Update Order button.
  const handleOrderDetailsUpdate = async (data) => {
    try {
      // Show modal to update details
      setUpdateDetailsModalShow(true);
      setSelectedOrder(data);
    }
    catch (error) {
      console.log('Error updating order details', error)
    }
  };

  // Function to handle when user click Delete Order button.
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
                      {/* <Link to={`updateOrderDetails/${data.id}`}> */}
                      <Button variant='warning' className='mb-2 mt-2' onClick={() => handleOrderDetailsUpdate(data.id)}> Update Order</Button>
                      {/* </Link> */}
                      {/* <Link to={`updateOrderStatus/${data.id}`}> */}
                      <Button className='mb-2' onClick={() => { handleStatusUpdate(data.id) }}>Update Order Status</Button>
                      {/* </Link> */}
                      <Button variant='danger' className='mb-2' onClick={() => handleDelete(data.id)}>Delete Order</Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Send props to updateStatusModal */}
      <UpdateStatusModal
        show={updateStatusModalShow}
        handleClose={() => setUpdateStatusModalShow(false)}
        orderID={data.id}
      />

      {/* Send props to updateOrderDetailsModal */}
      <UpdateOrderModal
        show={updateDetailsModalShow}
        handleClose={() => setUpdateDetailsModalShow(false)}
        orderID={data.id}
      />

    </Container>
  );
}

export default DisplayAllOrder