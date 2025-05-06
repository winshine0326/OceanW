import logo from '../assets/image/oceanWIcon.png';

const sidebarConatiner: React.CSSProperties = {
    width: '12%',
    height: '100vh',
    backgroundColor: 'rgba(3, 4, 94, 0.7)',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding:'0 10px',
};

const iconContainer:React.CSSProperties = {
    width: '100%',
    height: '50px',
    backgroundColor: 'black',
    margin: '10px 0',
}

const logoStyle:React.CSSProperties = {
    height:'100%',
    width:'auto',
}

const SideBar = (): React.ReactElement => {
    return (
      <div style={sidebarConatiner}>
        <div style={iconContainer}>
            <img src={logo} alt="OceanWIcon" style={logoStyle}/>
        </div>
        <div>

        </div>
      </div>
    );
};

export default SideBar