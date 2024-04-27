import { useEffect, useState } from "react";
import { TutorContext, tutorViewInitalData } from "../createContext/useTutor";
import { UseSessionContext, ViewInitalData } from "../createContext/useSession";
import {Logout as signOut} from "../../api/logout";
import {useNavigate} from 'react-router-dom'


export function UseSessionProvider({ children }) {
  const data=localStorage.getItem('tutor_data')
  const studntDatas= localStorage.getItem('student_data')
  const tutorData=JSON.parse(!data||data=='undefined'? 'null':data);
  const studentData=JSON.parse(!studntDatas||studntDatas=='undefined'? 'null':studntDatas);
 
  const currentUser=tutorData||studentData;
  const [session, update]=useState(currentUser?? ViewInitalData);
  const navigate=useNavigate()
    const updateSession = (data) => {
      const sessionData=data();
        if (sessionData.authentication.user_type === 'tutor') {
            localStorage.setItem('tutor_data', JSON.stringify(sessionData))
      }
        else if(sessionData.authentication.user_type==='student') {
          // console.log(sessionData,session,'aqa')
          localStorage.setItem('student_data', JSON.stringify(sessionData))
      }
        update(sessionData);
    }
  const Logout=(Provider) => {
    update({})
    signOut(Provider)
    navigate('/signin')
    }
    const tutorContext = { session, updateSession, Logout }
  return (<UseSessionContext.Provider value={tutorContext} > {children}
    </UseSessionContext.Provider>
    )
}