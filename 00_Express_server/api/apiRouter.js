const express = require('express');
const router = express.Router();

//employee data
let employees = [
  {
    id: '_abcdef',
    first_name: 'John',
    last_name: 'Smith',
    gender: 'Male',
    email: 'johnsmith@gmail.com',
    ip_address: '127.0.0.1'
  },
  {
    id: '_uvwxyz',
    first_name: 'Laura',
    last_name: 'Williams',
    gender: 'Female',
    email: 'laurawilliams@gmail.com',
    ip_address: '9845.56.32'
  }
]

//GET - Employees
router.get('/employees', (request, response) => {
  response.json(employees);
});



module.exports = router;