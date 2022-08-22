import { configureStore } from '@reduxjs/toolkit'

import game from './slices/gameSlice'

export const store = configureStore({
  reducer: {
    game,
  },
})

export type RootState = ReturnType<typeof store.getState>
