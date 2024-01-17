import { useEffect, useState } from "react";
import DataService from "./DataService";

interface Props {
    id: string ,
    isLoading : boolean,
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
}

interface UserInfo {
        id: number,
        name: string,
        avatar: string,
        details: {
            city: string,
            company: string,
            position: string
        }
    }

export default function Details ({id , isLoading, setLoading}: Props) {
    const [info , setInfo] = useState<UserInfo>()

    useEffect(() => {
        const userInfo = async() => { 
            try {
                const res = await DataService.getUser(id)
                setInfo(res.data) 
            }
            finally {setLoading(false)}
                
         
            
        }
    
        void userInfo()

    }, [id, setLoading])
    

    if (isLoading) return <div className="loading">Loading...</div>
    if (!info) { return ( <div></div>)}

    return (
        <div className="user__info">
            <img src={info.avatar + "?" + info.id }/>
            <ul>
                <li>{info.name}</li>
                <li>City : {info.details.city}</li>
                <li>Company : {info.details.company}</li>
                <li>Position : {info.details.position}</li>

            </ul>
        </div>
    )
}