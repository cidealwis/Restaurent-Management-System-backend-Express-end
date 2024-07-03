const Customer = require('../models/Customer');
const bcrypt = require('bcrypt');
const { sendMail } = require('./email');
// Create a new customer
// exports.createCustomer = async (customerData) => {
//   const { name, email, password, phoneNumber, addresses } = customerData;

//   const customerExists = await Customer.findOne({ email });

//   if (customerExists) {
//     throw new Error('Customer already exists');
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const customer = new Customer({
//     name,
//     email,
//     password: hashedPassword,
//     phoneNumber,
//     addresses,
//   });

//   return await customer.save();
// };
exports.createCustomer = async (customerData) => {
    try {
      const { name, email, password, phoneNumber, addresses } = customerData;
  
      
      const customerExists = await Customer.findOne({ email });
      if (customerExists) {
        throw new Error('Customer already exists');
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create the customer
      const customer = new Customer({
        name,
        email,
        password: hashedPassword,
        phoneNumber,
        addresses,
      });
  
      // Save the customer
      await customer.save();
  
      // Send email with customer's data
      const message = `Hello ${name},\n\nYour account has been created with the following details:\nEmail: ${email}\nPhone Number: ${phoneNumber}\n\nThank you for joining us.`;
      await sendMail(email, 'Account Created', message);
  
      return customer;
    } catch (error) {
      throw error; // Let the controller handle the error
    }
  };

// Login a customer
exports.loginCustomer = async (email, password) => {
  const customer = await Customer.findOne({ email });

  if (customer && (await bcrypt.compare(password, customer.password))) {
    return customer;
  } else {
    throw new Error('Invalid email or password');
  }
};

// Get all customers
exports.getAllCustomers = async () => {
  return await Customer.find();
};

// Get a customer by ID
exports.getCustomerById = async (customerId) => {
  return await Customer.findById(customerId);
};

// Update a customer by ID
exports.updateCustomer = async (customerId, customerData) => {
  return await Customer.findByIdAndUpdate(customerId, customerData, { new: true, runValidators: true });
};

// Delete a customer by ID
exports.deleteCustomer = async (customerId) => {
  return await Customer.findByIdAndDelete(customerId);
};
