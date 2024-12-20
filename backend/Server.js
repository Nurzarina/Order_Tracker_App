const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

    // Create a Mysql connection
const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE
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
    const { status, details, additionalreq} = req.body;
    if (!status || !details || !additionalreq) {                                 // Validate received data
        return res.status(400).json({ error: "All fields are required."})
    }

    const sql = "INSERT INTO orders(status,details,additionalreq) VALUES (?)";   // SQL query to insert new order
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

    // Route to update details of an existing order (only update details & additional request)
app.put ("/updateDetails/:id", (req, res) => {
    const sql = "UPDATE order SET `details` = ?, `additionalreq` = ? WHERE id = ?";    // SQL query to update order details
    const values = [
        req.body.details,
        req.body.additionalreq
    ]
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            res.json(err);
        }   else {
            res.json(data);
        }
    })
});

    // Route to update status of an order
app.put ("/updateStatus/:id", (req,res) => {
    const sql = "UPDATE order SET `status` = ? WHERE id = ?";
    const values = [
        req.body.status
    ]
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
        if (err) {
            res.json(err);
        }   else {
            res.json(data);
        }
    })
});

    // Route to delete an order
app.delete("/orders/:id", (req, res) => {
    const sql = "DELETE FROM orders WHERE id = ?";   // SQL query to delete an order
    const id = req.params.id   // Get order ID from route parameter
    db.query(sql, [id], (err, data) => {
        if (err) {
            res.json(err);  // Sed error response if query fails
        }   else {
            res.json(data); // Send success response with data
        }
    });
});

    // Start the server
app.listen(5000, () => {
    console.log("Server started on port 5000");     // Log server start message
})