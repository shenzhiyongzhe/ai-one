const Management = () =>
{
    return (
        <div className="flex items-center gap-7 pt-4">
            <div className="flex  items-center gap-3 bg-[#ffece9] px-4 py-2 rounded-md min-w-[220px]">
                <div className="w-9">
                    <img src="/myManagement/publish.png" alt="" />
                </div>
                <div className="flex gap-3 justify-center items-center">
                    <span className="font-semibold">发布</span>
                    <div className="border-l border-zinc-400 h-3"></div>

                    <span className="text-sm text-zinc-500">上传作品</span>
                </div>

            </div>
            <div className="flex  items-center gap-3 bg-[#ecf6ff] px-4 py-2 rounded-md min-w-[220px]">
                <div className="w-9">
                    <img src="/myManagement/order.png" alt="" />
                </div>
                <div className="flex gap-3 justify-center items-center">
                    <span className="font-semibold">订单</span>
                    <div className="border-l border-zinc-400 h-3"></div>

                    <span className="text-sm text-zinc-500">查看订单</span>
                </div>

            </div>
            <div className="flex  items-center gap-3 bg-[#f3f1ff] px-4 py-2 rounded-md min-w-[230px]">
                <div className="w-9">
                    <img src="/myManagement/income.png" alt="" />
                </div>
                <div className="flex gap-3 justify-center items-center">
                    <span className="font-semibold">收益</span>
                    <div className="border-l border-zinc-400 h-3"></div>

                    <span className="text-sm text-zinc-500">查看收入</span>
                </div>

            </div>
            <div className="flex  items-center gap-3 bg-[#ffeadc] px-4 py-2 rounded-md min-w-[220px]">
                <div className="w-9">
                    <img src="/myManagement/device.png" alt="" />
                </div>
                <div className="flex gap-3 justify-center items-center">
                    <span className="font-semibold">设备</span>
                    <div className="border-l border-zinc-400 h-3"></div>

                    <span className="text-sm text-zinc-500">手机状态</span>
                </div>
            </div>

        </div>
    )
}

export default Management
