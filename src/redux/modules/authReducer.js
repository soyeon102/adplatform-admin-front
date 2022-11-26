import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../shared/api';

const initialState = {
  authUser: {},
  roll: 'admin',
  isLoading: false,
  error: null,
};

export const getAuthUser = createAsyncThunk(
  'auth/getAuthUser',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/auth/me`);

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeRoll: (state, action) => {
      state.roll = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAuthUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAuthUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authUser = action.payload;
      })
      .addCase(getAuthUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { changeRoll } = authSlice.actions;
export default authSlice.reducer;
