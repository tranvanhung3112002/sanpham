import axios from "axios";
import request from "../utils/ConfigAPI";
import { PayloadAction } from "@reduxjs/toolkit";

const loginAPI = {
  postLogin: async () => {
    try {
      const url = "users";
      const res = await request.get(url);
      return res;
    } catch (error) {
      throw error;
    }
  },
};

export default loginAPI;
