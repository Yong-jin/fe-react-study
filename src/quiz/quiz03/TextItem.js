

//Box
//Quiz03_Box

//function TextItem(props) {  //props.title  props.content 
function TextItem( {title, content} ) {  //title  content 

    return (
        <div className='textItem'>
            <p className='title'>제목 : {title}</p>   {/* props.title */}
            <p>내용 : {content}</p>   {/* props.content */}
        </div>
    )

}

export default TextItem;