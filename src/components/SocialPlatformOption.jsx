/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const SocialPlatformOption = ({ type, onChange }) =>
{
    const options = [
        { id: 1, name: "视频号", label: "VideoChannel" },
        { id: 2, name: "抖音", label: "TikTok" },
        { id: 3, name: "小红书", label: "RedNote" },
        { id: 4, name: "快手", label: "KuaiShou" },
        { id: 5, name: "bilibili", label: "Bilibili" },
    ];

    const [selectedValues, setSelectedValues] = useState([]);

    // 处理选择变化
    const handleChange = (event) =>
    {
        const value = event.target.value;

        if (type === 'radio')
        {
            // 单选逻辑
            setSelectedValues([value]);
        } else if (type === 'checkbox')
        {
            // 多选逻辑
            if (selectedValues.includes(value))
            {
                setSelectedValues(selectedValues.filter(v => v !== value));
            } else
            {
                setSelectedValues([...selectedValues, value]);
            }
        }
    };
    useEffect(() =>
    {
        onChange(selectedValues)

    }, [selectedValues])

    return (
        <div className='flex items-center gap-14'>
            {options.map((option) => (
                <label key={option.id} className="flex items-center gap-2">
                    <input
                        type={type}
                        value={option.label}
                        checked={
                            type === 'radio' ? selectedValues[0] === option.label :
                                selectedValues.includes(option.label)
                        }
                        onChange={handleChange}
                        className="form-radio h-4 w-4 text-indigo-600"
                    />
                    <div className="w-7">
                        <img src={`/platform/${option.label}.png`} alt="" />
                    </div>
                    <span>{option.name}</span>
                </label>
            ))}

        </div>
    )
}

export default SocialPlatformOption
