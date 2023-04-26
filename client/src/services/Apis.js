import { commonrequest } from "./ApiCalls";
import {BACKEND_URL} from "./helper";


export const registerfunction = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/register`,data)
}
