import { createAppSlice } from "store/createAppSlice"
import { AdviceRandomizerSliceState } from "./types"
import axios from "axios"

const adviceRandomizerInitialState: AdviceRandomizerSliceState = {
  data: [],
  error: undefined,
  status: "default",
}

export const adviceRandomizerSlice = createAppSlice({
  name: "ADVICE_RANDOMIZER",
  initialState: adviceRandomizerInitialState,
  reducers: create => ({
    getAdvice: create.asyncThunk(
      async (arg, thunkApi) => {
        try {
          const result = await axios.get("https://api.adviceslip.com/advice")
          return result.data.slip.advice
        } catch (error) {
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        pending: (state: AdviceRandomizerSliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: AdviceRandomizerSliceState, action: any) => {
          state.data = [...state.data, action.payload]
          state.status = "success"
        },
        rejected: (state: AdviceRandomizerSliceState, action: any) => {
          state.error = action.payload.message
          state.status = "error"
        },
      },
    ),
    clearAdvice: (state: AdviceRandomizerSliceState) => {
      state.data = []
      state.status = "default"
      state.error = undefined
    },
  }),
  selectors: {
    adviceData: (state: AdviceRandomizerSliceState) => state,
  },
})

export const adviceRandomizerActions = adviceRandomizerSlice.actions
export const adviceRandomizerSelectors = adviceRandomizerSlice.selectors
