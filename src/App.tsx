import { useEffect, useState } from 'react'



import './App.css'
import DataService from './components/DataService';
import List from './components/List';
import Details from './components/Details';





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
            <List data={users} setChecked={setChecked} setLoading={setLoading} checked={checked}/>
            {checked && <Details id={checked} isLoading={isLoading} setLoading={setLoading} />}
        </div>
    );
}


export default App
