import React,{useState} from 'react';

function DemoStateFunctional(propos){
    const [count,setCount] = useState(0);
    
    const incrementCount = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <p> Hello!{propos.who} Count: {count}</p>
            <button onClick={incrementCount}>Increment Count(Functional)</button>
        </div>
    );
}

export default DemoStateFunctional;