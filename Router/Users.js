const express = require('express'); 
const router = express.Router();

let users = [
    { "id": 1, "first_name": "Lyon", "last_name": "Enever", "email": "lenever0@flickr.com", "password": "hE3?Q=" },
    { "id": 2, "first_name": "Angil", "last_name": "Mountfort", "email": "amountfort1@princeton.edu", "password": "rF4}C/Zj" },
    { "id": 3, "first_name": "Christi", "last_name": "Bellward", "email": "cbellward2@bloglovin.com", "password": "nL4#g" },
    { "id": 4, "first_name": "Kristopher", "last_name": "Ioselev", "email": "kioselev3@creativecommons.org", "password": "dL1)O?" },
    { "id": 5, "first_name": "Haslett", "last_name": "Feaster", "email": "hfeaster4@columbia.edu", "password": "pB2`" },
    { "id": 6, "first_name": "Carissa", "last_name": "Mosdall", "email": "cmosdall5@google.nl", "password": "qG5," },
    { "id": 7, "first_name": "Dieter", "last_name": "Ellacott", "email": "dellacott6@about.com", "password": "bV8<iJ" },
    { "id": 8, "first_name": "Aguistin", "last_name": "Featherstonhaugh", "email": "afeatherstonhaugh7@google.cn", "password": "xE1`Q" },
    { "id": 9, "first_name": "Rockwell", "last_name": "Woof", "email": "rwoof8@ft.com", "password": "gD2~" },
];

// Get all users
router.get('/', (req, res) => {
    res.json(users);
});

// Get user by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
});

// Add a new user
router.post('/', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Update a user
router.put('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    Object.assign(user, req.body);
    res.json(user);
});

module.exports = router;

