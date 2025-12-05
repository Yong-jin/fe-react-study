import './Quiz05.css'
import { useState } from 'react';
import ColorBox from './ColorBox';

function Quiz05() {





    //배열에 추가 삭제
    //push(1) pop
    //shift unshift(1)

    //let [arr, setArr] = useState(['red', 'blue', 'green', 'black', 'orange', 'yellow', 'purple', 'pink']);
    let [arr, setArr] = useState(['red', 'blue', 'green', 'black']);

    return (
        <div>
            <div>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.unshift('red');
                    setArr(temp);
                }}>앞빨간박스추가</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.unshift('blue');
                    setArr(temp);
                }}>앞파란박스추가</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.unshift('green');
                    setArr(temp);
                }}>앞초록박스추가</button>

                <button onClick={() => {
                    let temp = [...arr];
                    temp.push('red');
                    setArr(temp);
                }}>뒤빨간박스추가</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.push('blue');
                    setArr(temp);
                }}>뒤파란박스추가</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.push('green');
                    setArr(temp);
                }}>뒤초록박스추가</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.shift();
                    setArr(temp);
                }}>앞 박스 삭제</button>
                <button onClick={() => {
                    let temp = [...arr];
                    temp.pop();
                    setArr(temp);
                }}>뒤 박스 삭제</button>

            </div>

            {
                arr.map((item, index)=>{
                    //return <div className="box" style={{ backgroundColor: item }}></div>
                    return <ColorBox bgColor={item}/>;
                    //<ColorBox bgColor={'red'}/>
                    //<ColorBox bgColor={'blue'}/>

                    //                                                   'red'  'blue' 'green'
                })
            }
        </div>

        /* let [arr, setArr] = useState([<div className="box" style={{ backgroundColor: 'red' }}></div>,
                <div className="box" style={{ backgroundColor: 'blue' }}></div>,
                <div className="box" style={{ backgroundColor: 'green' }}></div>,
                <div className="box" style={{ backgroundColor: 'black' }}></div> ]);
    
        return (
            <div>
                <div>
                    <button onClick={() => {
                        let temp = [...arr];
                        temp.unshift(<div className="box" style={{ backgroundColor: 'red' }}></div>);
                        setArr(temp);
                    }}>앞빨간박스추가</button>
                    <button onClick={() => {
                        let temp = [...arr];
                        temp.unshift(<div className="box" style={{ backgroundColor: 'blue' }}></div>);
                        setArr(temp);
                    }}>앞파란박스추가</button>
                    <button onClick={() => {
                        let temp = [...arr];
                        temp.unshift(<div className="box" style={{ backgroundColor: 'green' }}></div>);
                        setArr(temp);
                    }}>앞초록박스추가</button>
    
                    <button onClick={() => {
                        let temp = [...arr];
                        temp.push(<div className="box" style={{ backgroundColor: 'red' }}></div>);
                        setArr(temp);
                    }}>뒤빨간박스추가</button>
                    <button onClick={() => {
                        let temp = [...arr];
                        temp.push(<div className="box" style={{ backgroundColor: 'blue' }}></div>);
                        setArr(temp);
                    }}>뒤파란박스추가</button>
                    <button onClick={() => {
                        let temp = [...arr];
                        temp.push(<div className="box" style={{ backgroundColor: 'green' }}></div>);
                        setArr(temp);
                    }}>뒤초록박스추가</button>
                </div>
    
                {
                    arr
                }
            </div> */


        //let [arr, setArr] = useState([1, 2, 3, 4]);
        //1 : red    2: blue    3: green    4: black
        // return (
        //     <div>
        //         <div>
        //             <button onClick={() => {
        //                 let temp = [...arr];
        //                 temp.unshift(1);
        //                 setArr(temp);
        //             }}>앞빨간박스추가</button>
        //             <button onClick={() => { 
        //                 let temp = [...arr];
        //                 temp.unshift(2);
        //                 setArr(temp);
        //             }}>앞파란박스추가</button>
        //             <button onClick={() => { 
        //                 let temp = [...arr];
        //                 temp.unshift(3);
        //                 setArr(temp);
        //             }}>앞초록박스추가</button>

        //             <button onClick={() => { 
        //                 let temp = [...arr];
        //                 temp.push(1);
        //                 setArr(temp);
        //             }}>뒤빨간박스추가</button>
        //             <button onClick={() => { 
        //                 let temp = [...arr];
        //                 temp.push(2);
        //                 setArr(temp);
        //             }}>뒤파란박스추가</button>
        //             <button onClick={() => { 
        //                 let temp = [...arr];
        //                 temp.push(3);
        //                 setArr(temp);
        //             }}>뒤초록박스추가</button>
        //         </div>
        //         {/* 박스 그리는 부분 */}

        //         {/* <div className="box" style={{ backgroundColor: 'red' }}></div>
        //         <div className="box" style={{ backgroundColor: 'blue' }}></div>
        //         <div className="box" style={{ backgroundColor: 'green' }}></div>
        //         <div className="box" style={{ backgroundColor: 'black' }}></div> */}

        //         {
        //             arr.map((item, index) => {
        //                 if(item == 1)
        //                     return <div className="box" style={{ backgroundColor: 'red' }}></div>
        //                 else if (item == 2)
        //                     return <div className="box" style={{ backgroundColor: 'blue' }}></div>
        //                 else if (item == 3)
        //                     return <div className="box" style={{ backgroundColor: 'green' }}></div>
        //                 else
        //                     return <div className="box" style={{ backgroundColor: 'black' }}></div>
        //             })
        //         }
        //     </div>

    )
}

export default Quiz05;