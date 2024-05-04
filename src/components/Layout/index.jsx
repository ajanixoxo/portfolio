
import './index.scss'
import {Outlet} from 'react-router-dom'

import Sidebar from '../Sidebar/index.jsx';
const Layout = () => (
    <div className='App'>
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'> </span>

            <Outlet />
            <span className='tags bottom-tags'>
          
            <br/>
          
            </span>
        </div>
    </div>
)


export default Layout;