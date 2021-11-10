import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../config/axios"
import formOpts from "../../config/formOpts"

export const fetchMatch = createAsyncThunk(
  "matches/fetchMatch",
  async ({ matchId, accessToken }) => {
    try {
      const res = await axios.get(`/matches/${matchId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      const { data } = res.data
      return data
    } catch (error) {
      console.dir(error)
      if (error.response.status === 404) {
        return Promise.reject("Not found!")
      }
      return Promise.reject(error.message)
    }
  }
)

export const createMatch = createAsyncThunk(
  "matches/create",
  async ({ accessToken, option }) => {
    if (!accessToken) {
      throw new Error("No access token")
    }

    const { size, turnTime, totalTurns } = option
    const checkSize = formOpts["Size"].includes(size)
    const checkTurnTime = formOpts["Turn Time"].includes(turnTime)
    const checkTotalTurns = formOpts["Total Turns"].includes(totalTurns)

    if (!(checkSize && checkTurnTime && checkTotalTurns)) {
      return Promise.reject("Invalid option!")
    }

    try {
      const res = await axios.post(
        "/matches/create",
        {
          size,
          turnTime,
          totalTurns,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      const { data } = res.data

      return data
    } catch (error) {
      console.dir(error)
      return Promise.reject(error)
    }
  }
)

export const deleteMatch = createAsyncThunk(
  "matches/delete",
  async ({ matchId, token }) => {
    if (!matchId || !token) {
      return Promise.reject(
        "Match ID and token must be provide to delete match!"
      )
    }

    try {
      await axios.delete(`/matches/${matchId}`, {
        token,
      })
    } catch (error) {
      return Promise.reject(error)
    }
  }
)

const matchAction = {
  createMatch,
  deleteMatch,
  fetchMatch,
}

export default matchAction
