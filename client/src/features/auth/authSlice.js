import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from "./authService"

const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  isLoading: false
}

export const login = createAsyncThunk(
    'auth/login',
    async formData => {
        try {
            const {data} = await authService.logIn(formData)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state) => {
        state.value -= 1
    },
    logIn: (state, payload) => {
      state.firstName = payload.firstName
    },
    logout: (state, action) => {
      state.value += action.payload
    }
  },
  /*extraReducers: builder => {
    builder
        .addCase(logIn.pending, (state) => {
            state.isLoading = true
        })
        .addCase(logIn.fulfilled, (state, action) => {
            //state.data= data
            state.isLoading = false
            state.isSuccess = true
        })
        .addCase(logIn.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }*/
})

// Action creators are generated for each case reducer function
export const { signUp, logIn, logout } = authSlice.actions

export default authSlice.reducer