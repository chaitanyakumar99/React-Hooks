import React, { useState } from "react"

function Functioncounter() {

    const [count, setCount] = useState(0);


    const increase = () => setCount(count + 1);

    const decrese = () => setCount(count - 1)

    return <div>
        <button onClick={increase}>INCR</button>
        <h1>Count:{count}</h1>

        <button onClick={decrese}>Decr</button>
    </div>
}

export default Functioncounter;