import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DEFAULT_CARDS } from './../../constants/index'

interface IGameState {
  cards: CardBlock[]
  prevCard: number
  activeCards: number[]
  matchingCards: number[]
  isWin: boolean
  clicks: number
  time: number
}

const initialState: IGameState = {
  cards: DEFAULT_CARDS.sort(() => Math.random() - 0.5),
  prevCard: -1,
  activeCards: [],
  matchingCards: [],
  isWin: false,
  clicks: 0,
  time: 0,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCards(state: IGameState, action: PayloadAction<CardBlock[]>) {
      state.cards = action.payload
    },
    restartGame(state: IGameState) {
      state.activeCards = []
      state.matchingCards = []
      state.cards = [...DEFAULT_CARDS].sort(() => Math.random() - 0.5)
      state.isWin = false
      state.clicks = 0
      state.time = 0
    },

    setTime(state: IGameState, action: PayloadAction<number>) {
      state.time = action.payload
    },

    setMatchingCards(state: IGameState, action: PayloadAction<number>) {
      state.matchingCards = [...state.matchingCards, action.payload]
    },

    setActiveCard(state: IGameState, action: PayloadAction<number>) {
      state.activeCards = [...state.activeCards, action.payload]
      if (state.activeCards.length > 2) {
        state.activeCards = [action.payload]
      }
    },
    setWin(state: IGameState, action: PayloadAction<boolean>) {
      state.isWin = action.payload
    },

    setClick(state: IGameState) {
      state.clicks += 1
    },
  },
})

export const {
  setCards,
  restartGame,
  setActiveCard,
  setMatchingCards,
  setWin,
  setClick,
  setTime,
} = gameSlice.actions
export default gameSlice.reducer
