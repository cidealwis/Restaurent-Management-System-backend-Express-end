const Employee = require('../models/Employee');
const bcrypt = require('bcrypt');

// Create a new employee
exports.createEmployee = async (employeeData) => {
  const { name, email, password, restaurantId, position, phoneNumber } = employeeData;

  const employeeExists = await Employee.findOne({ email });

  if (employeeExists) {
    throw new Error('Employee already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const employee = new Employee({
    name,
    email,
    password: hashedPassword,
    restaurantId,
    position,
    phoneNumber,
  });

  return await employee.save();
};

// Login an employee
exports.loginEmployee = async (email, password) => {
  const employee = await Employee.findOne({ email });

  if (employee && (await bcrypt.compare(password, employee.password))) {
    return employee;
  } else {
    throw new Error('Invalid email or password');
  }
};

// Get all employees
exports.getAllEmployees = async () => {
  return await Employee.find();
};

// Get an employee by ID
exports.getEmployeeById = async (employeeId) => {
  return await Employee.findById(employeeId);
};

// Update an employee by ID
exports.updateEmployee = async (employeeId, employeeData) => {
  return await Employee.findByIdAndUpdate(employeeId, employeeData, { new: true, runValidators: true });
};

// Delete an employee by ID
exports.deleteEmployee = async (employeeId) => {
  return await Employee.findByIdAndDelete(employeeId);
};
