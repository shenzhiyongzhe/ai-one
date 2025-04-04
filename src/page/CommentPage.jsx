import Header from "../components/Header/Header"
import { MainView } from "../components/MainView/MainView"
import SocialPlatformOption from "../components/SocialPlatformOption";
import CounterButton from "../components/CounterButton";
import { useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import Popup from "../components/Popup";
import { LinkValidation } from "../utils/tool";
import { GenerateTaskRequest } from "../utils/http";

const CommentPage = () =>
{
    const location = useLocation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [popupContent, setPopupContent] = useState({})
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const commentTxtRef = useRef('')
    const [selectedPlatform, setSelectedPlatform] = useState([])
    const [count, setCount] = useState(1)
    const [formData, setFormData] = useState({ anchor_id: '', keyword: '', url: '', password_url: '', start_time: '', end_time: '' });


    const handleSelectionChange = (values) =>
    {
        setSelectedPlatform(values);
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

    const submitBtnClick = async () =>
    {
        const pathName = location.pathname.split("/")[1]
        const actionTypeArr = ["", 'share', "likes", "comment", "live"]
        const action_type = actionTypeArr.indexOf(pathName)

        const comment = commentTxtRef.current.value;
        const { anchor_id, keyword, url, start_time, end_time } = formData;
        const startDate = new Date(start_time.replace('T', ' '));
        const endDate = new Date(end_time.replace('T', ' '));
        const now = new Date();
        if (!anchor_id && !keyword && !url)
        {
            setPopupContent({ title: "未填写必要参数", content: "请填写用户id或关键字或url" })
        }
        else if (url && !LinkValidation(url))
        {
            setPopupContent({ title: "url格式错误", content: "请输入有效链接" })
        }
        else if (selectedPlatform.length == 0)
        {
            setPopupContent({ title: "未选择点赞平台", content: "请选择一个点赞平台" })
        }
        else if (!comment)
        {
            setPopupContent({ title: "评论内容为空", content: "请填写评论内容" })
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
            const params = { action_type, anchor_id, keyword, url, comment, start_time, end_time, platform: selectedPlatform, quantity: count }
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
        // setFormData({ anchor_id: '', keyword: '', url: '', password_url: '', start_time: '', end_time: '' })
        openModal()
    }

    return (
        <MainView>
            <div className="flex flex-col gap-6 ">
                <Header />
                <div className="flex flex-col gap-10 bg-white min-w-[900px] px-10 py-4 rounded-md shadow-md">
                    <div className="flex items-end gap-2 mt-4">
                        <div>
                            <img src="/评论回复.png" alt="" />
                        </div>
                        <div className="text-zinc-500 pb-1">输入你想要点赞的用户或对象</div>
                    </div>
                    <div className="flex gap-6 items-center text-zinc-600">
                        <input type="text" name="anchor_id" value={formData.anchor_id} onChange={handleChange} placeholder="用户ID:" className="w-72 border-2 rounded-lg py-1 px-2 input-focus" />
                        <span>或</span>
                        <input type="text" name="keyword" value={formData.keyword} onChange={handleChange} placeholder="常用关键词:" className="w-72 border-2 rounded-lg py-1 px-2 input-focus" />
                        <span>或</span>
                        <input type="text" name="url" value={formData.url} onChange={handleChange} placeholder="url:" className="w-72 border-2 rounded-lg py-1 px-2 input-focus" />
                    </div>
                    <div className="mt-3 text-zinc-600 flex flex-col gap-4">
                        <h1>选择点赞平台</h1>
                        <SocialPlatformOption type={"radio"} onChange={handleSelectionChange} />
                    </div>
                    <textarea ref={commentTxtRef} className="w-full border-2 p-3 min-h-24 rounded-xl input-focus" placeholder="评论" id=""></textarea>
                    <div className="flex gap-4 items-center ">
                        <span className="text-zinc-600">数量要求</span>
                        <CounterButton onChange={handleCountChange} />
                    </div>
                    <div className="flex gap-5 text-zinc-600 items-center ">
                        <span>起止时间</span>
                        <input name="start_time" value={formData.start_time} onChange={handleChange} className="w-48 text-right rounded-3xl input-focus border-2 py-1 px-2 " type="datetime-local" placeholder="年-月-日" />
                        <span>至</span>
                        <input name="end_time" value={formData.end_time} onChange={handleChange} className="w-48 text-right rounded-3xl input-focus border-2 py-1 px-2 " type="datetime-local" placeholder="年-月-日" />

                    </div>
                    <div className="flex justify-end">
                        <button className="confirm-btn" onClick={submitBtnClick} >确定</button>
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

export default CommentPage
