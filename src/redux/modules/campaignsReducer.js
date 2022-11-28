import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../shared/api';

const initialState = {
  campaigns: {},
  isLoading: false,
  error: null,
};

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
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

export const changeCampaignStatus = createAsyncThunk(
  'changeCampaignStatus',
  async (payload, thunkAPI) => {
    console.log('payload!!!!!', payload);
    try {
      const response = await axios.patch(
        `${BASE_URL}/api/campaigns/${payload.id}`
        // {
        //   enabled: !payload.enabled,
        // }
      );
      console.log('response!!!!!!!', response.data);

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
      })
      .addCase(changeCampaignStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeCampaignStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.campaigns = state.campaigns.map((campaign) =>
        //   campaign.id === action.payload.id
        //     ? { ...campaign, enabled: action.payload.enabled }
        //     : campaign
        // );

        console.log('????', action.payload);
        // state.campaigns = action.payload;
      })
      .addCase(changeCampaignStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default campaignsSlice.reducer;
