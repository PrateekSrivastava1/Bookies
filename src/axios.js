import axios from "axios";

const fetchedData = axios.create({
    baseURL: 'http://localhost:5001/clone-b8ccc/us-central1/api'
});
export default fetchedData;