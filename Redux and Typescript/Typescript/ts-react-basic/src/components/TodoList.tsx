import React, { useCallback, useReducer, useRef } from 'react';

interface Todo {
    id: number;
    text: string;
}

type ActionType = { type: 'ADD'; text: string } | { type: 'REMOVE'; id: number };

const reducer = (state: Todo[], action: ActionType) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: state.length,
                    text: action.text,
                },
            ];

        case 'REMOVE':
            return state.filter(({ id }) => id !== action.id);
    }
};

const TodoList = () => {
    // useReducer
    const [todos, dispatch] = useReducer(reducer, []);

    // Catch the dom element
    const todoRef = useRef<HTMLInputElement>(null);

    // useCallback
    const onTodoAdd = useCallback(() => {
        if (todoRef.current) {
            dispatch({
                type: 'ADD',
                text: todoRef.current.value,
            });

            todoRef.current.value = '';
        }
    }, []);

    return (
        <div>
            <input type="text" ref={todoRef} />
            <button onClick={onTodoAdd}>Add</button>
            <div>
                {todos.map((todo) => (
                    <p key={todo.id}>
                        {todo.text}{' '}
                        <button onClick={() => dispatch({ type: 'REMOVE', id: todo.id })}>
                            Remove
                        </button>
                    </p>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
