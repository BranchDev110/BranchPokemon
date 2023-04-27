import { createSlice } from '@reduxjs/toolkit'

interface HistoryItem{
    key: string,
    value: Array<any>,
    date: Date
}

interface History{
    value: HistoryItem[]
}

const historySlice = createSlice({
  name: 'history',
  initialState: {value: []} as History,
  reducers: {
    setHistory: (state, action) => {
        state = {value: [...state.value, action.payload]};
        return state;
    }
  }
})

export const {setHistory} = historySlice.actions;

export default historySlice.reducer