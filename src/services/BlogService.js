import axios from 'axios';

const BLOG_API_BASE_URL = "http://localhost:8080/api/v1/";

class BlogService {

    async getBlogProperties(){
        return await axios.get(BLOG_API_BASE_URL + 'properties');
    }

    async getBlogPosts(limit, page) {
        return await axios.get(BLOG_API_BASE_URL + 'posts', {
            limit: limit,
            page: page
        })
    }
}

export default new BlogService()