import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import taskReducer from '../task/taskSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasks: taskReducer

  },
});
