import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLoginRequest } from '../utils/index';
import { RiSmartphoneLine } from "react-icons/ri";

const LoginPage = () =>
{

    const [formData, setFormData] = useState({ mobile: '', password: '' });

    const [activeTab, setActiveTab] = useState('phone');

    const navigate = useNavigate();


    const handleTabClick = (tab) =>
    {
        setActiveTab(tab);
    };

    // 处理输入框的变化
    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    useEffect(() =>
    {
        const token = localStorage.getItem('token');
        console.log("use token" + token)
        if (token)
        {
            console.log("登录成功")
            navigate('/home', { replace: true });
        }
    })


    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        if (!formData.mobile && !formData.password)
        {
            return false;
        }
        const res = await userLoginRequest(formData)
        if (res.data.code == 200 && res.data.message == "登录成功")
        {
            console.log("登录成功")
            console.log(res)
            localStorage.setItem("token", res.data.data.token)
            console.log("token:" + res.data.data.token)
            navigate('/home', { replace: true });
        }
        else
        {
            alert("服务器异常")
        }
    };

    return (
        <div className="flex flex-col w-screen  h-screen  bg-cover bg-center" style={{ backgroundImage: "url('/login/bg.png')" }}>
            <div className='flex  items-center pl-24 pt-24 gap-6 text-zinc-500'>
                <img src="/logo.png" alt="" />
                <span>|</span>
                <span>数智壹号-数据分析平台</span>
            </div>
            <div className='flex flex-1  justify-center  '>
                <div className='flex w-full h-full justify-center items-center gap-4'>
                    <div className='w-1/4 h-auto'>
                        <img src="/login/ai.png" alt="" />
                    </div>
                    <div className="w-1/4   p-8 bg-white  rounded-lg">
                        <div className='text-bold text-2xl pt-4 '>登录</div>
                        <div className="flex space-x-4 mt-6 mb-6">
                            <button
                                onClick={() => handleTabClick('phone')}
                                className={`   ${activeTab === 'phone' ? 'border-b-4 border-blue-500' : ' text-gray-700'
                                    }`}
                            >
                                手机号登录
                            </button>
                            <button
                                onClick={() => handleTabClick('account')}
                                className={`  ${activeTab === 'account' ? 'border-b-4 border-blue-500' : ' text-gray-700'
                                    }`}
                            >
                                账号密码登录
                            </button>
                        </div>

                        {activeTab === 'phone' && (
                            <div className="flex flex-col gap-4">
                                <div className='flex items-center gap-3 border-[1px] border-gray-400 rounded-lg  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-1'>
                                    <div className='w-[30px] text-zinc-500 flex items-center justify-center '><span>+86</span></div>
                                    <div className=' h-4 border-l-2 border-gray-400 '></div>
                                    <input
                                        type="tel"

                                        name="phone"
                                        className=" block w-full  py-2 px-3 focus:outline-none"
                                    />
                                </div>
                                <div className='flex gap-4'>
                                    <div className=' flex flex-1 items-center gap-3 border-[1px] border-gray-400 rounded-lg  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-1'>
                                        <div className='w-[26px]  text-zinc-500 flex items-center justify-center '>
                                            <RiSmartphoneLine className='text-2xl' />
                                        </div>
                                        <div className=' h-4 border-l-2 border-gray-400 '></div>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className=" block flex-1  py-2 px-3 focus:outline-none"
                                        />
                                    </div>
                                    <button className='border-[1px] border-blue-500 py-1 px-2 text-blue-500 rounded-md text-sm font-bold'>获取验证码</button>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full flex justify-center py-2 px-4 mt-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    登录
                                </button>
                            </div>
                        )}

                        {activeTab === 'account' && (
                            <div className="flex flex-col gap-4">
                                <div className='flex items-center gap-3 border-[1px] border-gray-400 rounded-md  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-1'>
                                    <input
                                        type="text"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        name="mobile"
                                        className=" block w-full  py-2 px-3 focus:outline-none"
                                        placeholder='账号'
                                    />
                                </div>
                                <div className='flex items-center gap-3 border-[1px] border-gray-400 rounded-md  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-1'>
                                    <input
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        name="password"
                                        className=" block w-full  py-2 px-3 focus:outline-none"
                                        placeholder='密码'
                                    />
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    className="w-full flex justify-center py-2 px-4 mt-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    登录
                                </button>
                            </div>
                        )}
                        <div className='flex justify-between pt-6 text-zinc-600'>
                            <div>还没有账号？<span className='text-blue-500'>立即注册</span></div>
                            <div className='text-blue-500'>忘记密码？</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default LoginPage;