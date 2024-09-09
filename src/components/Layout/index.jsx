
import './index.scss'
import { Outlet } from 'react-router-dom'

import Sidebar from '../Sidebar/index.jsx';
const Layout = () => (

    <div className='App flex flex-col justify-between w-full h-screen overflow-x-hidden'>
        <div className=''>
        <h5 className='tags top-tags py-2 pt-4' >&lt;html&gt; </h5>
           <h5 className='tags top-tags py-2 ' >&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt; </h5>
        </div>
             <Sidebar />
        <div className='page'>
            <Outlet />       
        </div>
        <div className='mb-16'>
        <h5 className='tags top-tags py-2 '>&nbsp;&nbsp;&nbsp;&nbsp; &lt;/body&gt; </h5>
        <h5 className='tags top-tags py-2 pt-4'>&lt;/html&gt; </h5>
        </div>
       

    </div>
)


export default Layout;