/*
const res = await axios(config);
axios.get(url, config?);
axios.post(url, data?, config?);
axios.delete(url, config?);
 */
import {BASE_URL} from "../consts.ts";
import axios from "axios";


export async function postWithFetch() {
    const res = await fetch(
        BASE_URL + "/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: "my personal post",
                body: "place for post, Fetch",
                userId: 1,
            })
        })

    const data = await res.json();
    console.log("fetch POST result: " + data.body);
    console.log("fetch POST result: " + data.title);
    console.log(data);
}

export async function postWithAxios() {
    const res = await axios.post(BASE_URL + "/posts", {
        title: "my personal post",
        body: "place for post, Axios",
        userId: 1,
    })
    console.log("axios POST result: " + res.data.body);
    console.log("axios POST result: " + res.data.title);
    console.log(res);
}