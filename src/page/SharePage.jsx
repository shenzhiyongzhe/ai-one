import FileUpload from "../components/FileUpload/FileUpload";
import { MainView } from "../components/MainView/MainView"

import { FaLink } from "react-icons/fa6";
import { MdOutlineTopic } from "react-icons/md";
import SocialPlatformOption from "../components/SocialPlatformOption";
import CounterButton from "../components/CounterButton";
import Header from "../components/Header/Header";
import { useState, useRef } from "react";
import Popup from "../components/Popup";
import { useLocation } from 'react-router-dom';
import { GenerateTaskRequest } from "../utils/http";

const SharePage = () =>
{
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [popupContent, setPopupContent] = useState({})

    const [selectedFile, setSelectedFile] = useState(null);
    const fileLinkRef = useRef('');

    const titleInputRef = useRef('')
    const [selectedPlatform, setSelectedPlatform] = useState([])
    const [count, setCount] = useState(1)
    const durationInputRef = useRef(0)
    const [repeatNum, setRepeatNum] = useState([])

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const startTimeRef = useRef('')
    const endTimeRef = useRef('')

    const handleFileSelected = (file) =>
    {
        setSelectedFile(file);
    };

    const handleSelectionChange = (values) =>
    {
        setSelectedPlatform(values)
    };

    const handleCountChange = (num) =>
    {
        setCount(num)
    }
    const handleRepeatChange = (num) =>
    {
        setRepeatNum(num)
    }
    const submitBtnClick = async () =>
    {
        console.log("提交")
        const pathName = location.pathname.split("/")[1]
        const actionTypeArr = ["", 'share', "likes", "comment", "live"]

        const action_type = actionTypeArr.indexOf(pathName)
        const title = titleInputRef.current.value;
        const start_time = startTimeRef.current.value;
        const end_time = endTimeRef.current.value;
        const duration = parseInt(durationInputRef.current.value);
        const repeat = repeatNum
        const formData = { action_type, platforms: selectedPlatform, duration, repeat, quantity: count, start_time, end_time }

        // console.log("post data:" + JSON.stringify(formData))
        //校验用户输入
        if (!selectedFile && !fileLinkRef.current.value)
        {
            setPopupContent({ title: "文件为空", content: "请上传文件或粘贴链接" })
            openModal()
            return;
        }
        if (!title)
        {
            setPopupContent({ title: "标题为空", content: "请输入你想说的标题" })
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
            setPopupContent({ title: "未选择开始时间", content: "请选择开始时间" })
            openModal()
            return;
        }
        if (!end_time)
        {
            setPopupContent({ title: "未选择结束时间", content: "请选择结束时间" })
            openModal()
            return;
        }
        if (!duration)
        {
            setPopupContent({ title: "未选择停留时间", content: "请填写停留时间" })
            openModal()
            return;
        }
        const startDate = new Date(start_time.replace('T', ' '));
        const endDate = new Date(end_time.replace('T', ' '));
        const now = new Date();
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
        console.log(JSON.stringify(formData))
        const res = await GenerateTaskRequest(selectedFile, formData)
        if (res.data)
        {
            setPopupContent({ title: "发送结果", content: res.data.message })
        }
        else
        {
            setPopupContent({ title: "服务器错误", content: "发送数据失败" })
        }
        openModal()

    }

    return (
        <MainView>
            <div className="flex flex-col gap-6 ">
                <Header />

                <div className="flex justify-center items-center bg-white min-w-[900px] px-5 py-4 rounded-md shadow-md gap-20">
                    <FileUpload onFileSelected={handleFileSelected} />
                    <div className="text-zinc-500">或</div>
                    <div className="flex flex-col gap-2 border-2">
                        <div className="flex flex-col  gap-1 min-w-[300px] min-h-[300px] p-4">
                            <div className="flex gap-2 items-center">
                                <FaLink className="text-blue-400 text-xl" />
                                <span className="font-semibold">使用链接</span>
                            </div>
                            <textarea type="text" ref={fileLinkRef} className="flex-1  rounded-xl px-4 py-1 text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="粘贴链接" />
                        </div>

                    </div>
                </div>
                <div className="bg-white min-w-[900px] px-5 py-4 rounded-md shadow-md">
                    <div className="flex items-center gap-2">
                        <MdOutlineTopic className="text-blue-400 text-2xl" />标题
                    </div>
                    <input type="text" ref={titleInputRef} maxLength={30} className="mt-2 w-[980px] border-2 rounded-2xl px-4 py-1 input-focus text-sm" placeholder="输入你想说的话题" />
                    <div className="flex flex-col gap-2">
                        <div className="mt-4 text-zinc-600">转发要求</div>
                        <SocialPlatformOption type={"checkbox"} onChange={handleSelectionChange} />
                    </div>
                    <div className="flex gap-32 mt-10">
                        <div className="flex gap-4 items-center">
                            <span>数量要求</span>
                            <CounterButton onChange={handleCountChange} />
                        </div>
                        <div className="flex gap-4 items-center">
                            <span>起止时间</span>
                            <input ref={startTimeRef} className="w-48 text-right rounded-3xl input-focus border-2 py-1 px-2 " type="datetime-local" placeholder="年-月-日" />
                            <span>至</span>
                            <input ref={endTimeRef} className="w-48 text-right rounded-3xl input-focus border-2 py-1 px-2 " type="datetime-local" placeholder="年-月-日" />

                        </div>
                    </div>
                    <div className="flex  items-center justify-between mt-10">
                        <div className="flex ">
                            <div className="flex items-center gap-4 ">
                                <span>停留时间</span>
                                <input type="number" ref={durationInputRef} className="w-40 h-9 text-right border-2 px-2 rounded-2xl  input-focus" placeholder=" 1 天" />
                            </div>
                            <div className="flex gap-4 items-center ml-32">
                                <span>连发次数</span>
                                <CounterButton onChange={handleRepeatChange} />
                            </div>
                        </div>

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

export default SharePage
