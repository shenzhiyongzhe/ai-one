import FileUpload from "../components/FileUpload/FileUpload";
import { MainView } from "../components/MainView/MainView"

import { FaLink } from "react-icons/fa6";
import { MdOutlineTopic } from "react-icons/md";
import SocialPlatformOption from "../components/SocialPlatformOption";
import CounterButton from "../components/CounterButton";
import Header from "../components/Header/Header";
import ConfirmButton from "../components/ConfirmButton";
import { useState, useRef } from "react";
const SharePage = () =>
{
    // const [selectedValues, setSelectedValues] = useState([]);
    let platformOptions = []

    const [selectedFile, setSelectedFile] = useState(null);

    const fileLinkRef = useRef('');

    const handleFileSelected = (file) =>
    {
        setSelectedFile(file);
    };

    const handleSelectionChange = (values) =>
    {
        platformOptions = values;
    };

    const submitBtnClick = () =>
    {
        const formData = {}
        formData.selectedFile = selectedFile;
        formData.fileLink = fileLinkRef.current.value;
        formData.platformOptions = platformOptions;
        console.log(platformOptions)
        console.log("submit data:" + JSON.stringify(formData))
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
                    <input type="text" className="mt-2 w-[980px] border-2 rounded-2xl px-4 py-1 text-sm" placeholder="输入你想说的话题" />
                    <div className="flex flex-col gap-2">
                        <div className="mt-4 text-zinc-600">转发要求</div>
                        <SocialPlatformOption type={"checkbox"} onChange={handleSelectionChange} />
                    </div>
                    <div className="flex gap-32 mt-10">
                        <div className="flex gap-4 items-center">
                            <span>数量要求</span>
                            <CounterButton />
                        </div>
                        <div className="flex gap-4 items-center">
                            <span>起止时间</span>
                            <input className="w-64 border-2 rounded-2xl px-2 py-1 text-sm" type="text" placeholder="年-月-日" />
                            <span>至</span>
                            <input className="w-64 border-2 rounded-2xl px-2 py-1 text-sm" type="text" placeholder="年-月-日" />

                        </div>
                    </div>
                    <div className="flex  items-center justify-between mt-10">
                        <div className="flex ">
                            <div className="flex items-center gap-4 ">
                                <span>停留时间</span>
                                <input type="text" className="w-40 h-9 text-right border-2 rounded-2xl px-4" placeholder="天" />
                            </div>
                            <div className="flex gap-4 items-center ml-32">
                                <span>连发次数</span>
                                <CounterButton />
                            </div>
                        </div>

                        <ConfirmButton onClick={submitBtnClick} />
                    </div>
                </div>
            </div>
        </MainView>
    )
}

export default SharePage
