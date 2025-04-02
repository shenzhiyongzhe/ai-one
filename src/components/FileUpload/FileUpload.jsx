/* eslint-disable react/prop-types */
import PlusIcon from "../PlusIcon";
import { useState } from "react";
const FileUpload = ({ onFileSelected }) =>
{
    const [files, setFiles] = useState([]);
    const [videoUrl, setVideoUrl] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e) =>
    {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () =>
    {
        setIsDragging(false);
    };

    const handleDrop = (e) =>
    {
        e.preventDefault();
        const file = e.target.files[0];
        setIsDragging(false);
        if (e.dataTransfer.files)
        {
            setFiles(Array.from(e.dataTransfer.files));
            const url = URL.createObjectURL(file);
            setVideoUrl(url);
            onFileSelected(file)
        }
    };
    const handleFileSelect = (e) =>
    {
        console.log(e)
        const file = e.target.files[0];
        if (file)
        {
            setFiles(Array.from(e.target.files));
            const url = URL.createObjectURL(file);
            setVideoUrl(url);
            onFileSelected(file)
        }
    };
    const handleButtonClick = () =>
    {
        document.getElementById("fileInput").click();
    };
    return (
        <div className={` flex-1 w-[400px]  h-[300px] 
        p-4  transition-colors border-2 border-dashed shadow-md rounded-md flex items-center justify-center
        ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-[#edf6ff]"}
        `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleButtonClick}
        >
            <div className="text-lg  mb-4 flex flex-col items-center hover:cursor-pointer">
                <div className="flex flex-col justify-center items-center" >
                    {files.length > 0 ? (
                        <div className=" flex justify-center items-center gap-20 mt-4">
                            <video
                                controls
                                className="w-full rounded-md border border-gray-300 max-w-[300px]  max-h-[280px]"
                                src={videoUrl}
                            />
                            <div className="text-zinc-500 min-w-32">
                                <div >重新上传</div>
                                <ul className="mt-4 text-sm text-gray-700">
                                    {files.map((file, index) => (
                                        <li key={index} className="mb-2">
                                            {file.name} - {Math.round(file.size / 1024)} KB
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex items-center gap-2"><PlusIcon />点击上传/拖拽</div>
                            <div>到此区域</div>
                            <div className="text-zinc-500 text-sm mt-2">请上传mp4/mov/avi视频，大小在60M内</div>
                        </div>
                    )
                    }
                </div>

            </div>
            <input
                id="fileInput"
                type="file"
                accept="video/*"
                className="hidden w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
                file:rounded-full file:border-0 file:text-sm file:font-semibold 
                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                onChange={handleFileSelect}
            />

        </div>

    );
};
export default FileUpload;
