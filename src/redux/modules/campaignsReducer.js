import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../shared/api';

const initialState = {
  campaigns: {},
  isLoading: false,
  error: null,
};

export const getCampaigns = createAsyncThunk(
  'getCampaigns',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/campaigns`);

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCampaigns.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCampaigns.fulfilled, (state, action) => {
        state.isLoading = false;
        state.campaigns = action.payload;
      })
      .addCase(getCampaigns.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default campaignsSlice.reducer;
