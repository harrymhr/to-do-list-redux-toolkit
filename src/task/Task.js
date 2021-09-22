import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from './taskSlice'
import styled from 'styled-components'

const Main = styled.div`
input {
    margin: 0;
    border: none;
    border-radius: 0;
    width: 75%;
    padding: 10px;
    font-size: 16px;
}
.submitBtn {
    font-size: 1em;
    margin: 1em;
    padding: 0.50em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    color: tomato;
    border-color: tomato;
    width: 25%;
}
button:hover {
    cursor: pointer 
}  
ul {
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-item:center;
        margin: 0;
        padding: 0;
}
li {
    cursor: pointer;
    position: relative;
    padding: 12px 8px 12px 40px;
    font-weight:500;
    list-style-type: none;
    background: #eee;
    font-size: 18px;
    transition: 0.2s;
}
ul li:nth-child(odd) {
    background: #f9f9f9;
  }
  ul li:hover {
    background: #ddd;
  }
.removeBtn {
    right: 0
}
`;

const Task = () => {

    const dispatch = useDispatch()
    const task = useSelector(state => state.tasks.value)
    const [add, setAdd] = useState('')
    console.log(task)

    const submitData = (e) => {
        if (add) {
            dispatch(addTask(add))
        }
        setAdd('')
    }
    
    const removeMyTask = (val) => {
        console.log(val)
        dispatch(removeTask(val))
    }

    return (
        <Main>
            <div>
                <input type="text" value={add} onChange={e => setAdd(e.target.value)}/>
            </div>
            <div>
            <button className="submitBtn" onClick={submitData}>Add</button>
            </div>
            <ul>
            {task.map((user) => (
                <li key={user.id}>{user.item} <button onClick={() => removeMyTask(user.id)} className="removeBtn">remove</button></li>
            ))}
            </ul>
        </Main>
    )
}

export default Task;