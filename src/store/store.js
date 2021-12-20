import { configureStore } from "@reduxjs/toolkit";
import Basketreducer from "../slices/Basketslice";

export const store = configureStore({
  reducer: {
    basket: Basketreducer,
  },
});