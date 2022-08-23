import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DEFAULT_CARDS } from './../../constants/index'

interface IGameState {
  cards: CardBlock[]
  prevCard: number
}

const initialState: IGameState = {
  cards: DEFAULT_CARDS.sort(() => Math.random() - 0.5),
  prevCard: -1,
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
    setPrevCard(state: IGameState, action: PayloadAction<CardBlock['id']>) {
      state.prevCard = action.payload
    },
    checkCard(state: IGameState, action: PayloadAction<CardBlock['id']>) {
      console.log('action id', action)
      console.log('prev', state.prevCard)
      if (action.payload !== state.prevCard) {
        if (state.cards[action.payload].id === state.cards[state.prevCard].id) {
          state.cards[action.payload].status = 'correct'
          state.cards[state.prevCard].status = 'correct'
          state.prevCard = -1
        } else {
          //       cards[current].stat = 'wrong'
          //       cards[prevCard].stat = 'wrong'
          //       dispatch(setCards([...cards]))
          //       setTimeout(() => {
          //         cards[current].stat = ''
          //         cards[prevCard].stat = ''
          //         dispatch(setCards([...cards]))
          //         setPrevCard(-1)
          //       }, 1000)
        }
      }
    },
  },
})

export const { setCards, restartGame, checkCard, setPrevCard } =
  gameSlice.actions
export default gameSlice.reducer
