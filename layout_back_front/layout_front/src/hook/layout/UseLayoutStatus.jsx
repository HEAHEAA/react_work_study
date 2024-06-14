import {useQuery} from "react-query";
import axios from "axios";

const fetchLayoutData = async () => {
    return await axios.get('/api/layout',{
        "Content-Type": "application/json"
    })
}

export const LayoutData = () => {
    return useQuery('layout-data', fetchLayoutData)
}

export const UpdateLayout = async (layId,body) => {
    const response = await axios.put(`/api/layout/update/${layId}`, body);
    return response.data;
}
