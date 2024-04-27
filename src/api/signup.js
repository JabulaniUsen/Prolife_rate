import axiosClient from "./axios";

export async function Signup({ email, password, full_name, password2 }) {
    try {
        const response = await axiosClient().post("auth/register_tutor/", {
            password,
            username: email,
            full_name,
            email,
            first_name: full_name.split(' ')[0],
            last_name: full_name.replace(full_name.split(' ')[0], ''),
            sessionRate: 4.0,
            image: "",
            user_type: 'tutor',
            bio: 'I am a Tutor!'
        }, {
            headers: {
                Authorization: ''
            }
        });

        if (response.status === 401) {
            return { status: 401, message: response.data.detail };
        }

        return { data: response.data, status: 200 };
    } catch (error) {
        return {
            status: error.response?.status || 500,
            message: error?.response?.data?.error || error?.response?.data?.message || error?.response?.data?.detail || 'Unable To Process Your Request'
        };
    }
}
