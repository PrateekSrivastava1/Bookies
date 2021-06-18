import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-clone-b8ccc.cloudfunctions.net/api"
});
export default instance;
// 'http://localhost:5001/clone-b8ccc/us-central1/api'
