import { configureStore } from '@reduxjs/toolkit';
import authSlice from './modules/authReducer';

export const store = configureStore({
  reducer: {
    users: '',
    campaigns: '',
    auth: authSlice,
  },
});
