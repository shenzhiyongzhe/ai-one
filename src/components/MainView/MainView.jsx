/* eslint-disable react/prop-types */

import Sidebar from '../Sidebar/Sidebar';
import Content from "../../ui/Content";

export const MainView = ({ children }) =>
{
    return (
        <div className=' overflow-visible flex w-full '>
            <Sidebar />
            <div className='flex-1'>
                <Content>
                    {children}
                </Content>
            </div>


        </div>
    )
}


