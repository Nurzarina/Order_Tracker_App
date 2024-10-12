import React from 'react'
import addOrder from './addOrder'
import displayOrder from './displayOrder'

function orderDashboard() {
  return (
    <div id='pageWrapper'>
        <div> Welcome to Order Tracker App </div>

        <div id='addOrderDiv'>
            <addOrder />
        </div>

        <div id='displayOrderDiv'>
            <displayOrder />
        </div>
    </div>
  )
}

export default orderDashboard