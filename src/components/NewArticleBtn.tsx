import { Link } from "react-router-dom";

const newBtn:React.CSSProperties = {
    width : '100%',
    height: '44px',
    backgroundColor:'black',
    color:'white',
}

const NewArticleBtn = () =>{
    return(
        <Link to='/new'>
            <button style={newBtn}>
                <h2>글쓰기</h2>
            </button>
        </Link>
    )
}

export default NewArticleBtn;