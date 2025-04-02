import Header from "../components/Header/Header"
import { MainView } from "../components/MainView/MainView"
import { MdOutlinePersonSearch } from "react-icons/md";
import SocialPlatformOption from "../components/SocialPlatformOption";
import CounterButton from "../components/CounterButton";
import { useState, } from "react";
import { useLocation } from 'react-router-dom';
import { GenerateTaskRequest } from "../utils/http";
import Popup from "../components/Popup";
import { LinkValidation } from "../utils/tool";
import StateBtn from "../components/StateBtn";
const LikesPage = () =>
{
    const location = useLocation();


    const handleSelectionChange = (values) =>
    {
        setSelectedPlatform(values)
    };
    const handleCountChange = (num) =>
    {
        setCount(num)
    }

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [popupContent, setPopupContent] = useState({})
    const [selectedPlatform, setSelectedPlatform] = useState([])
    const [count, setCount] = useState(1)
    const [formData, setFormData] = useState({ anchor_id: '', keyword: '', url: '', password_url: '', start_time: '', end_time: '' });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    const submitBtnClick = async () =>
    {
        const pathName = location.pathname.split("/")[1]
        const actionTypeArr = ["", 'share', "likes", "comment", "live"]
        const action_type = actionTypeArr.indexOf(pathName)

        const { anchor_id, keyword, url, password_url, start_time, end_time } = formData;

        const startDate = new Date(start_time.replace('T', ' '));
        const endDate = new Date(end_time.replace('T', ' '));
        const now = new Date();

        if (!anchor_id && !keyword && !url && !password_url)
        {
            setPopupContent({ title: "未填写必要参数", content: "请输入其中一个类型" })
        }
        else if (url && !LinkValidation(url))
        {
            setPopupContent({ title: "url格式错误", content: "请输入有效链接" })
        }
        else if (selectedPlatform.length == 0)
        {
            setPopupContent({ title: "未填写必要参数", content: "请选择一个点赞平台" })
        }
        else if (!start_time)
        {
            setPopupContent({ title: "未填写必要参数", content: "请选择开始时间" })
        }
        else if (!end_time)
        {
            setPopupContent({ title: "未填写必要参数", content: "请选择结束时间" })
        }

        else if (startDate < now)
        {
            setPopupContent({ title: "填写时间错误", content: "开始时间不能是过去时间" })
        }

        else if (endDate <= startDate)
        {
            setPopupContent({ title: "填写时间错误", content: "结束时间不能早于开始时间" })
        }
        else
        {
            const params = { action_type, anchor_id, keyword, url, password_url, start_time, end_time, platform: selectedPlatform, quantity: count }
            const res = await GenerateTaskRequest(params)
            if (res.data)
            {
                setPopupContent({ title: "发送结果", content: res.data.message })
            }
            else
            {
                setPopupContent({ title: "服务器错误", content: "发送数据失败" })
            }
            console.log("res:" + JSON.stringify(res))
            console.log("params:" + JSON.stringify(params))
        }

        openModal()
        // setFormData({ anchor_id: '', keyword: '', url: '', password_url: '', start_time: '', end_time: '' })
    }

    return (
        <MainView>
            <div className="flex flex-col gap-6 ">
                <Header />
                <div className="flex flex-col gap-10 bg-white min-w-[900px] px-5 py-4 rounded-md shadow-md">
                    <div className="flex items-end gap-2">
                        <MdOutlinePersonSearch className="text-[48px] text-[#3ed0c1]" />
                        <div className="text-zinc-500 pb-1">输入你想要点赞的用户或对象</div>
                    </div>
                    <div className="flex flex-col gap-4  text-zinc-600 max-w-[800px]">
                        <div className="flex  gap-6">
                            <div className="flex flex-1 items-center gap-2 justify-end" >
                                <span className="">用户ID:</span>
                                <input type="text" name="anchor_id" value={formData.anchor_id} onChange={handleChange} maxLength={20} placeholder="2233" className="w-72 input-focus primary-input" />
                            </div>
                            <div className="flex flex-1  items-center gap-2 justify-end">
                                <span>关键字:</span>
                                <input type="text" name="keyword" value={formData.keyword} onChange={handleChange} maxLength={20} placeholder="深圳" className="w-72 input-focus primary-input" />
                            </div>
                        </div>
                        <div className="flex   gap-6">
                            <div className="flex flex-1 items-center gap-2 justify-end ">
                                <span>url:</span>
                                <input type="text" name="url" value={formData.url} onChange={handleChange} maxLength={100} placeholder="url:" className="w-72 input-focus primary-input" />
                            </div>
                            <div className="flex flex-1 items-center gap-2 justify-end">
                                <span>口令:</span>
                                <input type="text" name="password_url" value={formData.password_url} onChange={handleChange} title="口令（视频号请粘贴标题加账号，中间空格）" maxLength={300} placeholder="口令:" className="w-72 input-focus primary-input" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 text-zinc-600 flex flex-col gap-4">
                        <h1>选择点赞平台</h1>
                        <SocialPlatformOption type={"radio"} onChange={handleSelectionChange} />
                    </div>
                    <div className="flex gap-4 items-center ">
                        <span className="text-zinc-600">数量要求</span>
                        <CounterButton onChange={handleCountChange} />
                    </div>
                    <div className="flex gap-5 text-zinc-600 items-center ">
                        <h1>起止时间</h1>
                        <input type="datetime-local" name="start_time" value={formData.start_time} onChange={handleChange} className="w-48  rounded-3xl input-focus border-2 py-1 px-2 " />
                        <span>至</span>
                        <input type="datetime-local" name="end_time" value={formData.end_time} onChange={handleChange} className="w-48  rounded-3xl input-focus border-2 py-1 px-2 " />
                    </div>
                    <div className="flex justify-end">
                        <StateBtn className="confirm-btn" type="button" onClick={submitBtnClick} >确定</StateBtn>
                    </div>
                    <Popup
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        title={popupContent.title}
                        content={popupContent.content}
                    />
                </div>
            </div>
        </MainView>
    )
}

export default LikesPage
