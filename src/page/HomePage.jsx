import { MainView } from "../components/MainView/MainView"
import Management from "../components/Management/Management";
import avater from "/avatar.png"
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const HomePage = () =>
{
    const accountList = [
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },
        {
            id: "ID19866**264",
            content: "发图文...",
            status: "正常"
        },


    ]
    const navigate = useNavigate();
    const logoutClick = () =>
    {
        localStorage.removeItem("token")
        navigate('/login', { replace: true });
    }
    return (
        <MainView>
            <div className="flex  flex-col">
                <div className="flex justify-between">
                    <div className="flex justify-center items-center text-zinc-500">
                        <div className="w-16 h-auto">
                            <img src={avater} />
                        </div>
                        <div className="text-sm  p-3">
                            <div>
                                壹号 | ID号码：192665*868 | 管理员
                            </div>
                            <div className="flex gap-12">
                                <span>发布作品 180</span>
                                <span>订单: 18000</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-zinc-500 hover:cursor-pointer flex flex-col items-center justify-center gap-1">
                        <div className="w-10">
                            <img src={avater} alt="用户头像" />
                        </div>
                        <button className="text-sm" onClick={logoutClick}>退出</button>
                    </div>
                </div>

                <div className="flex pt-12 gap-6">
                    <div className="flex flex-col gap-6">
                        <div className="bg-white min-w-[900px] px-5 py-6 rounded-md shadow-md ">
                            <h1 className="font-bold text-sm">
                                我的管理
                            </h1>
                            <Management />

                        </div>
                        <div className="bg-white min-w-[900px] px-5 py-6 rounded-md shadow-md">
                            <h1 className="font-bold text-sm">
                                数据概览
                            </h1>
                            <div className="flex items-center gap-7">
                                <div className="min-w-[220px] flex flex-col justify-center items-center py-4 ">
                                    <div className="text-[#e34141] text-[30px]">180</div>
                                    <div className="text-sm text-zinc-500">今日发布数据</div>
                                </div>
                                <div className="min-w-[220px] flex flex-col justify-center items-center py-4 ">
                                    <div className="text-[#e34141] text-[30px]">180</div>
                                    <div className="text-sm text-zinc-500">今日发布数据</div>
                                </div>
                                <div className="min-w-[220px] flex flex-col justify-center items-center py-4 ">
                                    <div className="text-[#e34141] text-[30px]">180</div>
                                    <div className="text-sm text-zinc-500">今日发布数据</div>
                                </div>
                                <div className="min-w-[220px] flex flex-col justify-center items-center py-4 ">
                                    <div className="text-[#e34141] text-[30px]">180</div>
                                    <div className="text-sm text-zinc-500">今日发布数据</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white min-w-[900px] px-5 py-6 rounded-md shadow-md">
                            <div className="flex justify-between">
                                <h1 className="font-bold text-sm">
                                    今日订单
                                </h1>
                                <button className="flex gap-1 items-center justify-center bg-[#e22c2c] text-white px-4 py-1 rounded-lg mr-8">
                                    <FaPlus className="text-white" />
                                    <span>新增发布</span>
                                </button>
                            </div>
                            <div className="flex flex-col gap-3 w-full text-zinc-500 text-sm">
                                <div className=" w-full flex mt-4  justify-between ">
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <img src="/todayOrder/01.png" alt="" />
                                        </div>
                                        <div className="">
                                            <h1 className="text-zinc-700">作品标题:作品标题文字描述</h1>
                                            <p>作品链接:www.zuopin.com</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-1  justify-around items-center">
                                        <div className="flex gap-3">
                                            <span>2025-3-14</span>
                                            <span>10:20</span>
                                        </div>
                                        <div>8888</div>
                                        <div className="flex items-center gap-2">
                                            <span>查看</span>
                                            <div className="border-l border-zinc-400  h-2"></div>
                                            <span>加热</span>
                                        </div>
                                    </div>
                                </div>

                                <div className=" w-full flex mt-4  justify-between ">
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <img src="/todayOrder/02.png" alt="" />
                                        </div>
                                        <div className="">
                                            <h1 className="text-zinc-700">作品标题:作品标题文字描述</h1>
                                            <p>作品链接:www.zuopin.com</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-1  justify-around items-center">
                                        <div className="flex gap-3">
                                            <span>2025-3-14</span>
                                            <span>10:20</span>
                                        </div>
                                        <div>8888</div>
                                        <div className="flex items-center gap-2">
                                            <span>查看</span>
                                            <div className="border-l border-zinc-400  h-2"></div>
                                            <span>加热</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" w-full flex mt-4  justify-between ">
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <img src="/todayOrder/03.png" alt="" />
                                        </div>
                                        <div className="">
                                            <h1 className="text-zinc-700">作品标题:作品标题文字描述</h1>
                                            <p>作品链接:www.zuopin.com</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-1  justify-around items-center">
                                        <div className="flex gap-3">
                                            <span>2025-3-14</span>
                                            <span>10:20</span>
                                        </div>
                                        <div>8888</div>
                                        <div className="flex items-center gap-2">
                                            <span>查看</span>
                                            <div className="border-l border-zinc-400  h-2"></div>
                                            <span>加热</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" w-full flex mt-4  justify-between ">
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <img src="/todayOrder/04.png" alt="" />
                                        </div>
                                        <div className="">
                                            <h1 className="text-zinc-700">作品标题:作品标题文字描述</h1>
                                            <p>作品链接:www.zuopin.com</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-1  justify-around items-center">
                                        <div className="flex gap-3">
                                            <span>2025-3-14</span>
                                            <span>10:20</span>
                                        </div>
                                        <div>8888</div>
                                        <div className="flex items-center gap-2">
                                            <span>查看</span>
                                            <div className="border-l border-zinc-400  h-2"></div>
                                            <span>加热</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="bg-white px-5 py-6 rounded-md shadow-md">
                        <div className="w-[400px]">
                            <img src="/newAIModel.png" alt="" />
                        </div>
                        <div className="flex justify-between px-2 py-4 text-sm">
                            <span>账号管理</span>
                            <div className="flex gap-1 items-center">
                                <div>新增账号</div>
                                <div className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center">+</div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between  px-2 py-1 font-semibold bg-[#f6f6fc] rounded-lg">
                                <div >设备号码</div>
                                <div >今日工作</div>
                                <div >状态</div>
                            </div>
                            <ul className="mt-3">
                                {accountList.map((item, index) =>
                                {
                                    return (<li key={index} className="flex justify-between text-zinc-500 text-sm px-2 py-1">
                                        <span >{item.id}</span>
                                        <span className="mr-7">{item.content}</span>
                                        <span >{item.status}</span>
                                    </li>)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </MainView>
    )
}

export default HomePage
