
//<ColorBox bgColor={'red'}/>
//  props = {bgColor:'red'}
function ColorBox({bgColor}){  
    return (
        <div className="box" style={{ backgroundColor: bgColor }}></div>
    )
}
//

/* function ColorBox(props){  
    return (
        <div className="box" style={{ backgroundColor: props.bgColor }}></div>
    )
} */


export default ColorBox;