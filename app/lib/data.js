/** @format */

import { Product, User } from "../lib/models";
import { connectToDB } from "./utiils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = parseInt(process.env.ITEM_PER_PAGE) || 8;
  const SKIP_PAGE = ITEM_PER_PAGE * (page - 1);
  try {
    await connectToDB();
    const count = await User.find({
      username: { $regex: regex },
    }).countDocuments();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(SKIP_PAGE);
    return { users, count };
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = parseInt(process.env.ITEM_PER_PAGE) || 8;
  const SKIP_PAGE = ITEM_PER_PAGE * (page - 1);
  try {
    await connectToDB();
    const count = await Product.find({
      title: { $regex: regex },
    }).countDocuments();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(SKIP_PAGE);
    return { products, count };
  } catch (error) {
    throw new Error(error);
  }
};
