const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

    // Create a Mysql connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sLHCkPEkpNsCwRnQVVRx0dNxjRufQY",
    database: "mysqltask3"
});

    // Route to get all orders
app.get("/allOrders", (req, res) => {
    const sql = "SELECT * FROM orders";   // SQL query to fetch all orders from 'orders' database
    db.query(sql, (err, data) => {
        if (err) {
            res.json(err);  // Send error response if query fails
        } else {
            res.send(data); // Send the retrieved data to FrontEnd
        }
    })
});

    // Route to create new order
app.post ("/createOrder", (req, res) => {
    const sql = "INSERT INTO orders(status,details,additionalreq VALUES (?)";   // SQL query to insert new order
    const values = [
        req.body.status,
        req.body.details,
        req.body.additionalreq
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            res.json(err)
        }   else {
            res.json(data)
        }
    })
});

    // Route to update details of an existing order


    // Route to update status of an order


    // Route to delete an order


    // Start the server
app.listen(5000, () => {
    console.log("Server started on port 5000");     // Log server start message
})