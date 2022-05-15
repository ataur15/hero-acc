import React from 'react';
import List from './List';

const Lists = () => {
    const items: string[] = ['Tamim', 'Shamim', 'Hamim', 'Sakib'];

    const myFunc = (item: string): void => {
        alert(item);
    };

    return (
        <div>
            <List items={items} myFunc={myFunc}></List>
        </div>
    );
};

export default Lists;
