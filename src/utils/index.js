
import axios from "axios";

// export const baseUrl = "http://localhost:8001/"
// export const baseUrl = "http://8.138.153.122:8001/"
export const baseUrl = " http://192.168.1.67:5000"
export const PostRequest = async (url, params) => await axios.post(`${baseUrl}${url}`, params)
export const GetRequest = async (url, params) => await axios.get(`${baseUrl}${url}`, params)

export const userLoginRequest = async (params) => await PostRequest("/api/login", params)
export const userLoginUpdate = async (obj) =>
{
    try
    {
        return await axios.post(`${baseUrl}users`, obj)
    } catch (error)
    {
        console.log(error)
    }
}
export const IdInsMutualConversion = async (field, list) =>
{
    const param = {
        "field": field,
        "list": list
    }
    const res = await PostRequest("instance/query", param);
    const resultList = res.data.result;
    const conversionList = [];
    if (field == "id")
    {
        resultList.map((item) => conversionList.push(item.ins));
    }
    else if (field == "ins")
    {
        resultList.map((item) => conversionList.push(item.id));
    }
    return conversionList;
}

export const updateDevOpsInsList = async (insList, project, action) => await PostRequest("devOps/insList", { insList, project, action, })


export const getDevOpsCount = async () => await GetRequest("devOps/getListCount")

export const searchDevice = async (params) => await PostRequest("devices/getList", params)



