
import axios from "axios";

export const baseUrl = " http://192.168.1.67:5000"
export const PostRequest = async (url, params) => await axios.post(`${baseUrl}${url}`, params)
export const GetRequest = async (url, params) => await axios.get(`${baseUrl}${url}`, params)

export const userLoginRequest = async (params) => await PostRequest("/api/login", params)


export const userRegisterRequest = async (params) => await PostRequest("/api/register", params)

export const GenerateTaskRequest = async (params) =>
{
    let formData = new FormData();

    // 将其他参数添加到formData
    for (let key in params)
    {
        formData.append(key, params[key]);
    }
    try
    {
        const response = await axios.post(`${baseUrl}/device/upload_task`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response;
    } catch (error)
    {
        console.error('There was an error!', error);
        return error;
    }
};




