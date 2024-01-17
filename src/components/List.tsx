import { v4 } from "uuid"

interface Props {
    data: {id:string, name: string}[],
    setChecked : React.Dispatch<React.SetStateAction<string>>, 
    setLoading : React.Dispatch<React.SetStateAction<boolean>>, 
    checked : string
}

export default function List ({data, setChecked, setLoading, checked}: Props){

    return (
        <div className="users__wrapper">
            <ul className="users">
            {data.map(user => (<li 
                                className={user.id == checked ? 'active' : ""}
                                id={user.id} 
                                key={v4()}
                                onClick={
                                    (evt)=>{
                                        const target = evt.target as HTMLFormElement
                                        setChecked(target.id)
                                        if (checked != target.id) setLoading(true) 
                                        }
                                 }>{user.name}</li>))}
            </ul>
        </div>
    )
}