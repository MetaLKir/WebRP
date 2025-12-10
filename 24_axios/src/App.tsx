import './App.css'
import {type FC, useState} from "react";
import {getUsers} from "./api/requests.ts";
// import axios from "axios";

export const App: FC = () => {
    const[data, setData] = useState<Record<string, string>>({});

    const handleClick = async () => {
        // console.log(axios.defaults)
        const res = await getUsers();
        setData(res);
    }

    return (
        <>
            <button onClick={handleClick}>get users</button>
            <p>{JSON.stringify(data)}</p>
        </>
    )
}

