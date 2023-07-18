import { config } from "@/config";
import { OrderStatus, Orderlines as Orderline } from "@prisma/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface OrderlinesState {
  isLoading: boolean;
  items: Orderline[];
  error: Error | null;
}

const initialState: OrderlinesState = {
  isLoading: false,
  items: [],
  error: null,
};

interface UpdateOrderlinePayload {
  orderId: number;
  menuId: number;
  status: OrderStatus;
}

export const updateOrderlineStatus = createAsyncThunk(
  "orderlines/updateOrderlineStatus",
  async (payload: UpdateOrderlinePayload, thunkAPI) => {
    await fetch(`${config.apiBaseUrl}/orderlines`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
  }
);

export const orderlinesSlice = createSlice({
  name: "orderlines",
  initialState,
  reducers: {
    setOrderlines: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setOrderlines } = orderlinesSlice.actions;

export default orderlinesSlice.reducer;
