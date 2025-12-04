import { useState } from "react";
import './Quiz01.css';

function Quiz01(){

    //let count = 0;
    let [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={()=>{
                //count = count + 2;
                setCount(count + 2);
            }}>짝수출력</button>
            <span className="font-red" style={ {color:'red'}}>{count}</span>
        </div>
    );
}


export default Quiz01;