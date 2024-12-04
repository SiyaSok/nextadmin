/** @format */

import { Product, User } from "../lib/models";
import { connectToDB } from "./utiils";

export const fetchUsers = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    connectToDB();
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchProducts = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    connectToDB();
    const product = await Product.find({ title: { $regex: regex } });
    return product;
  } catch (error) {
    throw new Error(error);
  }
};
