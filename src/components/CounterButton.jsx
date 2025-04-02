/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
const CounterButton = ({ onChange }) =>
{
    const [count, setCount] = useState(1);
    const handleDecrement = () =>
    {
        setCount(parseInt(count))
        if (count > 1)
        {
            setCount(count - 1);
        }
    };
    const handleIncrement = () =>
    {
        setCount(count + 1);
    };
    const handleInputClhange = (value) =>
    {
        let num = 1
        // if (value !== '0' && /^\s*0\d+\s*$/.test(value))
        // {
        //     console.log('整数不能以0开头，请重新输入！');
        //     setCount(0)
        // }
        num = Math.max(1, parseInt(value, 10))
        setCount(num)

        console.log(`num:${num}  count:${count}`)
    }
    useEffect(() =>
    {
        onChange(count)
    }, [count])
    return (
        <div className="flex items-center ">
            <button
                type="button"
                onClick={handleDecrement}
                className="w-9 h-9 flex items-center justify-center bg-[#4376e0] hover:bg-[#264485] text-white text-[24px] font-semibold  rounded-l-3xl focus:outline-none"
            >
                <span className="text-[32px] font-semibold pl-1 mb-1">-</span>
            </button>
            <input type="number" min={1} name="count" value={count} onChange={(e) => handleInputClhange(e.target.value)} className="h-9 text-center w-20 border-t border-b border-blue-300 px-4 py-1 input-focus" />
            <button
                type="button"
                onClick={handleIncrement}
                className="w-9 h-9 flex items-center justify-center bg-[#4376e0] hover:bg-[#264485] text-white text-[24px] font-semibold  rounded-r-3xl focus:outline-none"
            >
                <span className="text-[32px] font-semibold px-2 mb-1">＋</span>
            </button>
        </div>
    );
};

export default CounterButton;
