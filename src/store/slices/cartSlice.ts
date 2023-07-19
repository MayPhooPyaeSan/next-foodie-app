import { Menus as Menu, Addons as Addon } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
  id: string;
  menu: Menu;
  addons: Addon[];
  quantity: number;
}

interface CartState {
  isLoading: boolean;
  items: CartItem[];
  error: Error | null;
}

const initialState: CartState = {
  isLoading: false,
  items: [],
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    exampleAction: (state) => state,
  },
});

export const { exampleAction } = cartSlice.actions;

export default cartSlice.reducer;
