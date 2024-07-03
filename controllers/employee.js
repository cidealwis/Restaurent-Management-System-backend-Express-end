const employeeService = require('../services/employee');
const generateToken = require('../utils/generateToken');

// Register a new employee
exports.createEmployee = async (req, res) => {
  try {
    const employee = await employeeService.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login an employee
exports.loginEmployee = async (req, res) => {
  const { email, password } = req.body;

  try {
    const employee = await employeeService.loginEmployee(email, password);

    if (employee) {
      res.json({
        _id: employee._id,
        name: employee.name,
        email: employee.email,
        position: employee.position,
        token: generateToken(employee._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getAllEmployees();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await employeeService.getEmployeeById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an employee by ID
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await employeeService.updateEmployee(req.params.id, req.body);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an employee by ID
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await employeeService.deleteEmployee(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
