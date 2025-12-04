import { useState } from "react";

function Quiz02() {

    let txtArr = ['하나', '둘', '셋'];
    let [index, setIndex] = useState(0);

    return (
            <div className="App">
                <p>{txtArr[index]}</p>
                <button onClick={() => {

                    //index 0 1 2 0 1 2 0 1 2 

                    //index = (index+1) > 2 ? 0 : (index + 1);

                    
                    // index = index + 1;
                    // if(index > 2){
                    //     index = 0;
                    // }
                    // 0 1 2 0 1 2 0 1 2 
                    setIndex( (index+1) % txtArr.length );

                    //setIndex(index);
                }}>변경버튼</button>
            </div>
        )


    /*
    let [flag, setFlag] = useState(1);

    if (flag == 1) {
        return (
            <div className="App">
                <p>하나</p>
                <button onClick={() => {
                    setFlag(2);                    
                }}>변경버튼</button>
            </div>
        )
    } else if (flag == 2) {
        return (
            <div className="App">
                <p>둘</p>
                <button onClick={() => {
                    setFlag(3);
                }}>변경버튼</button>
            </div>
        )
    } else {
        return (
            <div className="App">
                <p>셋</p>
                <button onClick={() => {
                    setFlag(1);
                }}>변경버튼</button>
            </div>
        )
    }
        */


    /*
    let [txt, setTxt] = useState("하나");

    return (
        <div className="App">
            <p>{txt}</p>
            <button onClick={()=>{

                if(txt == '하나')
                    setTxt('둘');
                else if(txt =='둘')
                    setTxt('셋');
                else
                    setTxt('하나');

            }}>변경버튼</button>
        </div>
    )
        */
}

export default Quiz02;