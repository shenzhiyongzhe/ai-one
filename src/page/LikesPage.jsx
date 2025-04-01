import Header from "../components/Header/Header"
import { MainView } from "../components/MainView/MainView"
import { MdOutlinePersonSearch } from "react-icons/md";
import SocialPlatformOption from "../components/SocialPlatformOption";
import CounterButton from "../components/CounterButton";
import { useRef, useState, } from "react";
import { useLocation } from 'react-router-dom';
import { GenerateTaskRequest } from "../utils/http";
import Popup from "../components/Popup";
import { LinkValidation } from "../utils/tool";
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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [popupContent, setPopupContent] = useState({})
    const [selectedPlatform, setSelectedPlatform] = useState([])
    const [count, setCount] = useState(1)

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const userIDRef = useRef('');
    const commonKeywordRef = useRef('');
    const urlRef = useRef('')
    const shareUrlRef = useRef('')

    const startTimeRef = useRef('')
    const endTimeRef = useRef('')

    const submitBtnClick = async () =>
    {
        const pathName = location.pathname.split("/")[1]
        const actionTypeArr = ["", 'share', "likes", "comment", "live"]

        const action_type = actionTypeArr.indexOf(pathName)
        const anchor_id = userIDRef.current.value
        const keyword = commonKeywordRef.current.value
        const url = urlRef.current.value
        const password_url = shareUrlRef.current.value
        const start_time = startTimeRef.current.value;
        const end_time = endTimeRef.current.value;
        const formData = { action_type, anchor_id, keyword, url, password_url, platforms: selectedPlatform, quantity: count, start_time, end_time }

        // console.log("post data:" + JSON.stringify(formData))
        //校验用户输入
        if (!anchor_id && !keyword && !url && !password_url)
        {
            setPopupContent({ title: "未填写必要参数", content: "请输入其中一个类型" })
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
            setPopupContent({ title: "未填写必要参数", content: "请选择一个点赞平台" })
            openModal()
            return;
        }
        if (!start_time)
        {
            setPopupContent({ title: "未填写必要参数", content: "请选择开始时间" })
            openModal()
            return;
        }
        if (!end_time)
        {
            setPopupContent({ title: "未填写必要参数", content: "请选择结束时间" })
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
        const res = await GenerateTaskRequest(formData)
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
                <div className="flex flex-col gap-10 bg-white min-w-[900px] px-5 py-4 rounded-md shadow-md">
                    <div className="flex items-end gap-2">
                        <MdOutlinePersonSearch className="text-[48px] text-[#3ed0c1]" />
                        <div className="text-zinc-500 pb-1">输入你想要点赞的用户或对象</div>
                    </div>
                    <div className="flex flex-col gap-4  text-zinc-600">
                        <h1>请选择其中一个类型输入</h1>
                        <div className="flex gap-4 items-center">
                            <input type="text" ref={userIDRef} maxLength={20} placeholder="用户ID:" className="w-72 input-focus primary-input" />
                            <input type="text" ref={commonKeywordRef} maxLength={20} placeholder="常用关键词:" className="w-72 input-focus primary-input" />
                        </div>
                        <div className="flex gap-4 items-center">
                            <input type="text" ref={urlRef} maxLength={100} placeholder="url:" className="w-72 input-focus primary-input" />
                            <input type="text" ref={shareUrlRef} title="口令（视频号请粘贴标题加账号，中间空格）" maxLength={300} placeholder="口令:" className="w-72 input-focus primary-input" />
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
                        <input type="datetime-local" ref={startTimeRef} placeholder="时/分" className="w-48 text-right rounded-3xl input-focus border-2 py-1 px-2 " />
                        <span>至</span>
                        <input type="datetime-local" ref={endTimeRef} placeholder="时/分" className="w-48 text-right rounded-3xl input-focus border-2 py-1 px-2 " />
                    </div>
                    <div className="flex justify-end">
                        <button className="confirm-btn" onClick={submitBtnClick}  >确定</button>
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
