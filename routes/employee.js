const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee');

// Register a new employee
router.post('/', employeeController.createEmployee);

// Login an employee
router.post('/login', employeeController.loginEmployee);

// Get all employees
router.get('/', employeeController.getAllEmployees);

// Get an employee by ID
router.get('/:id', employeeController.getEmployeeById);

// Update an employee by ID
router.put('/:id', employeeController.updateEmployee);

// Delete an employee by ID
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
