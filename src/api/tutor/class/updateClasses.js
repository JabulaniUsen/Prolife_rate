import axiosClient from "../../axios"


export async function getToken() {
    return localStorage.getItem('token')
}

export async function updateClass(pk,classData) {
    const token=JSON.parse(localStorage.getItem('tutor_data')??'{}')?.authentication?.token
    console.log(token, 'kop')
    try {
        const fetch=await axiosClient().get(`/tutor/update-class/${pk}`, classData , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return fetch.data
    } catch(e) {
        return {}
    }
}
