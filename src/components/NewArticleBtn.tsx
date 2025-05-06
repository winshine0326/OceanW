import { Link } from "react-router-dom";

const newBtn:React.CSSProperties = {
    width : '100%',
    height: '44px',
    color:'white',
    textAlign:'center',
}

const NewArticleBtn = () =>{
    return(
        <Link to='/new'>
            <div style={newBtn}>
                <h2> + 글쓰기</h2>
            </div>
        </Link>
    )
}

export default NewArticleBtn;