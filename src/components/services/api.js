import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com/';

axios.defaults.params = {
    per_page: 12,
    orientation: "landscape",
}

const API_KEY = 'TJqxy46EegWjUD1-PhaQz5Lq8osn-H0lT2S4DUn7GTM';

export const fetchData = async ( searchQuery, page ) => {

    const response = await axios.get(
        `/search/photos?page=${page}&query=${searchQuery}`,{ 
            headers: {
                Authorization: `Client-ID ${API_KEY}`,
                "Accept-Version": "v1",
                },
            }
        )

    return response.data;
};

