import React from 'react';
import MyInfo from '../components/MyInfo';
import ToDoList from '../components/ToDoList';


const MainContent = () => {
    return (
        <main>
            <MyInfo />

            <div className="todo-item">
                <ToDoList />
                <ToDoList />
                <ToDoList />
                <ToDoList />
            </div>
        </main>
    )
}

export default MainContent;