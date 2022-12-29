import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { setMessage } from "./message";
import AuthService from "../services/auth.service";

export const saveUserData = createAsyncThunk(
  "auth/save-userdata",
  async (userdata:any, thunkAPI) => {
    return userdata;
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({email, password, type}:any, thunkAPI) => {
    console.log("register auth type", type);
    try {
      const response = await AuthService.register(email, password, type);
      return response.data;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response); 
    }
  }
);

export const loginWithOtp = createAsyncThunk(
  "auth/login",
  async ({ phone, user_type }:any, thunkAPI) => {
    console.log("loginWithOtpslice")
    try {
      const response = await AuthService.loginWithOtp(phone, user_type);
      console.log("login res auth", response);
      return response;
    } catch (error:any) {
      console.log("error", error)
      return thunkAPI.rejectWithValue(error.response); 
    }
  }
);

export const verifyLoginOtp = createAsyncThunk(
  "auth/verify-login-otp",
  async ({ phone, otp }:any, thunkAPI) => {
    console.log("loginWithOtpslice")
    try {
      const response = await AuthService.verifyLoginOtp(phone, otp);
      console.log("login res auth", response);
      return response;
    } catch (error:any) {
      console.log("error", error)
      return thunkAPI.rejectWithValue(error.response); 
    }
  }
);

export const resendLoginOtp = createAsyncThunk(
  "auth/resend-login-otp",
  async ({ phone }:any, thunkAPI) => {
    try {
      const response = await AuthService.resendLoginOtp(phone);
      console.log("login res auth", response);
      return response;
    } catch (error:any) {
      console.log("error", error)
      return thunkAPI.rejectWithValue(error.response); 
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password, type }:any, thunkAPI) => {
    console.log("auth login", type);
    try {
      const response = await AuthService.login(email, password, type);
      console.log("login res auth", response);
      return response;
    } catch (error:any) {
      console.log("error", error)
      return thunkAPI.rejectWithValue(error.response); 
    }
  }
);

export const otp = createAsyncThunk(
  "auth/otp",
  async ({ email, otp }:any, thunkAPI) => {
    console.log("otp coming in",otp);
    try {
      const response = await AuthService.otp(email, otp);
      return response;
    } catch (error:any) {
      return error.response;      
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
  return true;
});

export const forget = createAsyncThunk(
  "auth/forget",
  async ({email}:any, thunkAPI) => {
    try {
      const response = await AuthService.forget(email);
      return response.data;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response); 
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "auth/forget",
  async (email:string, thunkAPI) => {
    try {
      const response = await AuthService.verifyEmail(email);
      return response.data;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response); 
    }
  }
);

export const resetpassword = createAsyncThunk(
  "auth/forgetotp",
  async ({ email, otp, password, confirmPassword }:any, thunkAPI) => {

    try {
      const response = await AuthService.resetpassword(email, otp, password, confirmPassword);
      return response;
    } catch (error:any) {
      return thunkAPI.rejectWithValue(error.response); 
    }
  }
);

// export const changepassword = createAsyncThunk(
//   "auth/forgetotp",
//   async ({ email, currentpassword, newpassword }:any, thunkAPI) => {
//     console.log("email",email);
//     console.log("currentpassword",currentpassword);
//     console.log("newpassword",newpassword);
//     try {
//       const response = await AuthService.changepassword(email, currentpassword,newpassword);
//       return response;
//     } catch (error:any) {
//       return thunkAPI.rejectWithValue(error.response); 
//     }
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
    access_token: null
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state) => {
      state.isLoggedIn = false;
    });

    builder.addCase(register.rejected, (state) => {
      state.isLoggedIn = false;
    });

    builder.addCase(otp.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    });

    builder.addCase(otp.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.access_token = action.payload.token
    });

    builder.addCase(verifyLoginOtp.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.access_token = action.payload.token
    });

    builder.addCase(saveUserData.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.access_token = action.payload.access_token
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });

    builder.addCase(forget.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });

    builder.addCase(forget.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });

    builder.addCase(resetpassword.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });

    builder.addCase(resetpassword.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.access_token = null;
    });
  }
});

const { reducer } = authSlice;
export default reducer;