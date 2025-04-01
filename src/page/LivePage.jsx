import CounterButton from "../components/CounterButton"
import Header from "../components/Header/Header"
import { MainView } from "../components/MainView/MainView"
import SocialPlatformOption from "../components/SocialPlatformOption"
import { useLocation } from 'react-router-dom';
import Popup from "../components/Popup";
import { useState, useRef } from "react";
import { LinkValidation } from "../utils/tool";

const LivePage = () =>
{
    const location = useLocation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [popupContent, setPopupContent] = useState({})
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const anchorIDRef = useRef('');
    const urlRef = useRef('')
    const [selectedPlatform, setSelectedPlatform] = useState([])
    const startTimeRef = useRef('')
    const endTimeRef = useRef('')
    const [count, setCount] = useState(1)

    const handleSelectionChange = (values) =>
    {
        setSelectedPlatform(values)
    };

    const handleCountChange = (num) =>
    {
        setCount(num)
    }
    const submitBtnClick = async () =>
    {
        const pathName = location.pathname.split("/")[1]
        const actionTypeArr = ["", 'share', "likes", "comment", "live"]
        const action_type = actionTypeArr.indexOf(pathName)
        const anchor_id = anchorIDRef.current.value;
        const url = urlRef.current.value;

        const start_time = startTimeRef.current.value;
        const end_time = endTimeRef.current.value;

        const formData = { action_type, anchor_id, url, platforms: selectedPlatform, quantity: count, start_time, end_time }

        console.log(JSON.stringify(formData))
        if (!anchor_id && !url)
        {
            setPopupContent({ title: "未填写必要参数", content: "请填写主播ID或url" })
            openModal()
            return;
        }

        if (!LinkValidation(url))
        {
            setPopupContent({ title: "url格式错误", content: "请输入有效链接" })
            openModal()
            return;
        }
        if (selectedPlatform.length == 0)
        {
            setPopupContent({ title: "未选择点赞平台", content: "请选择一个点赞平台" })
            openModal()
            return;
        }
        if (!start_time)
        {
            setPopupContent({ title: "填写时间错误", content: "请输入开始时间" })
            openModal()
            return;
        }
        const startDate = new Date(start_time.replace('T', ' '));
        const endDate = new Date(end_time.replace('T', ' '));
        const now = new Date();
        if (!start_time)
        {
            setPopupContent({ title: "填写时间错误", content: "请输入开始时间" })
            openModal()
            return;
        }
        if (startDate < now)
        {
            setPopupContent({ title: "填写时间错误", content: "开始时间不能是过去时间" })
            openModal()
            return;
        }

        if (endDate <= startDate)
        {
            setPopupContent({ title: "填写时间错误", content: "结束时间不能早于开始时间" })
            openModal()
            return;
        }
    }
    return (
        <MainView>
            <div className="flex flex-col gap-6">
                <Header />
                <div className="flex flex-col gap-10 bg-white min-w-[900px] px-5 py-4 rounded-md shadow-md">
                    <div className="flex items-end gap-2">
                        <div><img src="/live.png" alt="" /></div>
                        <span>输入直播间的ID或对象</span>
                    </div>
                    <div className="flex gap-4 items-center text-zinc-600">
                        <input type="text" ref={anchorIDRef} placeholder="主播ID:" className="w-72 border-2 rounded-xl px-2 py-1 input-focus" />
                        <span>或</span>
                        <input type="text" ref={urlRef} placeholder="url:" className="w-72 border-2 rounded-xl px-2 py-1 input-focus" />
                    </div>
                    <div className="flex flex-col gap-4 text-zinc-600">
                        <h1>选择平台直播间</h1>
                        <SocialPlatformOption type={"checkbox"} onChange={handleSelectionChange} />
                    </div>
                    <div className="flex gap-5 text-zinc-600 items-center ">
                        <span>起止时间</span>
                        <input ref={startTimeRef} className="w-48 text-right rounded-3xl input-focus border-2 py-1 px-2 " type="datetime-local" placeholder="年-月-日" />
                        <span>至</span>
                        <input ref={endTimeRef} className="w-48 text-right rounded-3xl input-focus border-2 py-1 px-2 " type="datetime-local" placeholder="年-月-日" />

                    </div>
                    <div className="flex gap-4 items-center ">
                        <span className="text-zinc-600">数量要求</span>
                        <CounterButton onChange={handleCountChange} />
                    </div>
                    <div className="flex justify-end">
                        <button className="confirm-btn" onClick={submitBtnClick}>确定</button>
                    </div>
                </div>
                <Popup
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    title={popupContent.title}
                    content={popupContent.content}
                />
            </div>
        </MainView>
    )
}

export default LivePage
