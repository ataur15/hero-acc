import { useEffect, useState } from 'react';

function App() {
    const [state, toggle] = useState(0);

    useEffect(() => {
        let timer = setInterval(() => {
            console.log(`state ${state}`);
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div>
            <h2>{`${state}`}</h2>
            <button
                onClick={() => {
                    toggle(state + 1);
                }}
            >
                Increase
            </button>
        </div>
    );
}

export default App;
