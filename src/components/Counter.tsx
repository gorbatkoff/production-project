import React, {useState} from 'react';

import classes from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleClick} className={classes.btn}>Increm123ent</button>
        </div>
    );
};

export default Counter;
