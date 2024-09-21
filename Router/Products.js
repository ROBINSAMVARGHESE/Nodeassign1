
const express = require('express');
const router = express.Router();

let products = [
    { "id": 1, "car name": "Ram Van B250", "year": 1993, "manufacturer": "Dodge", "vin": "JN1AZ4EH9EM793379" },
    { "id": 2, "car name": "Caravan", "year": 2005, "manufacturer": "Dodge", "vin": "3VWKX7AJ3CM671357" },
    { "id": 3, "car name": "Grand Prix", "year": 1999, "manufacturer": "Pontiac", "vin": "2G4GL5EX0E9001943" },
    { "id": 4, "car name": "Quattroporte", "year": 2010, "manufacturer": "Maserati", "vin": "JTDZN3EU5E3069519" },
    { "id": 5, "car name": "QX", "year": 2002, "manufacturer": "Infiniti", "vin": "JM3ER2A57B0485958" },
    { "id": 6, "car name": "Optima", "year": 2011, "manufacturer": "Kia", "vin": "1D7RB1CT6AS632820" },
    { "id": 7, "car name": "Clubman", "year": 2009, "manufacturer": "MINI", "vin": "3FADP4AJ9CM597135" },
    { "id": 8, "car name": "G", "year": 2012, "manufacturer": "Infiniti", "vin": "WAUBF98EX8A722722" },
    { "id": 9, "car name": "Expedition", "year": 2008, "manufacturer": "Ford", "vin": "1FTEX1C85AF335677" },
];

// Get all products
router.get('/', (req, res) => {
    res.json(products); // Return the products array as JSON
});

// Get a product by ID
router.get('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

// Create a new product
router.post('/', (req, res) => {
    const newProduct = {
        id: products.length + 1, // Simple ID generation
        "car name": req.body["car name"],
        year: req.body.year,
        manufacturer: req.body.manufacturer,
        vin: req.body.vin,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Update a product by ID
router.put('/:id', (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const productIndex = products.findIndex(p => p.id === productId);
        
        if (productIndex !== -1) {
            // Update the product
            products[productIndex] = {
                id: productId, // Maintain the same ID
                "car name": req.body["car name"],
                year: req.body.year,
                manufacturer: req.body.manufacturer,
                vin: req.body.vin,
            };
            res.json(products[productIndex]);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        console.error("Error updating product:", error); // Log the error
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

// Export the router
module.exports = router;
