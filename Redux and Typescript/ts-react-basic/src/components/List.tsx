import React from 'react';

const List = ({ items, myFunc }: {
    items: string[],
    myFunc: (item: string) => void
}) => {
    return (
        <div>
            {items.map((item, index) =>
                <li key={index} onClick={() => myFunc(item)}>
                    {item}
                </li>)
            }
        </div>
    );
};

export default List;