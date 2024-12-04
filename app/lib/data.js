/** @format */

import { User } from "../lib/models";
import { connectToDB } from "./utiils";

export const fetchUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error);
  }
};
