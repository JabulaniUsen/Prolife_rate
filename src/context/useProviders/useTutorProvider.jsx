import {useState} from "react";
import {TutorContext,tutorViewInitalData} from "../createContext/useTutor";


export function UseTutorProvider({children}) {
    const [tutor, setTutor]=useState(tutorViewInitalData);
    const tutorContext={tutor, setTutor}
    return (
        <TutorContext.Provider value={tutorContext}>
            {children}
        </TutorContext.Provider>
    )
}


