import axios, {type AxiosProgressEvent, isAxiosError} from "axios";
import {BASE_URL} from "../consts.ts";

// axios(config);

export const getUsers = async () => {
    axios.defaults.timeout = 10000; // overwritten in config below

    const config = {
        url: BASE_URL + "/users",
        method: "GET",
        headers: {
            // Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        params: {
            page: 1,
        },
        timeout: 1000, // config overwrites defaults
        withCredentials: true,
        // onUploadProgress: (progress) => {
        //     console.log(progress.loaded, progress.total);
        // },
        onDownloadProgress: (e: AxiosProgressEvent) => {
            const total = e.total;
            const loaded = e.loaded;
            if (total) {
                const percent = Math.round((loaded / total) * 100);
                console.log(`downloaded: ${percent.toFixed(2)}%`);
            } else {
                console.log(`loaded: ${loaded} bytes`);
            }
        },
    }
    const res = await axios(config);
    // console.log(res);
    return res.data;
}

export type PostData = Record<string, string>;
export const setPost = async (postData: PostData) => {
    const res = await axios.post(BASE_URL + "/posts", postData);
    console.log(res);
    return res.data;
}

export const getUserById = async (id: string) => {
    try {
        const res = await axios.get(`${BASE_URL}/users/${id}`);
        console.log(res);
        return res.data;
    } catch (e) {
        // AxiosError?
        if (isAxiosError(e)) {
            console.error("Axios error object", e);
            const status = e.response?.status;
            const serverData = e.response?.data;
            console.error(status);
            console.error(serverData);
        } else if (e instanceof Error) {
            console.log("Error", e.message);
        } else {
            // very strange
            console.log("Unknown error", e);
        }
    }
}