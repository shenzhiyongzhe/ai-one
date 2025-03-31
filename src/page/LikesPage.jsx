import Header from "../components/Header/Header"
import { MainView } from "../components/MainView/MainView"
import { MdOutlinePersonSearch } from "react-icons/md";
import SocialPlatformOption from "../components/SocialPlatformOption";
import CounterButton from "../components/CounterButton";
import ConfirmButton from "../components/ConfirmButton";
const LikesPage = () =>
{
    let selectedPlatform;

    const handleSelectionChange = (values) =>
    {
        selectedPlatform = values;
    };
    const submitBtnClick = () =>
    {
        console.log(selectedPlatform)
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
                    <div className="flex flex-col gap-6  text-zinc-600">
                        <div className="flex gap-4 items-center">
                            <input type="text" placeholder="用户ID:" className="w-72 border-2 rounded-lg py-1 px-2" />
                            <span>或</span>
                            <input type="text" placeholder="常用关键词:" className="w-72 border-2 rounded-lg py-1 px-2" />
                        </div>
                        <div className="flex gap-4 items-center">
                            <input type="text" placeholder="url:" className="w-72 border-2 rounded-lg py-1 px-2" />
                            <span>或</span>
                            <input type="text" placeholder="口令:" className="w-72 border-2 rounded-lg py-1 px-2" />
                        </div>

                    </div>
                    <div className="mt-3 text-zinc-600 flex flex-col gap-4">
                        <h1>选择点赞平台</h1>
                        <SocialPlatformOption type={"radio"} onChange={handleSelectionChange} />
                    </div>
                    <div className="flex gap-4 items-center ">
                        <span className="text-zinc-600">数量要求</span>
                        <CounterButton />
                    </div>
                    <div className="flex gap-5 text-zinc-600 items-center ">
                        <h1>起止时间</h1>
                        <input type="text" placeholder="时/分" className="w-64text-right px-4 py-1 border-2 rounded-2xl" />
                        <span>至</span>
                        <input type="text" placeholder="时/分" className="w-64text-right px-4 py-1 border-2 rounded-2xl" />
                    </div>
                    <div className="flex justify-end">
                        <ConfirmButton onClick={submitBtnClick} />
                    </div>
                </div>

            </div>

        </MainView>
    )
}

export default LikesPage
