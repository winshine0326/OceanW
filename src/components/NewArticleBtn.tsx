import { Link } from "react-router-dom";
import '../global.css';

const newBtn:React.CSSProperties = {
    width : '100%',
    height: '44px',
    color:'white',
    textAlign:'center',
    fontFamily:'SokchoBadaCalligraphy',
}

const NewArticleBtn = () =>{
    return(
        <Link to='/new' style={{ textDecoration: 'none' }}>
            <div style={newBtn}>
                <h2> + 글쓰기</h2>
            </div>
        </Link>
    )
}

export default NewArticleBtn;