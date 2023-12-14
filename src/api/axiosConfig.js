import axios from 'axios'; 

// Implement the axios configuration
export default axios.create({
    baseURL: 'https://api-disneymovies.onrender.com'
});