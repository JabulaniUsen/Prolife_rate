import axiosClient from "./axios"

export async function getToken() {
    return localStorage.getItem('token')
}

export async function useTutorProfile() {
    const token = JSON.parse(localStorage.getItem('tutor_data') ?? '{}')?.authentication?.token
    console.log(token, 'kop')
    try {
        const fetch = await axiosClient().get('/tutor/get-tutor-profile/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return fetch.data()
    }
    catch(e) {
        return {
            
        }
    }

}