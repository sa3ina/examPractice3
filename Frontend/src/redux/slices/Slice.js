import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const response = await axios("http://localhost:3000/cakes");
    return response.data;
  }
);
export const deleteData = createAsyncThunk("user/deleteData", async (id) => {
  await axios.delete(`http://localhost:3000/cakes/${id}`);
  const response = await axios("http://localhost:3000/cakes");
  return response.data;
});
export const postData = createAsyncThunk("user/postData", async (newProd) => {
  const posted = await axios.post(`http://localhost:3000/cakes/`, newProd);
  return posted.data;
});
export const counterSlice = createSlice({
  name: "pastries",
  initialState: {
    data: [],
    loading: false,
    error: null,
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
    basket: JSON.parse(localStorage.getItem("basket")) || [],
  },
  reducers: {
    wishlistFunc: (state, action) => {
      const item = state.wishlist.find((elem) => elem.id == action.payload.id);
      if (!item) {
        state.wishlist = [...state.wishlist, action.payload];
      } else {
        state.wishlist = state.wishlist.filter(
          (elem) => elem.id != action.payload.id
        );
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    addToBasket: (state, action) => {
      const item = state.basket.find((elem) => elem.id == action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.basket.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    increase: (state, action) => {
      const item = state.basket.find((elem) => elem.id == action.payload.id);
      if (item) {
        item.quantity++;
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    decrease: (state, action) => {
      const item = state.basket.find((elem) => elem.id == action.payload.id);
      if (item.quantity == 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    removeItem: (state, action) => {
      state.basket = state.basket.filter(
        (elem) => elem.id != action.payload.id
      );
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteData.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postData.pending, (state) => {
        state.loading = true;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, action.payload];
      })
      .addCase(postData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  wishlistFunc,
  addToBasket,
  increase,
  decrease,
  removeItem,
} = counterSlice.actions;

export default counterSlice.reducer;
