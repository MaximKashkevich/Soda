import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface IItems {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

export interface IItemsStates {
  items: IItems[];
  errors: string | null;
  loading: boolean;
}

const initialState: IItemsStates = {
  items: [],
  errors: null,
  loading: false,
};

export const fetchProducts = createAsyncThunk<IItems[]>(
  "items/fetchItems",
  async () => {
    const { data } = await axios.get<IItems[]>(
      "https://a2dab1c04ebb7a77.mokky.dev/items"
    );
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.error.message || "Failed to fetch products";
      });
  },
});

export default productSlice.reducer;
