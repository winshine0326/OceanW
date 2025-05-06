const newBtn:React.CSSProperties = {
    width : '100%',
    height: '44px',
    backgroundColor:'black',
    color:'white',
}

const NewArticleBtn = () =>{
    return(
        <button style={newBtn}>
            <h2>글쓰기</h2>
        </button>
    )
}

export default NewArticleBtn;