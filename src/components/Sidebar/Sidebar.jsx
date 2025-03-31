/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { sidebarLinks } from "../../constants";
import { useSelector, useDispatch } from 'react-redux';
import logo from '/logo.png'
import { useEffect } from "react";

const LinkItem = ({ title, icon: Icon, href }) =>
{
    // 根据 URL 路径设置默认激活的标签
    const { isCollapsed, selectedKey, menuItems } = useSelector(state => state.navigation);
    const dispatch = useDispatch();

    const toggleSidebar = () =>
    {
        dispatch({ type: 'TOGGLE_SIDEBAR' });
    };

    const selectMenuItem = (key) =>
    {
        dispatch({ type: 'SELECT_MENU_ITEM', payload: key });
    };
    // useEffect(() =>
    // {
    //     dispatch({ type: 'SELECT_MENU_ITEM', payload: href.split('/')[1] });
    // }, [])

    return (
        <li className={`flex items-center cursor-pointer   rounded-lg
          ${selectedKey == href.split('/')[1] ? "bg-[#e42c2a] text-white" : "hover:bg-[#e6f0ff] "}`}
            onClick={() => selectMenuItem(href.split('/')[1])}>
            <Icon className="mr-2 ml-4 text-2xl" />
            <Link
                to={href}
                className={`flex items-center p-2  rounded-lg  `}
            >
                <div className="p-1 w-20">{title}</div>
            </Link>
        </li >
    );
};

const Sidebar = () =>
{
    return (
        <aside
            className={`flex flex-col h-screen px-6 pt-16 border-r-2  border-zinc-100 `}
        >
            <div className="flex justify-center  ">
                <img src={logo} className="w-34 " ></img>
            </div>
            <div className="pt-12 ">
                <ul className=" flex flex-col gap-6">
                    {sidebarLinks.map((link, index) => (
                        <LinkItem {...link} key={index} />
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
