import { configureStore } from '@reduxjs/toolkit';
import authSlice from './modules/authReducer';
import campaignsSlice from './modules/campaignsReducer';
import usersSlice from './modules/usersReducer';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    campaigns: campaignsSlice,
    auth: authSlice,
  },
});
