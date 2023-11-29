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

    async addBlogPost(title, content) {
        return await  axios.post(BLOG_API_BASE_URL + 'posts', {
            title: title,
            content: content
        });
    }

    async getPostById(id) {
        return await  axios.get(BLOG_API_BASE_URL + 'posts/' + id);
    }
}

export default new BlogService()