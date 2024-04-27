// UserContext.js
import { createContext } from 'react';

export const tutorViewInitalData = {
    authentication: {
        user_type:"",
        signin: false,
        token: '',
        error: ''
    },
    tutorProfile: {
        myClass: {},
        profile: {
            user: {},
            full_name: 'loading',
            first_name: 'loading',
            last_name: 'loading',
            email: 'loading',
            phone: 'loading',
            cretedate: 'loading',
            bio: 'loading',
            user_type: 'loading',
            createdAT: 'loading'
        },
        subject: [{
            name: 'loading',
            level: 'loading',
            price: 'loading'
        }],
        grades: 'loading',
        sessionRate: 'loading',
        avaliability_time: {},
        avaliableTime: {},
        createdAt: "loading"


    }
}
const TutorContext = createContext({...tutorViewInitalData })

export { TutorContext }