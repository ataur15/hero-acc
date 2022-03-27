import React from 'react';
import List from './List';

const Lists = () => {
    const items: string[] = ['Tamim', 'Shamim', 'Hamim', 'Sakib'];

    const myFunc = (text: string): void => {
        alert(text);
    }

    return (
        <div>
            <List items={items} myFunc={myFunc}></List>
        </div>
    );
};

export default Lists;