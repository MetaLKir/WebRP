import './App.css'
import {type FC, useState} from "react";
import {getUserById, getUsers, setPost} from "./api/requests.ts";
import {postWithAxios, postWithFetch} from "./api/axiosExample.ts";
// import axios from "axios";

export const App: FC = () => {
    const [data, setData] = useState<Record<string, string>>({});

    const handleClick = async () => {
        // console.log(axios.defaults)
        const res = await getUsers();
        setData(res);
    }

    const handleSetPost = async() => {
        const res = await setPost({
            title: "My new post",
            body: "Hello Carmiel",
        })
        setData(res);
    }

    const handleGetUserById = async() => {
        const res = await getUserById("1");
        setData(res);
    }

    return (
        <>
            <button onClick={handleClick}>get users</button>
            <button onClick={handleSetPost}>Set Post</button>
            <button onClick={handleGetUserById}>get user by id</button>
            <hr/>
            <p>{JSON.stringify(data)}</p>
            <hr/>
            <button onClick={postWithFetch}>Test Fetch POST</button>
            <button onClick={postWithAxios}>Test Axios POST</button>
            <hr/>
        </>
    )
}

