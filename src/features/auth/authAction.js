import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../config/axios"

export const login = createAsyncThunk(
  "auth/login",
  async ({ credential }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/users/login`, {
        ...credential,
      })

      const { data } = response.data
      return data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const register = createAsyncThunk(
  "auth/register",
  async ({ credential }) => {
    try {
      const response = await axios.post(`/usres/register`, {
        ...credential,
      })

      const { data } = response.data
      return data
    } catch (error) {
      return Promise.reject(error.message)
    }
  }
)

export const authAction = { login, register }
