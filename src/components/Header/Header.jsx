import { GoHome } from "react-icons/go";

import Management from "../Management/Management"
import { useNavigate } from 'react-router-dom';


const Header = () =>
{
    const navigate = useNavigate();
    const backHomeClick = () =>
    {
        navigate('/home');
    }
    return (
        <div className="flex justify-between items-center bg-white min-w-[900px] px-5 py-4 rounded-md shadow-md">
            <Management />
            <div className="flex justify-center items-center gap-2 hover:cursor-pointer" onClick={backHomeClick}>
                <GoHome className="text-2xl" />
                <span>返回首页</span>
            </div>
        </div>
    )
}

export default Header
