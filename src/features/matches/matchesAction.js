import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../config/axios"

export const fetchMatches = createAsyncThunk(
  "matches/fetchMatches",
  async ({ accessToken }) => {
    if (!accessToken) {
      throw new Error("No access token")
    }

    try {
      const res = await axios.get("/matches", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      const { data } = res.data
      return data
    } catch (error) {
      console.error("Error: ")
      console.dir(error)
      return Promise.reject("Error when fetching matches!")
    }
  }
)

const matchActions = {
  fetchMatches,
}

export default matchActions
