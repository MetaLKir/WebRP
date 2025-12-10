import axios, {type AxiosProgressEvent} from "axios";

export const BASE_URL = 'https://jsonplaceholder.typicode.com/';

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