import { configureStore } from '@reduxjs/toolkit'
import moviereducer from './reducers/movieslice'
import tvreducer from './reducers/tvslice'
import personreducer from './reducers/personslice'

export const store = configureStore({
  reducer: {
    movie:moviereducer,
    tv:tvreducer,
    person:personreducer
  },
})