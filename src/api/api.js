import axios from "axios";

export async function getUser(){
    let userdata = await axios.get("https://jsonplaceholder.typicode.com/users")
    return userdata
}