import React, {useEffect, useState} from 'react';

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
    <div>
      This is DisplayAllOrders
      <ol>

      </ol>
    </div>
  )
}

export default DisplayAllOrder