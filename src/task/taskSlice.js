import { createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';
let value = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
const initialState = {
    value
  };

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, payload) => {
            console.log(payload.payload)
            let id = Math.random()*100
            state.value.push({item:payload.payload, id })
            localStorage.setItem('task', JSON.stringify(state.value))
        },
        removeTask: (state, { payload }) => {
            let idRemove = payload;
            let index = state.value.findIndex(id => id.id === idRemove)
            state.value.splice(index, 1)
            localStorage.setItem('task', JSON.stringify(state.value))
        }
    },
  });

export const tasks = (state) => state.value;
  
export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
