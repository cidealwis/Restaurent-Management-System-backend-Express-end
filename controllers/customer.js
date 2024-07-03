const customerService = require('../services/customer');
const generateToken = require('../utils/generateToken');

// Register a new customer
// exports.createCustomer = async (req, res) => {
//   try {
//     const customer = await customerService.createCustomer(req.body);
//     res.status(201).json(customer);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
exports.createCustomer = async (req, res) => {
    try {
      const customer = await customerService.createCustomer(req.body);
      res.status(201).json(customer);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
// Login a customer
exports.loginCustomer = async (req, res) => {
  const { email, password } = req.body;

  try {
    const customer = await customerService.loginCustomer(email, password);

    if (customer) {
      res.json({
        _id: customer._id,
        name: customer.name,
        email: customer.email,
        token: generateToken(customer._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await customerService.getAllCustomers();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a customer by ID
exports.getCustomerById = async (req, res) => {
  try {
    const customer = await customerService.getCustomerById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a customer by ID
exports.updateCustomer = async (req, res) => {
  try {
    const customer = await customerService.updateCustomer(req.params.id, req.body);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a customer by ID
exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await customerService.deleteCustomer(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
