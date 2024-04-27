import axiosClient from "./axios"
import {getToken} from "./getTutorProfile"

export async function getUserProfile() {
    try {
        const fetch=await axiosClient().get('/user/profile/', {
            headers: {
                Authorization: `Bearer ${await getToken()}`
            }
        })
    
        return fetch.data
    }
    catch(e) {
        
        return {
        }
    }

}