import axios, { isAxiosError } from "axios";
const fetchData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("Todo", response.data);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error.message);
            if (error.response) {
                console.log(error.response.status);
            }
        }
    }
};
//# sourceMappingURL=WebReq.js.map