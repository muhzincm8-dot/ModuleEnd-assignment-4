import Customer from "../models/customerModel.js";

export const createCustomer = async (req, res) => {
  const customer = await Customer.create(req.body);
  res.status(201).json(customer);
};

export const getCustomers = async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
};
