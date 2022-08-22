import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DEFAULT_CARDS } from './../../constants/index'

interface IGameState {
  cards: CardBlock[]
}

const initialState: IGameState = {
  cards: DEFAULT_CARDS.sort(() => Math.random() - 0.5),
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCards(state: IGameState, action: PayloadAction<CardBlock[]>) {
      state.cards = action.payload
    },
    restartGame(state: IGameState) {
      state.cards = [...DEFAULT_CARDS].sort(() => Math.random() - 0.5)
    },
  },
})

export const { setCards, restartGame } = gameSlice.actions
export default gameSlice.reducer
