const express = require("express");
const path = require("path");

// Import routers
const userRouter = require('./Router/Users');
const productRouter = require('./Router/Products');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Route handlers
app.use("/users", userRouter);
app.use("/products", productRouter);

// Error-handling middleware
app.use(( req, res, next) => {
    console.error(err.stack);
    res.status(404).json({ message: "Something went wrong!" });
});

// Start the server

app.listen(7000, () => {
    console.log('Server is running at 7000');
});
