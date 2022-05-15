import React from 'react';
import './App.css';
import Lists from './components/Lists';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="App">
            <Lists />
            <TodoList />
        </div>
    );
}

export default App;
