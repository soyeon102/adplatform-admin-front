import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../shared/api';

const initialState = {
  users: {},
  isLoading: false,
  error: null,
};

export const getUsers = createAsyncThunk(
  'getUsers',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/users`);

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postUser = createAsyncThunk(
  'postUser',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/users`, payload);

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(postUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users.content = [...state.users.content, action.payload];
      })
      .addCase(postUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default usersSlice.reducer;
