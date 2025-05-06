import { Outlet } from 'react-router-dom';
import './global.css'

const Layout = () => {
    return (
        <div className='container'>
            <Outlet/>
        </div>
    )
}

export default Layout;