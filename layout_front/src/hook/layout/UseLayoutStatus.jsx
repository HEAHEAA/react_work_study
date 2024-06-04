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
