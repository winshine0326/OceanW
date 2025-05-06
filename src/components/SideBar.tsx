import logo from '../assets/image/oceanWIcon.png';
import leftWhale from '../assets/image/leftWhale.png';
import rightWhale from '../assets/image/rightWhale.png';
import NewArticleBtn from './NewArticleBtn';
import { useNavigate } from 'react-router-dom';

const sidebarConatiner: React.CSSProperties = {
    width: '12%',
    height: '100vh',
    backgroundColor: 'rgba(3, 4, 94, 0.7)',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding:'0 10px',
    position:'absolute',
    zIndex:'999'
};

const iconContainer:React.CSSProperties = {
    width: '100%',
    height: '50px',
    margin: '10px 0',
    display:'flex',
    justifyContent:'space-between'
}

const logoStyle:React.CSSProperties = {
    height:'100%',
    width:'auto',
}

const whales:React.CSSProperties = {
    width:'auto',
    height:'100%',
    display:'flex',
    alignItems:'center',
    gap:'8px',
}

const whaleStyle:React.CSSProperties = {
    width: '20px',
    height: 'auto'
}

const SideBar = (): React.ReactElement => {
    const navigate = useNavigate();

    const handleLeftWhaleClick = () => {
        navigate(-1);
    };

    const handleRightWhaleClick = () => {
        navigate(1);
    };

    return (
      <div style={sidebarConatiner}>
        <div style={iconContainer}>
            <img src={logo} alt="OceanWIcon" style={logoStyle}/>
            <div style={whales}>
                <img src={leftWhale} alt="leftWhale" style={whaleStyle} onClick={handleLeftWhaleClick}/>
                <img src={rightWhale} alt="rightWhale" style={whaleStyle} onClick={handleRightWhaleClick}/>
            </div>
        </div>
        <div>
            <NewArticleBtn/>
        </div>
      </div>
    );
};

export default SideBar