import ConfirmButton from "../components/ConfirmButton"
import CounterButton from "../components/CounterButton"
import Header from "../components/Header/Header"
import { MainView } from "../components/MainView/MainView"
import SocialPlatformOption from "../components/SocialPlatformOption"

import { useState } from "react";
const LivePage = () =>
{
    let platformOptions = []

    const handleSelectionChange = (values) =>
    {
        platformOptions = values;
    };
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
                        <input type="text" placeholder="主播ID:" className="w-72 border-2 rounded-xl px-2 py-1" />
                        <span>或</span>
                        <input type="text" placeholder="url:" className="w-72 border-2 rounded-xl px-2 py-1" />
                    </div>
                    <div className="flex flex-col gap-4 text-zinc-600">
                        <h1>选择平台直播间</h1>
                        <SocialPlatformOption type={"checkbox"} onChange={handleSelectionChange} />
                    </div>
                    <div className="flex gap-5 text-zinc-600 items-center ">
                        <h1>起止时间</h1>
                        <input type="text" placeholder="时/分" className="w-64 text-right px-4 py-1 border-2 rounded-2xl" />
                        <span>至</span>
                        <input type="text" placeholder="时/分" className="w-64 text-right px-4 py-1 border-2 rounded-2xl" />
                    </div>
                    <div className="flex gap-4 items-center ">
                        <span className="text-zinc-600">数量要求</span>
                        <CounterButton />
                    </div>
                    <div className="flex justify-end">
                        <ConfirmButton />
                    </div>
                </div>
            </div>
        </MainView>
    )
}

export default LivePage
