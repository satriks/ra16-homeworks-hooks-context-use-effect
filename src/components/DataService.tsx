import axios from "axios"

export default class DataService {


static getData = async () => {
    const data = await axios.get("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
    return data
}   

static getUser = async (id:string) => {
    const data = await axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
    return data
}
}
