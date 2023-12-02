import axios from 'axios';

const BLOG_API_BASE_URL = "http://localhost:8080/api/v1/";

class BlogService {

    async getBlogProperties(){
        return await axios.get(BLOG_API_BASE_URL + 'properties');
    }

    async getBlogPosts(limit, page) {
        return await axios.get(BLOG_API_BASE_URL + 'posts', {
            params: {
                limit: limit,
                page: page
            },

        })
    }

    async addBlogPost(content) {
        return await  axios.post(BLOG_API_BASE_URL + 'posts', {
            content: content
        });
    }

    async getPostById(id) {
        return await  axios.get(BLOG_API_BASE_URL + 'posts/' + id);
    }

    async updateBlogPost(id, content) {
        return await axios.put(BLOG_API_BASE_URL + 'posts/' + id, {
            content: content
        } );
    }

    async search(input, limit) {
        return await axios.get(BLOG_API_BASE_URL + 'search', {
            params: {
                input: input,
                limit: limit
            }
        });
    }

}

export default new BlogService()