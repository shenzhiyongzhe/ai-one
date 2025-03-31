import { useState } from "react";
const CounterButton = () =>
{
    const [count, setCount] = useState(0);
    const handleDecrement = () =>
    {
        if (count > 0)
        {
            setCount(count - 1);
        }
    };
    const handleIncrement = () =>
    {
        setCount(count + 1);
    };
    return (
        <div className="flex items-center ">
            <button
                onClick={handleDecrement}
                className="w-9 h-9 flex items-center justify-center bg-[#4376e0] hover:bg-[#264485] text-white text-[24px] font-semibold  rounded-l-3xl focus:outline-none"
            >
                <span className="text-[32px] font-semibold pl-1 mb-1">-</span>
            </button>
            <span className="h-9 w-20 border-t border-b border-blue-300 px-4 py-1 flex items-center justify-center">
                {count}
            </span>
            <button
                onClick={handleIncrement}
                className="w-9 h-9 flex items-center justify-center bg-[#4376e0] hover:bg-[#264485] text-white text-[24px] font-semibold  rounded-r-3xl focus:outline-none"
            >
                <span className="text-[32px] font-semibold px-2 mb-1">＋</span>
            </button>
        </div>
    );
};

export default CounterButton;
