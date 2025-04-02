import { useState } from "react";
// eslint-disable-next-line react/prop-types
const StateBtn = ({ onClick, text = "确定", bg = "bg-teal-500", className }) =>
{
    const [isDisabled, setIsDisabled] = useState(false);
    const handleClick = async () =>
    {
        setIsDisabled(true);
        try
        {
            await onClick();
        } finally
        {
            setIsDisabled(false);
        }
    };
    return (
        <button
            onClick={handleClick}
            disabled={isDisabled}
            className={`${isDisabled ? "bg-[#356be0]" : bg} rounded-full 
            ${isDisabled ? "cursor-progress" : "cursor-pointer"}
            ${isDisabled ? "hover:bg-[#304574]" : "hover:bg-[#1d3363]"}
             text-white text-sm px-5 py-2
               ${className}`}
        >
            {isDisabled ? "处理中..." : text}
        </button >
    )
}
export default StateBtn