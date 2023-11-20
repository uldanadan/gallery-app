import axios from "axios";

const base_url = 'https://api.unsplash.com';
const username = 'uldanadan';
const token = 'Bearer VQ0xq4KgyADSNXpgM1C_-IJ4AQN8cJ4yyjClV1DyFZo';
const headers = {
    Authorization: token,
    'Cache-Control': 'no-cache'
}

const loadRandomImages = async () => {
    try {
        const response = await axios.get(`${base_url}/photos/random`, {
            params: {
                count: 9
            },
            headers
        });
        return response.data;
    } catch (error) {
        console.error('Error: ', error);
    }
}

const loadImagesByQuery = async (query) => {
    try {
        const response = await axios.get(`${base_url}/search/photos`, {
            params: {
                query
            },
            headers
        });
        return response.data.results;
    } catch (error) {
        console.error('Error: ', error);
    }
}

const loadImage = async (id) => {
    try {
        const response = await axios.get(`${base_url}/photos/${id}`, {
            headers
        });
        return response.data;
    } catch (error) {
        console.error('Error: ', error);
    }
}

const loadLikedImages = async () => {
    try {
        const response = await axios.get(`${base_url}/users/${username}/likes`, {
            headers
        });
        return response.data;
    } catch (error) {
        console.error('Error: ', error);
    }
}

const likeImage = async (id) => {
    try {
        const response = await axios.post(`${base_url}/photos/${id}/like`, {}, {
            headers: {
                Authorization: token
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error: ', error);
    }
}

const dislikeImage = async (id) => {
    try {
        const response = await axios.delete(`${base_url}/photos/${id}/like`, {
            headers: {
                Authorization: token
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error: ', error);
    }
}

const downloadImage = async (id) => {
    try {
        const response = await axios.get(`${base_url}/photos/${id}/download`, {
            headers: {
                Authorization: token
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error: ', error);
    }
}

export { loadRandomImages, loadImagesByQuery, loadImage, loadLikedImages, likeImage, dislikeImage, downloadImage };
