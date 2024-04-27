import axiosClient from "./axios";


export async function Login(email, password) {
    try {
        const response = await axiosClient().post("auth/login/", { password: password, username: email });
        if (response.statusCode === 401) {
            return { status: 401, message: response.detail }

        }
        console.log(response.data)
        return await { data: await response.data, status: 200 };
    } catch (errr) {
        console.log(errr, 'drom')
        return {
            status: 500,
            message: errr?.response?.data?.error||errr?.response?.data?.message||errr?.response?.data?.detail||'Unable To Process Your Request'

        }
    }

}