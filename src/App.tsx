import { useEffect, useState } from 'react'



import './App.css'
import DataService from './components/DataService';
import Users from './components/Users';
import UserInfo from './components/UserInfo';





export function App() {
    const [users, setUsers] = useState([]);
    const [checked, setChecked] = useState("");
    const [isLoading, setLoading] = useState(false);
    
    

    useEffect(() => {
        const getData = async() => { 
            const res = await DataService.getData()
            
            setUsers(res.data) 
            
        }
    
        void getData()

        
    }, [])


    
    return (
        <div id="app">
            <Users data={users} setChecked={setChecked} setLoading={setLoading} checked={checked}/>
            {checked && <UserInfo id={checked} isLoading={isLoading} setLoading={setLoading} />}
        </div>
    );
}


export default App
