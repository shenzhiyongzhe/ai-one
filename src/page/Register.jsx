import { useNavigate } from 'react-router-dom';
import { userRegisterRequest } from '../utils/http';
import { TbEyeClosed } from "react-icons/tb";
import { useState } from 'react';

const RegisterPage = () =>
{

    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [error, setError] = useState('');

    // 手机号码校验函数
    const validatePhone = (value) =>
    {
        const phoneRegex = /^[1][3-9][0-9]{9}$/; // 正则表达式：11位手机号码
        if (!phoneRegex.test(value))
        {
            setPhoneNumberError('请输入正确的11位手机号码');
            return false;
        }
        setPhoneNumberError('');
        return true;
    };
    // 处理输入框值的变化
    const phoneInputChange = (event) =>
    {
        const inputValue = event.target.value;
        setPhoneNumber(inputValue);
        validatePhone(inputValue); // 实时校验
    };

    const handlePasswordChange = (event) =>
    {
        setPassword(event.target.value);
    };
    const handleConfirmPasswordChange = (event) =>
    {
        const inputConfirmPassword = event.target.value;
        setConfirmPassword(inputConfirmPassword);

        if (inputConfirmPassword !== password)
        {
            setError('两次输入的密码不一致');
        } else
        {
            setError('');
        }
    };

    const registerClick = async () =>
    {
        if (phoneNumberError || error)
        {
            return
        }
        const params = { mobile: phoneNumber, password, passwordagain: confirmPassword }
        const res = await userRegisterRequest(params)
        console.log(res)
        if (res.data.code == 200 && res.data.message == "注册成功")
        {
            console.log("注册成功")
            localStorage.setItem("token", res.data.data.token)
            navigate('/home', { replace: true });
        }
        else if (res.message == "手机号已注册")
        {
            alert("手机号已注册")
        }
    }


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
                        <div className='text-bold text-2xl pt-4 '>注册账号</div>

                        <div className="flex flex-col gap-6 mt-8">
                            <div className='flex flex-col gap-1'>
                                <div className='flex items-center gap-1 border-[1px] border-gray-400 rounded-lg  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-1'>
                                    <div className='w-[59px] text-zinc-500 flex items-center justify-center '><span>+86</span></div>
                                    <div className=' h-4 border-l-2 border-gray-400 '></div>
                                    <input
                                        type="text"
                                        maxLength={11}
                                        placeholder='请输入您的手机号码'
                                        onChange={phoneInputChange}
                                        className=" block w-full  py-2 px-3 focus:outline-none"
                                    />
                                </div>
                                {phoneNumberError && <p className=' text-sm text-red-500'>{phoneNumberError}</p>}
                            </div>

                            <div className=' flex flex-1 items-center gap-1 border-[1px] border-gray-400 rounded-lg  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-1'>
                                <div className='w-[48px]  text-zinc-500 flex items-center justify-center '>
                                    <TbEyeClosed className='text-2xl' />
                                </div>
                                <div className=' h-4 border-l-2 border-gray-400 '></div>
                                <input
                                    type="password"
                                    placeholder='请输入您的密码'
                                    onChange={handlePasswordChange}
                                    className="  flex-1  py-2 px-3 input-focus"
                                />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className=' flex flex-1 items-center gap-1 border-[1px] border-gray-400 rounded-lg  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-1'>
                                    <div className='w-[48px]  text-zinc-500 flex items-center justify-center '>
                                        <TbEyeClosed className='text-2xl' />
                                    </div>
                                    <div className=' h-4 border-l-2 border-gray-400 '></div>
                                    <input
                                        type="password"
                                        placeholder='请再次输入您的密码'
                                        onChange={handleConfirmPasswordChange}
                                        className="  flex-1  py-2 px-3 input-focus"
                                    />
                                </div>
                                {error && <p className=' text-sm text-red-500'>{error}</p>}
                            </div>

                            <button
                                onClick={registerClick}
                                className="w-full flex justify-center py-2 px-4 mt-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                注册
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default RegisterPage;